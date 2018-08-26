import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddEditToolComponent } from '../add-edit-tool/add-edit-tool.component';
import { IdProvider } from '../shared/models';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
  private addEditFormRef: MatDialogRef<AddEditToolComponent>;
  private searchFormRef: MatDialogRef<SearchComponent>;
  private readonly width: string = '320px';
  constructor(
    private dialog: MatDialog
  ) { }

  public openAddForm(): void {
    this.addEditFormRef = this.dialog.open(AddEditToolComponent, {
      width: this.width,
      data: {
        id: undefined
      }
    });
    this.addEditFormRef
      .afterClosed()
      .subscribe((result: IdProvider) => {
        if (result) {
          console.log(result.id + ' created!');
        }
      });
  }

  public openSearchForm(): void {
    this.searchFormRef = this.dialog.open(SearchComponent, {
      width: this.width
    });
  }

  public opentEditForm(id: string): void {
    this.addEditFormRef = this.dialog.open(AddEditToolComponent, {
      width: this.width,
      data: {
        id
      }
    });
  }
}
