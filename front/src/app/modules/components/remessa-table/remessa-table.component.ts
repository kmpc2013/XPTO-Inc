import { Component } from '@angular/core';

@Component({
  selector: 'app-remessa-table',
  standalone: true,
  imports: [],
  templateUrl: './remessa-table.component.html',
  styleUrl: './remessa-table.component.scss',
})
export class RemessaTableComponent {
  search(e: Event) {}
  sortTable(key: String) {}

  public openDialogVeeamCreate(event: Event) {}
  public openDialogVeeamEdit(data: any) {}
  public openDialogVeeamDelete(data: any) {}
}
