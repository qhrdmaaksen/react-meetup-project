/*!네비게이션 관련 주요 컴포넌트들이 정의될 컴포넌트!*/

/*표준 js 에서는 동작하지않지만 별도의 빌드 과정에 코드가 브라우저에 도착하기전에 해석하고 변환해주기때문에
* css file 부터 import 할 수 있다, classes 는 css file 에서 정의한 모든 css 클래스들이 classes 객체의 속성이된다
* 이 객체를 JSX 코드에서 사용해서 클래스를 element 에 추가하면 내부적으로 코드가 변환되면서
클래스들의 이름이 각 컴포넌트에 대해 유일하도록 바뀜*/
import classes from './MainNavigation.module.css';

import {Link} from "react-router-dom";
import {useContext} from 'react';
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>모임 동호회</div>
      <nav>
        <ul>
          <li>
            <Link to="/" >
              모든 모임 보기
            </Link>
          </li>
          <li>
            <Link to="/new-meetup">
              신규 모임 등록
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              즐겨찾기 목록
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
