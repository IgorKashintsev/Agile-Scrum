import { 
  CardContent,
  CardMedia,
  Card,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import { FC } from "react";
import StarIcon from '@mui/icons-material/Star';
import { items } from "../../../../constants";
import styleListCard from './ListDescription.module.scss';
import { useSelector } from "react-redux";
import { selectCategoryListIndex } from "src/store/main/selectors";
import { selectAverageRating } from "src/store/rating/selectors";

export const ListDescription: FC = () => {
  const selectedIndex = useSelector(selectCategoryListIndex);
  const ratingValue = useSelector(selectAverageRating);
  
  const showName = () => {
    const name = (items.get(selectedIndex))?.name;
    if(name === undefined) {
      return
    }
    else if(name.length > 30) {
      return (`${name.substring(0, 30)}...`)
    }
    return name
  };

  const imgDescription = (idImage: number) => {
    return (items.get(selectedIndex))?.images[idImage]
  };
  
  return(
    <>
      <div className={styleListCard.card}>
        <Card 
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            maxWidth: 345,
            height: '100%',
            boxShadow: 'none',
            bgcolor: '#d6d6d6',
          }}
          >
          <CardContent>
            <Typography 
              marginTop={2}
              fontSize={19}
              gutterBottom variant="h5" component="div"
            >
              {showName()}
            </Typography>
            <div className={styleListCard.rating}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >Рейтинг:
                <Rating
                  name="text-feedback"
                  value={ratingValue.find(item => item.id === selectedIndex)?.rating}
                  readOnly
                  precision={0.1}
                  sx={{ ml: 0.5 }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <p 
                  className={styleListCard.rating_value}
                >{ratingValue.find(item => item.id === selectedIndex)?.rating} из 5</p>
              </Box>
            </div>
            <Typography
              sx={{ 
                fontSize: '12px',
                marginTop: '5px',
              }}
            >Дата выпуска: {(items.get(selectedIndex))?.date.toLocaleDateString()}
            </Typography>
          </CardContent>
          <CardMedia
            sx={{width: '100%'}}
          >
            <img
              className={styleListCard.img}
              src={imgDescription(2)}
            />
            <img
              className={styleListCard.img}
              src={imgDescription(3)}
            />
            <img
              className={styleListCard.img}
              src={imgDescription(4)}
            />
            <img
              className={styleListCard.img}
              src={imgDescription(5)}
            />
          </CardMedia>
        </Card>
      </div>
    </>
  );
};