import AdminCourse from "./Course";
import adminCoursesData from "./data/courses";


const CourseList = () => {
    return (
        <div className="courses-page d-grid m-20 gap-20">
            {adminCoursesData.map((course, index) => (
                <AdminCourse key={index} {...course} />
            ))}
        </div>
    );
};

export default CourseList;
