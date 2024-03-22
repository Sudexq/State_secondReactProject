import Course from "./Course"; //course.js i import ettik
import "./App.css";
import { useState } from "react"; //useState i import ettik

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Frontend", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
  //Math.random() , 0 ve 1 arasında değerler döndürür
  //courseArray.length 0,1,2,3 olabilir
  //mesela Math.random() = 0.74 , courseArray.length = 2 , 0.74*2=1.48 oldu Math.floor da bunu 1 olarak alır ve 'Bootstrap' i döndürür
}

// <Course/> bununla birlikte course.js in içindekileri app.js görmesini sağlıyoruz
function App() {
  //usestatesnippet
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); //önceki kurslarda kalsın diye ...courses bu ifadeyi kullanıyoruz
  };
  const courseList=()=>{
    courses.map((course, index) => {//her bir eleman course ve key hatası alacağından her bir course a index veriyoruz
      return <Course key={index} courseName={course}/> //çünkü her bir course ın farklı bir key value su olmalı
      //courseName bizim props umuzdur
    })
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      {/* jsx formatı */}
      {courseList}
    </div>
  );
}

export default App;
