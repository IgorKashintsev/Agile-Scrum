import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { items } from '../../../../constants';

import styleRating from './CardRating.module.scss';

export const CardRating = ({idxSlide}) => {
  const labels = {
    0.5: 'ужасный',
    1: 'ужасный+',
    1.5: 'низкий',
    2: 'низкий+',
    2.5: 'средний',
    3: 'средний+',
    3.5: 'хороший',
    4: 'хороший+',
    4.5: 'превосходный',
    5: 'превосходный+',
  };
  const ratingValue = (items.find(user => user.id === idxSlide)).rating;
  console.log();
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