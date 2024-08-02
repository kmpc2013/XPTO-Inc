import { Component } from '@angular/core';
import { RemessaTableComponent } from '../../components/remessa-table/remessa-table.component';

@Component({
  selector: 'app-remessas',
  standalone: true,
  imports: [RemessaTableComponent],
  templateUrl: './remessas.component.html',
  styleUrl: './remessas.component.scss'
})
export class RemessasComponent {

}
