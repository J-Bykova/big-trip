import {Location} from "./Location";

export class LocationCatalog {
  private readonly locations: Location[];

  constructor(location: Location[]) {
    this.locations = location;
  }

  getDefaultLocation() {
    return this.locations[0];
  }

  getAvailableLocation() {
    return this.locations;
  }
}
