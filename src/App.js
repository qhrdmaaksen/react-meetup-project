import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    /*Switch compo 로 감싸면 여러 Route 중 단 하나만 활성화하라고 지시 가능
    * Switch 미사용 시 url 접속할때마다 중첩된 페이지를 보여줌*/
    <Switch>
      <Route path="/" exact>
        <AllMeetupsPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </Switch>
  );
}

export default App;
