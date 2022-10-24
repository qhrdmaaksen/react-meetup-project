/*!!!해당 컴포넌트는 모든 모임들을 로딩하고 표시함!!!*/

import MeetupList from '../components/meetups/MeetupList';
import { useEffect, useState } from 'react';
/*const DUMMY_DATA = [
  {
    id: 'm1',
    title: '첫 만남입니다',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      '절대 놓쳐서는 안 될 첫 번째, 놀라운 만남입니다. 매우 재미있을 것입니다!',
  },
  {
    id: 'm2',
    title: '두 번째 만남입니다',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      '절대 놓쳐서는 안 될 두 번째, 놀라운 만남입니다. 매우 재미있을 것입니다!',
  },
];*/

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-meetup-project-df2fd-default-rtdb.firebaseio.com/meetups.json',
    )
      .then((response) => {
        console.log('응답받은 json data :::',response);
        return response.json();
      })
      .then((meetupsData) => {
        const transformedMeetups = [];
        for (const key in meetupsData) {
          const meetup = {
            id: key,
            ...meetupsData[key],/*객체에 데이터 키 분매, 주어진 키를 가진 중첩 객체에 접근하기위함*/
          };
          transformedMeetups.push(meetup);
          console.log('배열 변환 후 모임 데이터 :::',transformedMeetups)
        }
        setIsLoading(false);
        setLoadedMeetups(transformedMeetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  console.log('meetup final data :::',loadedMeetups);
  return (
    <section>
      <h1>모든 모임 목록</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};
export default AllMeetupsPage;
