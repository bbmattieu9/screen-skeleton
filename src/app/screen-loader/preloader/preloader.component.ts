import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  template: `
    <div [ngStyle]="getMyStyles()" class="skelt-load loader"></div>
    `,
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  @Input() cWidth;
  @Input() cHeight;
  @Input() circle: boolean;



  constructor() { }

  ngOnInit(): void { }

  getMyStyles(): any {
        const styles = {
           'width.px': this.cWidth ? this.cWidth :  '',
           'height.px': this.cHeight ? this.cHeight : '',
           'border-radius': this.circle ? '50%' : ''
        };
        return styles;
  }

}
