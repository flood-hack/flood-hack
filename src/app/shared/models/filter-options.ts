import { Issues, Regions, ToolFunctions } from './';

export class FilterOptions {
  public searchText: string;
  public issues: Issues[];
  public regions: Regions[];
  public toolFunctions: ToolFunctions[];

  constructor(init: Partial<FilterOptions>) {
    Object.assign(this, init);
  }
}
