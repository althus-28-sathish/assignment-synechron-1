import { faker, fakerFR } from "@faker-js/faker";

export class UserData {
  //
  static getTitle(): string {
    return "M.";
  }
  //
  static getFirstName() {
    return fakerFR.person.firstName();
  }
  //
  static getLastName() {
    return fakerFR.person.lastName();
  }
}
