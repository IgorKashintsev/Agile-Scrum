import { 
  CardContent,
  CardMedia,
  Card,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { CardRating } from "../../Description/CardRating/CardRating";
import { ReviewObj } from "../../../../types";
import { items } from "../../../../constants";

import styleListCard from './ListDescription.module.scss';

interface ListDescriptionProps {
  selectedIndex: number;
  reviewArr: ReviewObj[];
};

export const ListDescription: FC<ListDescriptionProps> = (
    {
      selectedIndex, 
      reviewArr
    }
  ) => {
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
            <CardRating idxSlide={selectedIndex} reviewArr={reviewArr}/>
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