import { useNavigate } from "react-router-dom";
import SideNaveTutor from "../Components/SideNavTutor";
import UserTutor from "../Components/UserTutor";
import CourseCard from "../Components/CourseCard";
const coursesData = [
  {
    title: "Math I",
    courseID: "M-01-01",
    imgurl: "https://wallpapercave.com/wp/wp3855162.jpg",
  },
  {
    title: "Math II",
    courseID: "M-01-02",
    imgurl:
      "https://media.licdn.com/dms/image/v2/C4D12AQGL3iDkgKu9Hg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520246071186?e=2147483647&v=beta&t=W2jhxMRgcSfPzCSb7EX2h7W4wXSvOaidIQTrsTFtpwI",
  },
  {
    title: "Linear Algebra",
    courseID: "M-02-01",
    imgurl:
      "https://media.licdn.com/dms/image/C4D12AQFQywGf_Hnp1g/article-cover_image-shrink_720_1280/0/1520178827394?e=2147483647&v=beta&t=05flQHApqIyEZY5OD9H5oJLxlq0dKNQ8WmEvRQr45SM",
  },
  {
    title: "Statisitcs",
    courseID: "S-01-01",
    imgurl:
      "https://png.pngtree.com/thumb_back/fh260/background/20230928/pngtree-a-graph-showing-graphing-statistics-image_13300948.jpg",
  },
];
function CoursesTutor() {
  const navigate = useNavigate();
  const handleClickS = (courseId: string) => navigate(`/tutor/${courseId}`);
  return (
    <>
      <SideNaveTutor index={0} />
      <UserTutor />
      <div className="container">
        <div className="row mainPanel">
          {coursesData.map((course) => (
            <div
              onClick={() => handleClickS(course.courseID)}
              className="col-md-4 col-sm-6 mb-4"
              key={course.courseID}
            >
              <CourseCard
                key={course.courseID}
                code={course.courseID}
                title={course.title}
                url={course.imgurl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default CoursesTutor;
