import { Issues, Regions, ToolFunctions } from '.';

export class Tool {
  public name: string;
  public description: string;
  public issues: Issues[];
  public region: Regions[];
  public toolFunctions: ToolFunctions[];
  public url: string;

  constructor(init: Partial<Tool>) {
    Object.assign(this, init);
  }
}