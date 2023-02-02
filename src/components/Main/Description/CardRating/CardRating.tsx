import { FC, useEffect, useState } from 'react';
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { items } from '../../../../constants';
import { IdxSlide } from '../../../../types';

import styleRating from './CardRating.module.scss';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../../store';

interface CardRatingProps {
  idxSlide: IdxSlide;
};

export const CardRating: FC<CardRatingProps> = ({idxSlide}) => {
  const [ratingValue, setRatingValue] = useState((items.get(idxSlide))?.rating);

  const reviewArr = useSelector((state: StoreState) => state.reviews.reviews);

  useEffect(() => {
    if(reviewArr.findIndex(item => item.id === idxSlide) !== -1) {
      let arrFiltered = reviewArr
        .filter(item => item.id === idxSlide)
        .map(item => item.rating);
      setRatingValue(
        Number((((items.get(idxSlide))!.rating + 
        arrFiltered.reduce((sum, current) => sum! + 
        current!, 0)!) / (arrFiltered.length + 1)).toFixed(1))
      );
    } else {
      setRatingValue((items.get(idxSlide))?.rating);
    }
  }, [reviewArr, idxSlide]);

  return(
    <>
      <div className={styleRating.rating}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >Рейтинг:
          <Rating
            name="text-feedback"
            value={ratingValue}
            readOnly
            precision={0.1}
            sx={{ ml: 0.5 }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <p className={styleRating.rating_value}>{ratingValue} из 5</p>
        </Box>
      </div>
    </>
  );
};