import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loadingService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('caught')
    this.totalRequests++;
    this.loadingService.loading = true;
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.loadingService.loading = false;
        }
      }),
      catchError((err) => {
        this.totalRequests--;
        console.log("totalRequests: ", this.totalRequests)
        if (this.totalRequests == 0) {
          this.loadingService.loading = false;
        }
        throw err(err);
      })
    );
  }
}
