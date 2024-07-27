import { BasicUser } from "./roles/BasicUser";
import { AdminRole } from "./roles/AdminRole";
import { EditorRole } from "./roles/EditorRole";

const user = new BasicUser();
console.log("Basic User Permissions:", user.getPermissions());

const adminUser = new AdminRole(user);
console.log("Admin User Permissions:", adminUser.getPermissions());

const editorUser = new EditorRole(user);
console.log("Editor User Permissions:", editorUser.getPermissions());

const adminEditorUser = new EditorRole(adminUser);
console.log("Admin Editor User Permissions:", adminEditorUser.getPermissions());
