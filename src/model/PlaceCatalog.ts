import {Place} from "./Place";

export class PlaceCatalog {
  private readonly place: Place[];

  constructor(place: Place[]) {
    this.place = place;
  }

  getAvailablePlaces() {
    return this.place;
  }
}
