
import './App.css';
//import { LOGIN } from '../../../../React-app/react-app/src/redux/actionTypes';
import { Routes, Route } from 'react-router-dom'
import ButtonAppBar from './Components/NavBar';
import { Home } from './Components/Home';
import { Todo } from './Components/Todo';
import { TodoList } from './Components/TodoList';
import {SignIn} from './Components/Login'
function App() {
  return (
    <>
     <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/todo/all" element={<TodoList />}></Route> 
         <Route path="/login" element={<SignIn />}></Route>
      </Routes>

    </>

  );
}

export default App;
