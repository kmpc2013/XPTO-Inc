import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FiliaisTableComponent } from '../../components/filiais-table/filiais-table.component';

@Component({
  selector: 'app-filiais',
  standalone: true,
  imports: [HeaderComponent, FiliaisTableComponent],
  templateUrl: './filiais.component.html',
  styleUrl: './filiais.component.scss'
})
export class FiliaisComponent {

}
