import {createUseStyles} from 'react-jss';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import 'antd/dist/antd.css';
import Navbar from './components/navbar.component';
import  ExercisesList from "./components/exercises-List.component";
import  CreateExercises from "./components/create-exercise.component";
import  CreateUser  from "./components/create-user.component";


const useStyle=createUseStyles({
  container:{
    width:'1172px',
    margin:'auto',
    backgroundColor: '#0fe',
  }
});




function App() {
  
  const classes=useStyle();
  return (
    <Router >
      <div className={classes.container}>
        <Navbar/>
       
        <Route path='/'   component={ExercisesList} exact/>
        <Route path='/create' component={CreateExercises}/>
        <Route path='/user' component={CreateUser}/>
      </div>
     
    </Router>
  )}

export default App;
