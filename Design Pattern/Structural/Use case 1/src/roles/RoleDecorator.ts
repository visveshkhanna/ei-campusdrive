import { Permission } from "../Permission";

export abstract class RoleDecorator implements Permission {
  protected user: Permission;

  constructor(user: Permission) {
    this.user = user;
  }

  abstract getPermissions(): string[];
}
