import { Issues, Regions, ToolFunctions } from '.';

export class AddEditToolRequest {
  public name: string;
  public description: string;
  public issues: Issues[];
  public region: Regions[];
  public toolFunctions: ToolFunctions[];
  public url: string;

  constructor(init: Partial<AddEditToolRequest>) {
    Object.assign(this, init);
  }
}
