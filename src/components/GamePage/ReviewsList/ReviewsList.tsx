import { Box, List, ListItem, Rating } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { ReviewObj } from "../../../types";
import userLogo from '../../../../image/user2.png';
import StarIcon from '@mui/icons-material/Star';

import styleReviewsList from './ReviewsList.module.scss'
import { useSelector } from "react-redux";
import { StoreState } from "../../../store";

interface ReviewsListProps {
  gameId: string;
};

export const ReviewsList: FC<ReviewsListProps> = ({gameId}) => {
  const [reviewListArr, setReviewListArr] = useState<ReviewObj[]>([]);

  const reviewArr = useSelector((state: StoreState) => state.reviews.reviews);

  useEffect(() => {
    setReviewListArr(reviewArr.filter(item => item.id === Number(gameId)))
  }, [reviewArr, gameId]);

  return(
    <List>
      <hr className={styleReviewsList.hr}></hr>
      <h2 className={styleReviewsList.header}>Все обзоры</h2>
      {reviewListArr.map((reviewItem, idx) => (
        <ListItem className={styleReviewsList.listItem} key={idx}>
          <img src={userLogo}/>
          <div className={styleReviewsList.listItem_review}>
            <h3>{reviewItem.login}</h3>
            <p
              className={styleReviewsList.listItem_date}
            >Опубликовано: {reviewItem.date.toLocaleDateString()}</p>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px'
              }}
            >Оценка:
              <Rating
                name="text-feedback"
                value={reviewItem.rating}
                readOnly
                precision={0.1}
                sx={{ ml: 0.5 }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <p className={styleReviewsList.listItem_rating}>{reviewItem.rating} из 5</p>
            </Box>
            <p className={styleReviewsList.listItem_text}>{reviewItem.review}</p>
          </div>
        </ListItem>
      ))}
    </List>
  );
};