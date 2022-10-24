/*새로운 모임을 추가할 컴포넌트*/

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {

  const addMeetupHandler = (meetupData) => {
    fetch(
        'https://react-meetup-project-df2fd-default-rtdb.firebaseio.com/meetups.json',
        {
          method: 'POST',
          body: JSON.stringify({
            meetupData,
          }),
          headers: {
            'Content-Type': 'applications/json',
          }
        },
    ).then((response) => {
      if (response.ok) {
        console.log('신규 모임 db 등록 성공');
        return response.json();
      } else {
        return response.json().then((data) => {
          console.log(data);
          let errorMessage = '모임 등록 실패';
          throw new Error(errorMessage);
        });
      }
    });
  }

  return (
    <div>
      <h3>신규 모임 추가</h3>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  );
};
export default NewMeetupPage;
