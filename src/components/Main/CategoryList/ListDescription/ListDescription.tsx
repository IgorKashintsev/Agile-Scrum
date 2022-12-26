import { 
  CardContent,
  CardMedia,
  Card,
  Typography,
  Box,
  Rating
} from "@mui/material";
import { items, labels } from "../../../../constants";
import StarIcon from '@mui/icons-material/Star';

import styleListCard from './ListDescription.module.scss';
import { FC } from "react";

interface ListDescriptionProps {
  selectedIndex: number;
};

export const ListDescription: FC<ListDescriptionProps> = ({selectedIndex}) => {
  const ratingValue = (items.get(selectedIndex))!.rating;

  const name = (items.get(selectedIndex))?.name;
  const showName = () => {
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