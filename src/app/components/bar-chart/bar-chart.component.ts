import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ],
    datasets: [
      {
        label: 'Esta semana',
        data: [1000, 1200, 900, 1500, 1800, 2000, 1700], // Ejemplo de datos de la Serie 1
        backgroundColor: 'rgb(39, 47, 101)',
        borderColor: 'rgb(39, 47, 101)',
        borderWidth: 1,
        borderRadius: 100, // Configura el radio de las puntas redondas para la Serie 1
        barThickness: 25 //ancho de las barras
      },
      {
        label: 'Semana pasada',
        data: [800, 1100, 850, 1300, 1600, 1800, 1500], // Ejemplo de datos de la Serie 2
        backgroundColor: 'rgb(93, 149, 190)',
        borderColor: 'rgb(93, 149, 190)',
        borderWidth: 1,
        borderRadius: 100, // Configura el radio de las puntas redondas para la Serie 2,
        //ancho de las barras
        barThickness: 25,
        categoryPercentage: 0.5, //porcentaje de ancho de las barras
      },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
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

  constructor() {
  }
}
