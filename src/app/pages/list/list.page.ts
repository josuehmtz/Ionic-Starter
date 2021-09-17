import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionlist: IonList;

  constructor(private dataService: DataService) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  usuarios: Observable<any>;

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  favorite(user: any){
    console.log(user);
    this.ionlist.closeSlidingItems();
  }

  trash(user: any){
    console.log('delete', user);
    this.ionlist.closeSlidingItems();
  }


}
