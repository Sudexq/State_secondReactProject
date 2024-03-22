import "./Course.css"; //course js e özel course css
import Angular from "./images/angular.png";
import Bootstrap from "./images/Bootstrap.png";
import Frontend from "./images/Frontend.png";
import Kompleweb from "./images/kompleweb.jpg";

const courseMap = {
  //   //courseName:resmin ismi
  //   Angular: Angular,
  //   Bootstrap: Bootstrap,
  //   Frontend: Frontend,
  //   kompleweb: Kompleweb,
  Angular,
  Bootstrap,
  Frontend,
  Kompleweb,
  //key value ve image ismi aynı olduğu için direkt bir tane yazsak yeter
};

function Course({ CourseName }) {
  //   console.log(CourseName);
  //   console.log(CourseName);
  console.log(courseMap[CourseName]);
  return (
    <div className="course">
      <img className="courseImg" src={courseMap[CourseName]} alt="course" />
    </div>
  );
}

export default Course;
