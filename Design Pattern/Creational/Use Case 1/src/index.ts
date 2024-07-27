import { OnlineCourseBuilder } from "./builders/OnlineCourseBuilder";
import { CourseDirector } from "./directors/CourseDirector";

const builder = new OnlineCourseBuilder();
const director = new CourseDirector(builder);

director.buildBasicCourse();
const basicCourse = builder.build();
basicCourse.showCourseDetails();

director.buildAdvancedCourse();
const advancedCourse = builder.build();
advancedCourse.showCourseDetails();
