import {ActivityType} from "./ActivityType";

class ActivityTypeCatalog {
  private readonly activityTypes: ActivityType[];

  constructor(activityTypes: ActivityType[]) {
    this.activityTypes = activityTypes;
  }

  getDefaultType() {
    return this.activityTypes[0];
  }

  getAvailable() {
    return this.activityTypes;
  }
}
