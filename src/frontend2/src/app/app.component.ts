import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'dispositivo 1', url: '/folder/Disp1', icon: 'device-thermometer' },
    { title: 'dispositivo 2', url: '/folder/Disp2', icon: 'device-thermometer'  },
    { title: 'dispositivo 3', url: '/folder/Disp3', icon: 'device-thermometer'  },
    { title: 'dispositivo 4', url: '/folder/Disp4', icon: 'device-thermometer'  },
    { title: 'dispositivo 5', url: '/folder/Disp5', icon: 'device-thermometer'  },
    { title: 'dispositivo 6', url: '/folder/Disp6', icon: 'device-thermometer'  },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
