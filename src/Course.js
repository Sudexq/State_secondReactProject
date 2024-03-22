import Angular from './images/angular.png';
import Bootstrap from './images/Bootstrap.png';
import Frontend from './images/Frontend.png';
import kompleweb from './images/kompleweb.jpg';

function Course({courseName}) {
    console.log(courseName);
    return (
        <div>
            <img src={Angular}/>
        </div>
      );
}

export default Course;