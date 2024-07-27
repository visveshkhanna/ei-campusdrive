import { Permission } from "../Permission";

export class BasicUser implements Permission {
  getPermissions(): string[] {
    return ["read"];
  }
}
