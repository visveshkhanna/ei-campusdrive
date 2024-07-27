import { CourseBuilder } from "../builders/CourseBuilder";
import { Assignment, Module, Quiz, Resource } from "../Course/components";

export class CourseDirector {
  private builder: CourseBuilder;

  constructor(builder: CourseBuilder) {
    this.builder = builder;
  }

  public setBuilder(builder: CourseBuilder): void {
    this.builder = builder;
  }

  public buildBasicCourse(): void {
    this.builder.reset();
    this.builder.setTitle("Basic Course");
    this.builder.setDescriptioin("This is a basic course");
    this.builder.addModule(new Module("Module 1", "This is module 1"));
    this.builder.addModule(new Module("Module 2", "This is module 2"));
    this.builder.addModule(new Module("Module 3", "This is module 3"));
    this.builder.addQuiz(new Quiz("Quiz 1", "This is quiz 1"));
    this.builder.addQuiz(new Quiz("Quiz 2", "This is quiz 2"));
    this.builder.addAssignment(
      new Assignment("Assignment 1", "This is assignment 1")
    );
    this.builder.addAssignment(
      new Assignment("Assignment 2", "This is assignment 2")
    );
    this.builder.addAdditionalResource(
      new Resource("Resource 1", "https://www.google.com")
    );
    this.builder.addAdditionalResource(
      new Resource("Resource 2", "https://www.youtube.com")
    );
  }

  public buildAdvancedCourse(): void {
    this.builder.reset();
    this.builder
      .setTitle("Advanced Course")
      .setDescriptioin("This is a advanced course");
    this.builder
      .addModule(new Module("Module 1", "This is module 1"))
      .addModule(new Module("Module 2", "This is module 2"))
      .addModule(new Module("Module 3", "This is module 3"));
    this.builder
      .addQuiz(new Quiz("Quiz 1", "This is quiz 1"))
      .addQuiz(new Quiz("Quiz 2", "This is quiz 2"));
    this.builder
      .addAssignment(new Assignment("Assignment 1", "This is assignment 1"))
      .addAssignment(new Assignment("Assignment 2", "This is assignment 2"));
    this.builder
      .addAdditionalResource(
        new Resource("Resource 1", "https://www.google.com")
      )
      .addAdditionalResource(
        new Resource("Resource 2", "https://www.youtube.com")
      );
  }
}
