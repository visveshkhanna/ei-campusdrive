import { RoleDecorator } from "./RoleDecorator";

export class AdminRole extends RoleDecorator {
  getPermissions(): string[] {
    return [...this.user.getPermissions(), "create", "delete"];
  }
}
