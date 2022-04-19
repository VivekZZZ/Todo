import { 
  Routes,
  Route,
 } from 'react-router-dom';
import AllMeetupPage from "./pages/AllMeetup";
import NewMeetupPage from "./pages/NewMeetup";
import FavoriteMeetupPage from "./pages/Favorite";
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
     <Routes>
     <Route  exact path='/' element={<AllMeetupPage />}></Route>
     <Route  exact path='/new-meetup' element={<NewMeetupPage />}></Route>
     <Route  exact path='/favorite' element={<FavoriteMeetupPage />}></Route>
    </Routes>

    </Layout>
  );
}

export default App;
