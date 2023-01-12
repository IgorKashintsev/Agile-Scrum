import { List, ListItem } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { ReviewObj } from "../../../types";
import userLogo from '../../../../image/user2.png';

import styleReviewsList from './ReviewsList.module.scss'

interface ReviewsListProps {
  reviewArr: ReviewObj[];
  gameId: string;
}

export const ReviewsList: FC<ReviewsListProps> = ({reviewArr, gameId}) => {
  const [reviewList, setReviewList] = useState<ReviewObj[]>([]);

  useEffect(() => {
    setReviewList(reviewArr.filter(item => item.id === Number(gameId)))
  }, [reviewArr]);

  return(
    <List>
      <hr className={styleReviewsList.hr}></hr>
      <h2 className={styleReviewsList.header}>Все обзоры</h2>
      {reviewList.map((reviewItem, idx) => (
        <ListItem className={styleReviewsList.listItem} key={idx}>
          <img src={userLogo}/>
          <div className={styleReviewsList.listItem_review}>
            <h3>{reviewItem.login}</h3>
            <p
              className={styleReviewsList.listItem_date}
            >Опубликовано: {reviewItem.date.toLocaleDateString()}</p>
            <p>{reviewItem.review}</p>
          </div>
        </ListItem>
      ))}
    </List>
  );
};