export class UserSession {
  private roles = ["admin", "user", ""];
  private role: string;
  private static instance: UserSession;
  private constructor() {
    this.role = "";
  }

  public static getInstance(): UserSession {
    if (!UserSession.instance) {
      UserSession.instance = new UserSession();
    }
    return UserSession.instance;
  }

  public setRole(role: string): void {
    if (!this.roles.includes(role)) {
      throw new Error("Invalid role. Please enter a valid role.");
    }
    this.role = role;
  }

  public getRole(): string {
    return this.role;
  }
}
