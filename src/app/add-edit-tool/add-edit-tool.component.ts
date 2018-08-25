import { Component, OnInit, Inject } from '@angular/core';
import { BFFService } from '../shared/services/bff.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IdProvider, Tool, Issues, Regions, ToolFunctions } from '../shared/models';
import { _getEnumKeys } from '../shared/utils';

@Component({
  selector: 'app-add-edit-tool',
  templateUrl: './add-edit-tool.component.html',
  styleUrls: ['./add-edit-tool.component.css']
})
export class AddEditToolComponent implements OnInit {
  public addEditToolForm: FormGroup;
  public issuesOptions: string[] = _getEnumKeys(Issues);
  public regionsOptions: string[] = _getEnumKeys(Regions);
  public toolFunctionsOptions: string[] = _getEnumKeys(ToolFunctions);

  constructor(
    private bff: BFFService,
    private dialogRef: MatDialogRef<AddEditToolComponent>,
    @Inject(MAT_DIALOG_DATA) private data: IdProvider,
    private formBuilder: FormBuilder
  ) { }

  get name(): AbstractControl {
    return this.addEditToolForm.get('name');
  }

  get url(): AbstractControl {
    return this.addEditToolForm.get('url');
  }

  public ngOnInit(): void {
    this.addEditToolForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      url: ['', Validators.required],
      issues: undefined,
      region: undefined,
      toolFunctions: undefined
    });

    if (this.data.id) {
      this.bff.getTool(this.data.id).subscribe((tool: Tool) => {
        this.addEditToolForm.patchValue({
          name: tool.name,
          description: tool.description,
          url: tool.url,
          issues: tool.issues,
          region: tool.region,
          toolFunctions: tool.toolFunctions
        });
      });
    }
  }

  public cancel(): void {
    this.dialogRef.close();
  }

}
