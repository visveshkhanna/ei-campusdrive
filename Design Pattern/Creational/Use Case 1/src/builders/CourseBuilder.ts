import { Assignment, Module, Quiz, Resource } from "../Course/components";
import { Course } from "../Course/Course";

export interface CourseBuilder {
  reset(): void;
  setTitle(title: string): this;
  setDescriptioin(description: string): this;
  addModule(module: Module): this;
  addQuiz(quiz: Quiz): this;
  addAssignment(assignment: Assignment): this;
  addAdditionalResource(resource: Resource): this;
  build(): Course;
}
