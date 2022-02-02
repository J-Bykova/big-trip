import {AdditionalOption} from "./AdditionalOption";

export class ActivityType {
  private readonly name: string;
  private readonly icon: string;
  private readonly activityOption: AdditionalOption[];

  constructor(name: string, icon: string, activityOption: AdditionalOption[]) {
    this.name = name;
    this.icon = icon;
    this.activityOption = activityOption;
  }

  getName() {
    return this.name;
  }

  getIcon() {
    return this.icon;
  }

  getAvailableOptions() {
    return this.activityOption;
  }
}
