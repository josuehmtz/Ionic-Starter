import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Spider-Man', 'Batman'];

  constructor() { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  reorderEnable = false;

  ngOnInit() {
  }

  doReorder(event: any){
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }

}
