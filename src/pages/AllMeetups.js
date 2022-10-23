/*!!!해당 컴포넌트는 모든 모임들을 로딩하고 표시함!!!*/

const DUMMY_DATA = [
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
];

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>모든 모임 목록 페이지</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
};
export default AllMeetupsPage;
