import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  // menuItems: MenuItem[] = [ //MANERA TRADICIONAL 
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Información de usuario', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' }
  // ]

  menuItems = signal<MenuItem[]>([ //CON SIGNALS. Si se modifica menuItems, cambiará todos los menuItems
    { title: 'Contador', route: 'counter' },
    { title: 'Info. usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' }
  ]);

}
