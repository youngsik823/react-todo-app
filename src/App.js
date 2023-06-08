import logo from './logo.svg';
import './App.css';
import TodoTemplate from './component/todo/TodoTemplate';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Join from './component/user/Join';
import Login from './component/user/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <TodoTemplate /> } />
        <Route path='/login' element={ <Login /> }  />
        <Route path='/join' element={ <Join /> }  />
      </Routes>

      <Footer />
    </>
  );
}

export default App;