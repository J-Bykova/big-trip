export class Location {
  private readonly name: string;
  private readonly description: string;
  private readonly photos: string[];

  constructor(name: string, description: string, photos: string[]) {
    this.name = name;
    this.description = description;
    this.photos = photos;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPhotos() {
    return this.photos;
  }
}
