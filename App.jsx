import './App.css';
import {Routes, Route} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomeView } from './views/HomeView';
import { PostsView } from './views/PostsView';
import { FourOhFour } from './views/FourOhFour/FourOhFour';
import { Usersview } from './views/Usersview';
import { UserDetailsView } from './views/UserDetailsView';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/users' element={<Usersview/>}/>
        <Route path='/user/:id' element={<UserDetailsView/>}/>
        <Route path='/posts' element={<PostsView/>}/>
        <Route path='*' element={<FourOhFour/>}/>
    </Routes>
    </div>
  );
}

export default App;
