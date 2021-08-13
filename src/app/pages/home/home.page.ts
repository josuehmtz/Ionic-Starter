import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Componente [] = [
    {
      icon: 'american-football-outline',
      name: 'action-sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'buttons',
      redirectTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirectTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'Date Time',
      redirectTo: '/datetime'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
