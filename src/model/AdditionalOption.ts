import {nanoid} from "nanoid";

export class AdditionalOption {
  private readonly ID_LENGTH = 6;
  private readonly name: string;
  private readonly id: string;
  private readonly description: string;
  private readonly price: number;

  constructor(name: string, id: string, description: string, price: number) {
    this.name = name;
    this.id = nanoid(this.ID_LENGTH);
    this.description = description;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }
}
