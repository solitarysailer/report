import { useState } from 'react';
import  DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route,Outlet,Navigate} from 'react-router-dom';

import Login from './components/accounts/Login.jsx';
import Home from './components/home/Home';
import Header from './components/header/Header';
import CreatePost from './components/create/CreatePost';
const PrivateRoute=({isAuthenticated,...props})=>{
  return isAuthenticated ? 
  <>
  <Header/>
  <Outlet/>
  </>
  :
  <Navigate replace to ='/login'/>
}

 function App()
 {

  const [isAuthenticated,isUserAuthenticated] = useState(false);

  return(
      <DataProvider>
        <BrowserRouter>
      < div style ={{marginTop : 64}}>
        <Routes>
        <Route path ='/login' element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>


        <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>} >
        <Route path ='/' element={<Home/>}/>

        <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated}/>} >
        <Route path ='/create' element={<CreatePost/>}/>
        </Route>


        </Route>
      </Routes>
      </div>
      </BrowserRouter>
      </DataProvider>
  );
 }
 export default App;

