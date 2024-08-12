import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewMapComponent } from '../../dialogs/new-map/new-map.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { BackService } from '../../services/back.service';
import { IRequest } from '../../interface/IRequest';


@Component({
  selector: 'app-remessa-table',
  standalone: true,
  imports: [],
  templateUrl: './remessa-table.component.html',
  styleUrl: './remessa-table.component.scss',
})
export class RemessaTableComponent {
  public dataSort: IRequest[] = [];
  public allRequests: IRequest[] = [];
  public allRequestsFiltered: IRequest[] = [];

  constructor(public dialog: MatDialog, private backService: BackService) {}
  
  search(e: Event) {}
  sortTable(key: String) {}

  public openDialogNewMap(event: Event) {
    event.preventDefault();
    this.dialog.open(NewMapComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
      width: '700px',
    });
  }

  getAllRequests() {
    this.backService.getAllResquests().subscribe((data: IRequest[]) => {
      for (var i in data) {
        data[i].data_prevista = new Date(data[i].data_prevista);
      }
      this.allRequests = data;
      this.allRequestsFiltered = this.allRequests;
      this.sortTable('codigo');
      console.log(this.allRequestsFiltered)
    });
    
  }

  ngOnInit() {
    this.getAllRequests();
  }

  public openDialogVeeamEdit(data: any) {}
  public openDialogVeeamDelete(data: any) {}
}
