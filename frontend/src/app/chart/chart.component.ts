import { Component, PLATFORM_ID, inject, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  private platformId = inject(PLATFORM_ID);
  public isBrowser = isPlatformBrowser(this.platformId);
  public showYearSelector = false;
  public selectedYear = new Date().getFullYear();
  public availableYears = [2022, 2023, 2024, 2025];

  // Legendendaten als Paare für zweispaltige Anzeige
  public legendLabels = [
    ['January', 'July'],
    ['February', 'August'],
    ['March', 'September'],
    ['April', 'October'],
    ['May', 'November'],
    ['June', 'December']
  ];

  public pieChartType = 'pie' as const;

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    }
  };

  public pieChartData = {
    labels: this.legendLabels.flat(),
    datasets: [{
      data: this.generateRandomData(),
      backgroundColor: [
        '#D94B4B', '#2E7BD2', '#F3DC3E', '#4CAF50',
        '#9775FA', '#F0B27A', '#B39DDB', '#FF5733',
        '#2ECC71', '#FFC300', '#1ABC9C', '#F1C40F'
      ],
      borderWidth: 1
    }]
  };

  private generateRandomData(): number[] {
    return Array.from({length: 12}, () => Math.floor(Math.random() * 20) + 1);
  }

  getColor(label: string): string {
    const index = this.pieChartData.labels.indexOf(label);
    return this.pieChartData.datasets[0].backgroundColor[index];
  }

  toggleYearSelector(event: Event): void {
    event.stopPropagation();
    this.showYearSelector = !this.showYearSelector;
  }

  selectYear(year: number): void {
    this.selectedYear = year;
    this.showYearSelector = false;
    this.updateChartData();
  }

  private updateChartData(): void {
    const newData = this.generateRandomData();
    this.pieChartData.datasets[0].data = newData;
    this.chart?.update();
  }
}