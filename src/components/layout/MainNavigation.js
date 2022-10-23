/*네비게이션 관련 주요 컴포넌트들이 정의될 컴포넌트*/

import {Link} from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>모임 사이트</div>
      <nav>
        <ul>
          <li>
            <Link to="/" >
              모든 모임 보기
            </Link>
          </li>
          <li>
            <Link to="/new-meetup">
              새 모임 등록
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              즐겨찾기 목록
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
