/*새로운 모임 양식 담당 컴포넌트*/

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">모임 이름</label>
          <input type="text" id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">모임 이미지</label>
          <input type="text" id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">모임 장소</label>
          <input type="text" id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">모임 설명</label>
          <textarea id="description"></textarea>
        </div>
        <div className={classes.actions}>
          <button>모임 추가</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetupForm;
