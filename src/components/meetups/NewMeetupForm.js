/*새로운 모임 양식 담당 컴포넌트*/

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef, useState } from 'react';

const NewMeetupForm = (props) => {
  /*useRef 로 입력 받을 input 에 대한 참조 객체들*/
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    /*useRef 로 생성된 모든 ref 객체는 current 속성을 가지고있으며 이에 연결된 값이있다.
     * 만약 화면에 출력되는것을 임의로 바꾸고싶다면 useState 를 사용해야한다.*/
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    /*사용자 입력값이 잘 들어오는지 db 에 보내기전 콘솔로그로 확인하는 습관을 갖자*/
    console.log('신규 모임 양식 데이터 :::', meetupData);

    /*부모 컴포넌트로 입력값 전달*/
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">모임 이름</label>
          <input type="text" id="title" ref={titleInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">모임 이미지</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">모임 장소</label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">모임 설명</label>
          <textarea
            id="description"
            ref={descriptionInputRef}
            required
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">모임 추가</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetupForm;
