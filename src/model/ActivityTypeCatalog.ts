import {ActivityType} from "./ActivityType";

class ActivityTypeCatalog {
  private readonly activityTypes: ActivityType[];

  constructor(activityTypes: ActivityType[]) {
    this.activityTypes = activityTypes;
  }

  getAvailable() {
    return this.activityTypes;
  }
}
