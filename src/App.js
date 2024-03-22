import Course from "./Course"; //course.js i import ettik
import "./App.css";
import { useState } from "react"; //useState i import ettik

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Frontend", "Kompleweb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
  //Math.random() , 0 ve 1 arasında değerler döndürür
  //courseArray.length 0,1,2,3 olabilir
  //mesela Math.random() = 0.74 , courseArray.length = 2 , 0.74*2=1.48 oldu Math.floor da bunu 1 olarak alır ve 'Bootstrap' i döndürür
}

// <Course/> bununla birlikte course.js in içindekileri app.js in görmesini sağlıyoruz
function App() {
  //useState hook'u kullanılarak componentin durumu yönetilir.
  //courses adında bir durum ve bu durumu güncellemek için setCourses adında bir işlev vardır.
  //usestatesnippet
  const [courses, setCourses] = useState([]);

  //bir butona tıkladığında çalışır ve setCourses aracılığıyla rastgele bir kurs ekler.
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
    //Normalde, setCourses ile yeni bir kurs eklediğinizde, mevcut courses dizisini değiştirir ve eski verileri kaybedersiniz.
    //Ancak ...courses ifadesi, eski kurslar dizisini kopyalayarak yeni bir dizi oluşturur.
    //Böylece eski kurslar dizisini korumuş olursunuz ve yeni bir kurs eklenirken eski kurslar kaybolmaz.
    //Yani, her yeni kurs eklemesi, mevcut kursların üzerine eklenir ve mevcut veriler kaybolmaz.
    //Bu şekilde, mevcut verilerin kaybolmadığı bir güncelleme sağlanmış olur.
  };

  //courses dizisindeki her bir kurs için bir <Course> componenti oluşturarak bir JSX dizisi oluşturuyor.
  const courseList = courses.map((course, index) => {
    return <Course key={index} CourseName={course} />;
    //Her bir kurs için bir key prop'u atanır.
    //çünkü her bir course ın farklı bir key value su olmalı
    //courseName ve key bizim props umuzdur
  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Kurs Ekle</button>
      {/* jsx formatı */}
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
