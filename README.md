# react-meetup-project
## 모임 사이트 정리

## 비용 추적기 사이드 프로젝트

```js

모임 목록 출력/새로운 모임 추가/모임 즐겨찾기 목록 출력/모임 벳지 추가
1. 네비게이션 추가
2. 모임 목록 추가
3. 새로운 모임 추가
4. 모임 즐겨찾기 등록 및 리스트 출력
5. 모임 뱃지 추가로 즐겨찾기된 모임 갯수 출력

React CSS Html

---------------------------------------------------------------------------------------------
Components

  layout 폴더 
    Layout.js : 네비게이션 컴포넌트가 포함된 레이아웃 컴포넌트로 사용 컴포넌트에서 랩핑하면
                  레이아웃안에 자식요소 컴포넌트가 적용되도록함
    MainNavigation.js : router dom 에 Link 컴포넌트 활용하여 모든 모임/신규 모임 등록/즐겨찾기 목록
                          으로 이동시켜줄 네비게이션 컴포넌트
                          
  meetups 폴더
    MeetupItem.js : 모임 글 아이템 컴포넌트
    MeetupList.js : 모임 글 목록 컴포넌트
    NewMeetupForm.js : 새로운 모임등록 필요한 양식을 갖춘 폼 컴포넌트
    
  UI 폴더 : 유저 인터페이스 관련
    Card : 래퍼 컴포넌트로 컨텐츠가 담길 틀 역할
    
  pages 폴더 : 실질적으로 보여질 페이지 폴더
    AllMeetups.js : 해당 컴포넌트는 모든 모임들을 로딩하고 표시
    Favorites.js : 즐겨찾기 등록된 모임들을 볼 수 있는 페이지
    NewMeetup.js : 새로운 모임을 추가할 페이지 
    
  store 폴더
    favorites-context.js : context store 로 활용될 파일/즐겨찾기 필요 데이터의 초기값/즐겨찾기 추가/
                            즐겨찾기 삭제/즐겨찾기되어있는지 상태확인 함수들이 준비되어있으며 
                             각 사용 컴포넌트에서 필요한 함수 및 데이터의 저장소
                             
App.js : router 5 version 으로 switch 및 route 활용하여 경로에따라 페이지를 이동시켜줄 컴포넌트
  
---------------------------------------------------------------------------------------------    

Function
  MeetupItem.js
    toggleFavoriteStatusHandler : 모임 글의 즐겨찾기 버튼 클릭 시 상태 관리 함수이며
                                    즐겨찾기 되어있다면 즐겨찾기 id 에서 해제를/
                                      안되어있다면 context store 에 addFavorite 접근하여 즐찾 추가해줄 함수
  NewMeetupForm.js
    submitHandler : 제목/이미지/주소/설명의 사용자 입력 값을 받아 meetupData 의
                      객체로 onAddMeetup 함수에 props 로 meetupData 를 전달해줄 함수
  NewMeetup.js
    addMeetupHandler : 뉴미트업폼 컴포넌트에서 props 로 절달된 meetupData 를 fetch method 로 데이터 서버에
                        post 요청 보내며 성공/실패 예외 처리해줄 함수
  favorites-context.js
    addFavoriteHandler : 기존 favorites 배열에 새로운 favoriteMeetup 을 추가 후 
                          setUserFavorites 로 업데이트 해줄 함수
    removeFavoriteHandler : 삭제할 아이디를 받아 setUserFavorites 로 현재 가지고있는 아이디들과 삭제할 글의
                              아이디와 같지 않은 모든 목록 출력
    itemIsFavoriteHandler : userFavorites 배열에 meetupId 가 있는지 확인 후 some method 로 있으면 true, 없으면 
                             false 반환 해줄 상태 확인 함수
                             
```

메인 홈 화면

![20221031_195625](https://user-images.githubusercontent.com/75942405/198992745-c2f8f920-3cdd-429f-8d94-6104c016a891.png)

새로운 모임 페이지 화면

![20221031_195649](https://user-images.githubusercontent.com/75942405/198992777-519a9285-c27e-450c-a6f9-432dc384b67d.png)

파이어베이스 데이터 등록

![20221031_192942](https://user-images.githubusercontent.com/75942405/198992793-fa71559a-7227-4eed-a1ba-b3274388db21.png)

즐겨 찾기 전 즐겨 찾기 목록 화면

![20221031_195702](https://user-images.githubusercontent.com/75942405/198992849-ec2c9962-5522-4789-aff3-ad8d5e9a0cc4.png)

즐겨 찾기 후 목록 화면

![20221031_195717](https://user-images.githubusercontent.com/75942405/198992830-00c6f074-0e71-4efb-a89f-d2839311d950.png)
