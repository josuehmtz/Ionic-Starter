import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data = Array(20);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild (IonInfiniteScroll) infinitescroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    // console.log(event);

    setTimeout(() => {
      if (this.data.length > 50) {
        this.infinitescroll.complete();
        this.infinitescroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      this.infinitescroll.complete();

    }, 1500);

  }

}
