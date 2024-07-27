import { RoleDecorator } from "./RoleDecorator";

export class EditorRole extends RoleDecorator {
  getPermissions(): string[] {
    return [...this.user.getPermissions(), "edit"];
  }
}
