import { Button } from "@mui/material";
import { FC, useState } from "react";
import { ReviewObj, Login } from "../../../types";
import userLogo from '../../../../image/user2.png';

import styleReview from './Review.module.scss'
import { items } from "../../../constants";

interface ReviewProps {
  onAddReviewArr: (newReview: ReviewObj) => void;
  gameId: string;
  loginAuth: Login;
}

export const Review: FC<ReviewProps> = ({onAddReviewArr, gameId, loginAuth}) => {
  const [textReview, setTextReview] = useState('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onAddReviewArr({
      id: Number(gameId), 
      login: loginAuth, 
      review: textReview,
      date: new Date(),
    });
    setTextReview('');
  };

  return(
    <>
      <form 
        className={styleReview.form}
        onSubmit={(ev) => handleSubmit(ev)}
      >
        <h3>Написать обзор {items.get(Number(gameId))?.name}</h3>
        <p 
          className={styleReview.form_explan}
        >Пожалуйста, опишите, что вам понравилось или не понравилось в этой игре</p>
        <div className={styleReview.form_review}>
          <img src={userLogo}></img>
          <textarea 
            className={styleReview.form_text}
            value={textReview}
            onChange={(ev) => setTextReview(ev.target.value)}
          ></textarea>
        </div>
        <div className={styleReview.form_bottom}>
          <p 
            className={styleReview.form_explan}
          >Пожалуйста, поставьте оценку этой игре</p>
          <Button 
            type="submit"
            sx={{
              maxWidth: "300px",
              color: "#d6d6d6",
              fontWeight: "600",
              border: "1px solid #757575",
              "&:hover":{
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "#d6d6d6",
              },
            }}
            disabled={!textReview}
            >Опубликовать
          </Button>
        </div>
      </form>
    </>
  );
};