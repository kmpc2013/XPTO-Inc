import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { BackService } from '../../services/back.service';
import { IBranche } from '../../interface/IBranche';
import { NewBrancheComponent } from '../../dialogs/new-branche/new-branche.component';

@Component({
  selector: 'app-filiais-table',
  standalone: true,
  imports: [],
  templateUrl: './filiais-table.component.html',
  styleUrl: './filiais-table.component.scss'
})
export class FiliaisTableComponent {
  public dataSort: IBranche[] = [];
  public allBranches: IBranche[] = [];
  public allBranchesFiltered: IBranche[] = [];

  constructor(public dialog: MatDialog, private backService: BackService) {}
  
  search(e: Event) {}
  sortTable(key: String) {}

  public openDialogNewMap(event: Event) {
    event.preventDefault();
    this.dialog.open(NewBrancheComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
      width: '700px',
    });
  }

  getAllBranches() {
    this.backService.getAllBranches().subscribe((data: IBranche[]) => {
      console.log("Coletando todas as filiais")
      this.allBranches = data;
      this.allBranchesFiltered = this.allBranches;
      this.sortTable('codigo');
      console.log(this.allBranchesFiltered)
    });
    
  }

  ngOnInit() {
    this.getAllBranches();
  }

  public openDialogVeeamEdit(data: any) {}
  public openDialogVeeamDelete(data: any) {}

}
