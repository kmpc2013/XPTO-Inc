import { Component } from '@angular/core';
import { RemessaTableComponent } from '../../components/remessa-table/remessa-table.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-remessas',
  standalone: true,
  imports: [RemessaTableComponent, HeaderComponent],
  templateUrl: './remessas.component.html',
  styleUrl: './remessas.component.scss'
})
export class RemessasComponent {

}
