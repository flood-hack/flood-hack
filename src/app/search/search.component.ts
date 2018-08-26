import { Component, OnInit, Inject } from '@angular/core';
import { BFFService } from '../shared/services/bff.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IdProvider, Tool, Issues, Regions, ToolFunctions } from '../shared/models';
import { _getEnumKeys } from '../shared/utils';

@Component({
  selector: 'app-search-form',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;
  public issuesOptions: string[] = _getEnumKeys(Issues);
  public regionsOptions: string[] = _getEnumKeys(Regions);
  public toolFunctionsOptions: string[] = _getEnumKeys(ToolFunctions);

  constructor(
    private bff: BFFService,
    private dialogRef: MatDialogRef<SearchComponent>,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchText: ['', Validators.required],
      issues: [[]],
      regions: [[]],
      toolFunctions: [[]]
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public search(): void {
    this.bff
      .search(this.searchForm.value)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

}
