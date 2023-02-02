import { Button, Rating, useTheme } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { FC, useState } from "react";
import userLogo from '../../../../image/user2.png';
import styleReview from './Review.module.scss'
import { items } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../store";
import { addReview } from "../../../store/reviews/actions";

interface ReviewProps {
  gameId: string;
};

export const Review: FC<ReviewProps> = ({gameId}) => {
  const [textReview, setTextReview] = useState('');
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);

  const loginAuth = useSelector((state: StoreState) => state.auth.loginAuth);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    dispatch(addReview(
      {
        id: Number(gameId), 
        login: loginAuth, 
        review: textReview,
        date: new Date(),
        rating: value,
      }
    ));
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
          <div className={styleReview.form_rating}>
            <p 
              className={styleReview.form_explan}
            >Пожалуйста, поставьте оценку этой игре
            </p>
            <div className={styleReview.form_bottom_rating}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(_, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(_, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              {value !== null && (
                <p>{hover !== -1 ? hover : value} из 5</p>
              )}
            </div>
          </div>
          <Button 
            type="submit"
            sx={{
              maxWidth: "300px",
              maxHeight: "40px",
              color: "#d6d6d6",
              fontWeight: "600",
              border: "1px solid #757575",
              "&:hover":{
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "#d6d6d6",
              },
              [theme.breakpoints.down('sm')]: {
                mt: "12px",
              },
            }}
            disabled={!(textReview && value !== null && value > 0)}
            >Опубликовать
          </Button>
        </div>
      </form>
    </>
  );
};