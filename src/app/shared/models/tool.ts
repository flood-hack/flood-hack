import { Issues, Regions, ToolFunctions } from '.';

export class Tool {
  public id: string;
  public name: string;
  public description: string;
  public issues: Issues[];
  public regions: Regions[];
  public toolFunctions: ToolFunctions[];
  public url: string;

  constructor(init: Partial<Tool>) {
    Object.assign(this, init);
  }
}
