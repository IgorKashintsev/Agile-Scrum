import { 
  Box, 
  Divider, 
  List, 
  ListItemButton, 
  ListItemText, 
  Pagination, 
  Rating, 
  Stack, 
  useTheme
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { FC, useEffect, useRef, useState } from "react";
import { useNavigate   } from 'react-router-dom';
import { items } from "../../constants";
import { Description } from "../Main/Description/Description";
import { ListPageArr, ListSortArr } from "src/types";
import styleWholelist from './Wholelist.module.scss';
import style from '../../global.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectReviews } from "src/store/reviews/selectors";
import { onIdxSlide } from "src/store/main/slice";
import { selectIdxSlide } from "src/store/main/selectors";
import { selectAverageRating } from "src/store/rating/selectors";

export const Wholelist: FC = () => {
  const [mapList, setMapList] = useState(new Map());
  const [currentPage, setCurrentPage] = useState(1);
  const [listSortArr, setListSortArr] = useState<ListSortArr>([]);
  const pageSize = 10;
  const [pageCount, setPageCount] = useState<number>();
  const [listPageArr, setListPageArr] = useState<ListPageArr>([]);
  const [active, setActive] = useState(false);
  const [cordinatSelected, setCordinatSelected] = useState<number>();

  const reviewArr = useSelector(selectReviews);
  const ratingValue = useSelector(selectAverageRating);
  const selectedIndex = useSelector(selectIdxSlide);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const bestRef = useRef<HTMLDivElement | any>(null);
  const newRef = useRef<HTMLDivElement | any>(null);
  const selectedRef = useRef<HTMLDivElement | any>(null);

  const handleClickBest = () => {
    bestRef.current.classList.add(styleWholelist.active);
    newRef.current.classList.remove(styleWholelist.active);
    setActive(true);
    setCurrentPage(1);
  };

  const handleClickNew = () => {
    newRef.current.classList.add(styleWholelist.active);
    bestRef.current.classList.remove(styleWholelist.active);
    setActive(true);
    setCurrentPage(1);
  };

  const HandleClick = (itemList: number) => {
    for (let [key] of items.entries()) {
      if (key === itemList) {
        navigate(`/${key.toString()}`)
      }
    }
  };

  useEffect(() => {
    for(let i = 0; i < items.size; i++) {
        setMapList(mapList.set
          (
            Array.from(items.keys())[i], 
            {
              rating: ratingValue.find(item => item.id === i)?.rating, 
              date: items.get(i)?.date,
            }
          )
        );
      }
  }, [reviewArr]);

  useEffect(() => {
    window.scrollTo(0,0);
    dispatch(onIdxSlide(-1));
  }, [currentPage])

  useEffect(() => {
    setActive(false)

    if(bestRef.current.classList.contains(`${styleWholelist.active}`)) {
      setListSortArr([...mapList].sort((a, b) => b[1].rating - a[1].rating));
    } else {
      setListSortArr([...mapList].sort((a, b) => b[1].date - a[1].date));
    }

    setPageCount(Math.ceil(listSortArr.length / pageSize));

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setListPageArr(listSortArr.slice(start, end))
  }, [pageCount, currentPage, active]);

  useEffect(() => {
    if(selectedRef.current !== null) {
      let upLine = selectedRef.current.getBoundingClientRect().top;
      let screenRes = window.screen.availHeight;
      if(screenRes < 1081) {
        if(upLine > 510 && upLine <= 643) {
          setCordinatSelected((selectedRef.current.offsetTop) - 61);
        } else if (upLine > 643 && upLine <= 776) {
          setCordinatSelected((selectedRef.current.offsetTop) - 194);
        } else if (upLine > 776 && upLine <= 909) {
          setCordinatSelected((selectedRef.current.offsetTop) - 327);
        } else if(upLine > 909 && upLine <= 1042) {
          setCordinatSelected((selectedRef.current.offsetTop) - 460);
        } else {
          setCordinatSelected((selectedRef.current.offsetTop) + 72);
        }
      } else if (screenRes > 1080 && screenRes < 1441) {
        if(upLine > 850 && upLine <= 983) {
          setCordinatSelected((selectedRef.current.offsetTop) - 61);
        } else if (upLine > 983 && upLine <= 1116) {
          setCordinatSelected((selectedRef.current.offsetTop) - 194);
        } else if (upLine > 1116 && upLine <= 1249) {
          setCordinatSelected((selectedRef.current.offsetTop) - 327);
        } else if(upLine > 1249 && upLine <= 1382) {
          setCordinatSelected((selectedRef.current.offsetTop) - 460);
        } else {
          setCordinatSelected((selectedRef.current.offsetTop) + 72);
        }
      } else {
        setCordinatSelected((selectedRef.current.offsetTop) + 72);
      }
    }
    return
  }, [selectedIndex]);

  return(
    <>
      <div className={style.container}>
        <div className={styleWholelist.wholelist}>
          <div
            className={styleWholelist.wholelist_description}
            style={{ 
              marginTop: `${cordinatSelected}px`,
            }}
          >
            {(selectedIndex !==-1 && window.screen.availWidth > 1710) && 
              <Description />
            }
          </div>
          <Stack spacing={2}>
            <div className={styleWholelist.wholelist_header}>
              <div
                ref={bestRef}
                onClick={handleClickBest}
                style={{cursor: 'pointer'}}
                className={`${styleWholelist.wholelist_header_group} ${styleWholelist.active}`}
              >Лучшее
              </div>
              <div
                ref={newRef}
                onClick={handleClickNew}
                style={{cursor: 'pointer'}}
                className={styleWholelist.wholelist_header_group}
              >Новинки
              </div>
            </div>
            <Box
              sx={{
                width: '100%',
                color: '#d6d6d6',
                bgcolor: '#4b4b4b',
                borderRadius: '4px',
                '& .MuiListItemText-primary': {
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '11px',
                  },
                },
                '& .MuiListItemText-secondary': {
                  color: '#a8a8a8',
                  fontSize: '13px',
                  [theme.breakpoints.down('sm')]: {
                    display: 'none',
                  },
                },
              }}
            >
              <List
                sx={{
                  '&& .Mui-selected, && .Mui-selected:hover': {
                    color: 'rgba(0, 0, 0, 0.87)',
                    bgcolor: '#d6d6d6',
                    '& .MuiListItemText-secondary': {
                      color: 'rgba(31, 31, 31, 0.87)',
                    },
                  }
                }}
                component="nav"
                aria-label="secondary mailbox folder"
              >
                {listPageArr.map((item) => (
                  <div key={item[0]}>
                    <ListItemButton
                      ref={(selectedIndex === item[0])? selectedRef: null}
                      selected={selectedIndex === item[0]}
                      onMouseEnter ={() => dispatch(onIdxSlide(item[0]))}
                      onMouseLeave ={() => dispatch(onIdxSlide(-1))}
                      onClick={() => HandleClick(item[0])}
                    >
                      <div>
                        <img 
                          src={(items.get(item[0]))?.images[0]}
                          className={styleWholelist.wholelist_img}
                        ></img>
                      </div>
                      <div className={styleWholelist.wholelist_name}>
                        <ListItemText
                          sx={{ 
                            marginLeft: '20px',
                            [theme.breakpoints.down('sm')]: {
                              marginLeft: '10px', 
                            },
                          }}
                          primary={(items.get(item[0]))?.name} 
                          secondary={(items.get(item[0]))?.genre.join(', ')}
                        />
                      </div>
                      <ListItemText
                        sx={{ 
                          textAlign: 'right', 
                          mr: '50px',
                          [theme.breakpoints.down('md')]: {
                            display: 'none',
                          },
                        }}
                        secondary={(items.get(item[0]))?.date.toLocaleDateString()}
                      />
                      <Rating
                        name="text-feedback"
                        value={ratingValue.find(el => el.id === item[0])?.rating}
                        readOnly
                        precision={0.1}
                        sx={{ 
                          maxWidth: '100px', 
                          fontSize: '15px',
                          [theme.breakpoints.down('md')]: {
                            display: 'none',
                          },
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      <ListItemText
                        sx={{ 
                          textAlign: 'right',
                          maxWidth: '110px',
                          [theme.breakpoints.down('md')]: {
                            maxWidth: 'none',
                          },
                        }}
                        primary={`${(items.get(item[0]))?.price.toFixed(2)} ₽`}
                      />
                    </ListItemButton>
                    <Divider/>
                  </div>
                ))}
              </List>
            </Box>
            <Pagination 
              sx={{
                '& .MuiPaginationItem-root.Mui-selected': {
                  backgroundColor: '#4b4b4b',
                },
                '& .MuiPagination-ul': {
                  justifyContent: "center",
                },
                '& .MuiButtonBase-root': {
                  color: '#d6d6d6',
                },
              }}
              count={pageCount} 
              page={currentPage}
              onChange={(_, num) => setCurrentPage(num)}
              variant="outlined" 
              shape="rounded" />
          </Stack>
        </div>
      </div>
    </>
  );
};