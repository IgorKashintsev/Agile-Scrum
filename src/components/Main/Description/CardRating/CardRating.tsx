import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { items, labels } from '../../../../constants';

import styleRating from './CardRating.module.scss';
import { IdxSlide } from '../../../../types';
import { FC } from 'react';

interface CardRatingProps {
  idxSlide: IdxSlide;
};

export const CardRating: FC<CardRatingProps> = ({idxSlide}) => {

  const ratingValue = (items.get(idxSlide))!.rating;

  return(
    <>
      <div className={styleRating.rating}>
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
          }}
        >Рейтинг:
          <Rating
            name="text-feedback"
            value={ratingValue}
            readOnly
            precision={0.5}
            sx={{ ml: 0.5 }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Box sx={{ ml: 1 }}>{labels[ratingValue]}</Box>
        </Box>
      </div>
    </>
  );
};