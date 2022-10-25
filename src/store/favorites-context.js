import { createContext, useState } from 'react';

// createContext 는 context 의 초기값 설정 및 context 객체를 반환하는 함수
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup)=>{},
  removeFavorite: (meetupId) =>{},
  itemIsFavorite: (meetupId) => {},
});

/*이 컴포넌트는 값을 받으려 하는 모든 컴포넌트에 context 를 제공하는 역할을 담당
 * 따라서 context 값이 필요한 모든 컴포넌트와 FavoritesContextProvider 컴포넌트는 context 값을 업데이트하는 역할
 * FavoritesContextProvider 에 context 객체를 만들고 이 context 객체를 FavoritesContext.Provider 에 값으로 전달하면
이 FavoritesContext 객체에 노출된 컴포넌트에는 현재의 context 값을 전달하는 prop 이 필요하며
context 를 생성할 때 설정한 초기 값은 계속 업데이트되어 value prop 을 통해 최신 값을 전달할 수 있음,
* 그리고 이 값들이 바뀔 때마다 Context 를 받는 모든 컴포넌트가 업데이트됨, 코드의 작동 과정임*/
export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    /*// 기존 favorites 배열에 새로운 favoriteMeetup 을 추가 후 setUserFavorites 로 업데이트 해줌
    setUserFavorites(userFavorites.concat(favoriteMeetup))*/
    // 아래와 같이 코드 작성하면 state 가 이전 상태에 따라 바뀌는 배열이여도 스냅샷의 상태를 즉각 업데이트할 수 있음
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    // userFavorites 배열에 meetupId 가 있는지 확인 후 some method 로 있으면 true, 없으면 false 반환
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  /*이 context 객체와 그 값을 동적으로 도출함, 바로 이때 useState 를 사용하며 이 FavoriteContextProvider 에서
일부 state 를 관리할 수 있고 즐겨찾기된 meetups 의 배열도 관리할 수 있음
이제 만든 context 객체는 컴포넌트에 전달해야 하는 최신 값을 보유하고 있으며 context 의 초기 값에도 정의했기 때문에
Favorites 의 키 값을 가지고 있다, 그리고 현재의 userFavorites 배열을 이 state 값으로 설정했으므로
state 가 바뀌면 이 값도 바뀌기 때문에 새로운 context 객체가 생성되며 새로 업데이트된 이 context 객체가
Provider 로 래핑된 모든 컴포넌트에 전달됨*/
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  /*FavoritesContext.Provider 가 바로 FavoritesContext 객체 안에 있는 것, 이 provider 라는 컴포넌트는
	해당 context 와 상호 작용하는 모든 컴포넌트를 포함해야 함
	*아래와 같이 반환하면 구축한 FavoritesContextProvider 가 Context 데이터를 관리할 수 있게됨,
	이 작업을 state 로 관리할 수 있음, 여기서 state 를 관리하고 State 를 변경하면 이 컴포넌트는
재실행되고 재평가됨 이 말은 이 컴포넌트에서 context 값을 변경하고 이 context 값을
Provider 에 전달하면 해당 context 를 받는 모든 컴포넌트가 업데이트되기 때문에 우리는 업데이트된
최신 데이터를 가져올 수 있다*/
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;