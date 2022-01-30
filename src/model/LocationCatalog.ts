import {Location} from "./Location";

export class LocationCatalog {
  private readonly locations: Location[];

  constructor(location: Location[]) {
    this.locations = location;
  }

  getAvailableLocation() {
    return this.locations;
  }
}
