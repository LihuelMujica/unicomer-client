import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Balance } from 'src/app/models/balance.model';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements  OnInit {

  @Input() thisWeek: Balance[] = [];
  @Input() lastWeek: Balance[] = [];

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.balanceService.getBalance().subscribe((data) => {
      this.thisWeek = data.thisWeek;
      this.lastWeek = data.lastWeek;
      this.barChartData.datasets[0].data = this.thisWeek.map((balance) => balance.balance);
      this.barChartData.datasets[1].data = this.lastWeek.map((balance) => balance.balance);
    });}




  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ],
    datasets: [
      {
        label: 'Esta semana',
        data: this.thisWeek.map((balance) => balance.balance),
        backgroundColor: 'rgb(39, 47, 101)',
        borderColor: 'rgb(39, 47, 101)',
        borderWidth: 1,
        borderRadius: 100,
        barThickness: 25
      },
      {
        label: 'Semana pasada',
        data: this.lastWeek.map((balance) => balance.balance),
        backgroundColor: 'rgb(93, 149, 190)',
        borderColor: 'rgb(93, 149, 190)',
        borderWidth: 1,
        borderRadius: 100,
        barThickness: 25,
        categoryPercentage: 0.5,
      },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        //legend should be circular
        labels: {
          usePointStyle: true
        }
      },
      title: {
        display: true,
        text: 'Balance',
        font: {
          size: 20
        },
        position: 'top'
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        ticks: {
          maxTicksLimit: 6
        }
      }
    }
  };



}
