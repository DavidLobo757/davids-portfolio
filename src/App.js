
import './App.css';
import { Routes, Route, } from 'react-router-dom';

import TodoApp, {addItem} from './components/TodoApp/todoApp.component';
import Dashboard from './components/Dashboard/dashboard.component';
function App() {
  addItem();
  return (
    <Routes>
      <Route  path="/" element={<TodoApp/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>//Change Routing methods
    </Routes>
  );
}


  

export default App;
