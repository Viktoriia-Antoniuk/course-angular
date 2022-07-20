import { Injectable } from '@angular/core';
import { List } from 'src/app/list.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  list: List[] = [];

  constructor() {  }

  getList() {
    return this.list;
  }

  calcList() {
    const arrayP1: number[] = this.list.map(item => item.p1);
    const min1: number = Math.min.apply(Math, arrayP1);
    const max1: number = Math.max.apply(Math, arrayP1);

    const arrayP2: number[] = this.list.map(item => item.p2);
    const min2: number = Math.min.apply(Math, arrayP2);
    const max2: number = Math.max.apply(Math, arrayP2);

    const arrayP3: number[] = this.list.map(item => item.p3);
    const min3: number = Math.min.apply(Math, arrayP3);
    const max3: number = Math.max.apply(Math, arrayP3);

    const arrayP4: number[] = this.list.map(item => item.p4);
    const min4: number = Math.min.apply(Math, arrayP4);
    const max4: number = Math.max.apply(Math, arrayP4);

    const arrayP11: number[] = this.list.map(item => item.p11);
    const min11: number = Math.min.apply(Math, arrayP11);
    const max11: number = Math.max.apply(Math, arrayP11);

    const arrayP12: number[] = this.list.map(item => item.p12);
    const min12: number = Math.min.apply(Math, arrayP12);
    const max12: number = Math.max.apply(Math, arrayP12);
    
    for (let i = 0; i < this.list.length; i++) {
      let y1 = 0.0841 * ((this.list[i].p1 - min1) / (max1 - min1));
      let y2 = 0.0933 * ((this.list[i].p2 - min2) / (max2 - min2));
      let y3 = 0.0616 * ((this.list[i].p3 - min3) / (max3 - min3));
      let y4 = 0.1339 * ((this.list[i].p4 - min4) / (max4 - min4));
      let y11 = 0.065 * ((this.list[i].p11 - min11) / (max11 - min11));
      let y12 = 0.1144 * ((this.list[i].p12 - min12) / (max12 - min12));
      let y = y1 + y2 + y3 + y4 + y11 + y12;
      console.log(y1, y);
      if(y < 0.25) {
        y += (this.list[i].p5 * 0.0365) + (this.list[i].p6 * 0.0126) + (this.list[i].p7 * 0.0126) + (this.list[i].p8 * 0.0342) + (this.list[i].p9 * 0.0182) + (this.list[i].p10 * 0.11) + (this.list[i].p13 * 0.0611) + (this.list[i].p14 * 0.0306) + (this.list[i].p15 * 0.0391) + (this.list[i].p16 * 0.0927);
      }
      this.list[i].y = +y.toFixed(4);
      if(this.list[i].y < 0.25) {
        this.list[i].level = 1;
      } else if(this.list[i].y >= 0.25 && this.list[i].y < 0.35) {
        this.list[i].level = 2;
      } else if(this.list[i].y >= 0.35 && this.list[i].y < 0.45) {
        this.list[i].level = 3;
      } else if(this.list[i].y >= 0.45) {
        this.list[i].level = 4;
      }
    }
  }
}
