import { Assignment, Module, Quiz, Resource } from "./components";

export class Course {
  public title: string = "";
  public description: string = "";
  public modules: Module[] = [];
  public quizzes: Quiz[] = [];
  public assignments: Assignment[] = [];
  public additionalResources: Resource[] = [];

  public showCourseDetails(): void {
    console.log(`Course: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`\nTotal Modules: ${this.modules.length}`);
    for (const module of this.modules) {
      console.log(`Module: ${module.title}`);
      console.log(`Description: ${module.description}`);
    }
    console.log(`\nTotal Quizzes: ${this.quizzes.length}`);
    for (const quiz of this.quizzes) {
      console.log(`Quiz: ${quiz.title}`);
      console.log(`Description: ${quiz.description}`);
    }
    console.log(`\nTotal Assignments: ${this.assignments.length}`);
    for (const assignment of this.assignments) {
      console.log(`Assignment: ${assignment.title}`);
      console.log(`Description: ${assignment.description}`);
    }
    console.log(`\nAdditional Resources: ${this.additionalResources.length}`);
    for (const resource of this.additionalResources) {
      console.log(`Resource: ${resource.name}`);
      console.log(`URL: ${resource.url}`);
    }
    console.log(`\n`);
  }
}
