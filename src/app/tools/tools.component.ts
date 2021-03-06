import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddEditToolComponent } from '../add-edit-tool/add-edit-tool.component';
import { IdProvider, Tool, FilterOptions } from '../shared/models';
import { SearchComponent } from '../search/search.component';
import { BFFService } from '../shared/services';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  public tools: Tool[];
  public columns = 3;
  private maxStringLength = 350;
  private addEditFormRef: MatDialogRef<AddEditToolComponent>;
  private searchFormRef: MatDialogRef<SearchComponent>;
  private readonly width: string = '320px';
  constructor(
    private dialog: MatDialog,
    private bff: BFFService
  ) { }

  public ngOnInit(): void {
    this.bff
      .search(new FilterOptions({
        searchText: '',
        toolFunctions: [],
        issues: [],
        regions: []
      }))
      .subscribe((response: any) => {
        this.tools = this.truncateDescriptions(response.tools);
      });
  }

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
    this.searchFormRef
      .afterClosed()
      .subscribe((result: Tool[]) => {
        this.tools = this.truncateDescriptions(result);
      });
  }

  public openEditForm(id: string): void {
    this.addEditFormRef = this.dialog.open(AddEditToolComponent, {
      width: this.width,
      data: {
        id
      }
    });
  }

  private truncateDescriptions(tools: Tool[]): Tool[] {
    return tools.map((tool: Tool) => {
      if (tool.description.length > this.maxStringLength) {
        tool.description = tool.description.substr(0, this.maxStringLength) + '...';
      }
      return tool;
    });
  }
}
