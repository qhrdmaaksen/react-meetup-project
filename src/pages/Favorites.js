/*즐겨찾기 등록된 모임들을 볼 수 있는 컴포넌트*/

import { useContext } from 'react';
import FavoritesContext from './../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>즐겨찾기에 등록된 모임이 없습니다. 즐겨찾기 추가해주세요.</p>;
		console.log(content)
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h2>나의 즐겨 찾기 목록</h2>
      {content}
    </div>
  );
};
export default FavoritesPage;
