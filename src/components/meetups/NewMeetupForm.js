/*새로운 모임 양식 담당 컴포넌트*/

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import {useRef, useState} from "react";

const NewMeetupForm = () => {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    fetch('https://react-meetup-project-df2fd-default-rtdb.firebaseio.com/meetups.json'
        , {
      method: 'POST',
          body: JSON.stringify({
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
          })
        }).then(response => {
          if(response.ok){
            console.log('신규 모임 db 등록 성공')
            return response.json()
          } else {
            return response.json().then(data => {
              console.log(data)
              let errorMessage = '모임 등록 실패'
              throw new Error(errorMessage)
            })
          }
    })
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">모임 이름</label>
          <input type="text" id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">모임 이미지</label>
          <input type="text" id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">모임 장소</label>
          <input type="text" id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">모임 설명</label>
          <textarea id="description" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>모임 추가</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetupForm;
