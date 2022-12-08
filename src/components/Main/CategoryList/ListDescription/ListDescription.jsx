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

export const ListDescription = ({selectedIndex}) => {
  const ratingValue = (items.find(user => user.id === selectedIndex)).rating;

  const name = (items.find(user => user.id === selectedIndex)).name;
  const showName = () => {
    if(name.length > 35) {
      return (`${name.substring(0, 35)}...`)
    }
    return name
  };

  const imgDescription = (idImage) => {
    return (items.find(user => user.id === selectedIndex)).images[idImage]
  };

  return(
    <>
      <Card 
        sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          maxWidth: 345,
          Height: 916.5,
          boxShadow: 'none',
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
        </CardContent>
        <CardMedia
          sx={{width: '100%'}}
        >
          <img
            className={styleListCard.img}
            src={imgDescription(1)}
          />
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
        </CardMedia>
      </Card>
    </>
  );
};