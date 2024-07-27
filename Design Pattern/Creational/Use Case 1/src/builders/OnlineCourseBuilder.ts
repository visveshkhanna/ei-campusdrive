import { Assignment, Module, Quiz, Resource } from "../Course/components";
import { Course } from "../Course/Course";
import { CourseBuilder } from "./CourseBuilder";

export class OnlineCourseBuilder implements CourseBuilder {
  private course: Course;

  constructor() {
    this.course = new Course();
  }

  public reset(): void {}

  public setTitle(title: string): this {
    this.course.title = title;
    return this;
  }

  setDescriptioin(description: string): this {
    this.course.description = description;
    return this;
  }
  addModule(module: Module): this {
    this.course.modules.push(module);
    return this;
  }
  addAssignment(assignment: Assignment): this {
    this.course.assignments.push(assignment);
    return this;
  }
  addQuiz(quiz: Quiz): this {
    this.course.quizzes.push(quiz);
    return this;
  }

  addAdditionalResource(resource: Resource): this {
    this.course.additionalResources.push(resource);
    return this;
  }

  build(): Course {
    return this.course;
  }
}
