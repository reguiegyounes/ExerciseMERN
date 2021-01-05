import {createUseStyles} from 'react-jss';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Tabs} from 'antd';
import ExercisesList from './components/ExercisesList';
import Home from './components/Home';







function App() {
  
 
  return (
    <Router>
      
      <Route  path='/' exact component={ExercisesList} />
     
      <Home/>

    </Router>
  )}

export default App;
