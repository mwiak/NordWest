import SideNaveStudent from "../Components/SideNav";
import User from "../Components/User";
import CourseCard from "../Components/CourseCard";
import { useNavigate } from "react-router-dom";
const coursesData = [
  {
    title: "Service management",
    courseID: "BS-01-01",
    imgurl: "/SM.png",
  },
  {
    title: "Digital business",
    courseID: "BS-02-01",
    imgurl: "/db.webp",
  },
  {
    title: "Ethics and Sustainabilty",
    courseID: "BS-03-01",
    imgurl:
      "https://www.thebuildchain.co.uk/news/wp-content/uploads/2023/11/Sustainable-Materials-Sourcing-Best-Practices-for-Ethical-and-Eco-Friendly-Procurement.jpg",
  },
  {
    title: "Statisitcs",
    courseID: "BS-04-01",
    imgurl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_You_Need_to_Know_About_Inferential_Statistics_to_Boost_Your_Career_in_Data_Science.jpg",
  },
];

function Student() {
  const navigate = useNavigate();
  const handleClickS = (courseId: string) => navigate(`/student/${courseId}`);
  return (
    <>
      <SideNaveStudent index={0} />
      <User />
      <div className="container">
        <div className="row mainPanel">
          {coursesData.map((course) => (
            <div className="col-md-4 col-sm-6 mb-4" key={course.courseID}>
              <CourseCard
                key={course.courseID}
                code={course.courseID}
                title={course.title}
                url={course.imgurl}
                onClick={() => handleClickS(course.courseID)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Student;
