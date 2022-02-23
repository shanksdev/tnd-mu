import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartData, PieControllerChartOptions } from 'chart.js';
import { ChartConfiguration } from 'chart.js/auto';

interface Color {
  name: string;
}

interface IPosition {
  top: any;
  left: any;
  bottom?: any;
  right?: any;
}

interface IParticipant {
  name: string;
  codeName?: string;
  color: Color;
  position?: IPosition;
}

@Component({
  selector: 'app-base-board',
  templateUrl:'./base-board.component.html',
  styleUrls:['./base-board.component.css'],
})
export class BaseBoardComponent implements OnInit, AfterViewInit {
  participants: IParticipant[] = [
    {
      name: 'Participant 1',
      color: {
        name: 'red',
      },
    },
    {
      name: 'Participant 2',
      color: {
        name: 'green',
      },
    },
    {
      name: 'Participant 3',
      color: {
        name: 'blue',
      },
    },
    {
      name: 'Participant 4',
      color: {
        name: 'orange',
      },
    },
    {
      name: 'Participant 5',
      color: {
        name: 'gray',
      },
    },
  ];
  @ViewChild('bottle') bottle: ElementRef;
  @ViewChild('participantsPie') participantsPie: ElementRef;
  bottleAngle: string = '0deg';
  backgroundImage:string = ''
  startSpin = false;
  private MIN_TIMES: number = 5;
  private MAX_TIMES: number = 50;
  private rotationHandler: any;
  participantsPieChart:Chart
  
  ngOnInit() {
    // const deg = 180/this.participants.length;
    // let tmpBg = 'linear-gradient('
    // tmpBg += `${deg}deg,`
    // const colShare = [];
    // this.participants.forEach((participant)=>{
    //   const gradShare = 100/this.participants.length;
    //   colShare.push(` ${participant.color.name} ${gradShare}%`);
    // })
    // tmpBg += colShare.join(',');
    // tmpBg += ')';
    // this.backgroundImage = tmpBg;
    // this.MIN_TIMES = Math.floor(Math.random() + this.MIN_TIMES);
    // this.MAX_TIMES = Math.floor(Math.random() + this.MAX_TIMES);
  }

  ngAfterViewInit(){
    const DATA_COUNT = 5;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const data:ChartData = {
      labels: this.participants.map((p)=>p.name),
      datasets: [
        {
          label: 'Dataset 1',
          data: new Array(this.participants.length).fill(1),
          backgroundColor: this.participants.map((p)=>p.color.name),
          parsing:false
        }
      ]
    };
    const config:ChartConfiguration = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display:false
          },
          title: {
            display: false,
            text: 'Chart.js Pie Chart'
          },
          tooltip:{
            enabled: false
          }
        }
      },
    }
    this.participantsPieChart = new Chart(this.participantsPie.nativeElement, config)
    console.log('on init = ');
  }

  spinTheBottle() {
    console.log('spin');
    const times = Math.floor(
      Math.random() * (this.MAX_TIMES - this.MIN_TIMES) + this.MIN_TIMES
    );
    let start = 1;
    let factor = 1;
    this.startSpin = true;
    setTimeout(()=>{
      this.startSpin = false;
      const bottleStyle = this.bottle.nativeElement;
      this.bottleAngle = bottleStyle.style.getPropertyValue('--to');
      bottleStyle.style.setProperty('--from', this.bottleAngle);
      bottleStyle.style.setProperty('--to', `${200 * times}deg`);
      console.log('bottle angle = ', this.bottleAngle);
    }, 3000);
    // this.rotationHandler = setInterval(() => {
    //   // console.log({start});
    //   if (start === 0) {
    //     clearInterval(this.rotationHandler);
    //   } else if (start < times && start > 0) {
    //     this.bottleAngle += factor;
    //     factor *= 2;
    //     start++;
    //   } else if (start >= times) {
    //     // this.bottleAngle -= factor;
    //     // factor /= 2;
    //     start = 0;
    //   }
    // }, 100);
  }
}
