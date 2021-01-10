import {BrowserRouter as Router,Route} from 'react-router-dom';

import 'antd/dist/antd.css';
import  Navbar from './components/Navbar/Navbar';
import  ExercisesList from "./components/exercises-List.component";
import  CreateExercises from "./components/create-exercise.component";
import  EditExercise  from "./components/edit-exercise.component";
import  CreateUser  from "./components/create-user.component";
import './App.css'







function App() {
  
 
  return (
    <Router >
      <div >
        <Navbar />
        <br/>
        <Route path='/'   component={ExercisesList} exact/>
        <Route path='/create' component={CreateExercises}/>
        <Route path='/user' component={CreateUser}/>
        <Route path='/edit/:id' component={EditExercise}/>
      </div>
     

    </Router>
  )}

export default App;
