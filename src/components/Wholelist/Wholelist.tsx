import { 
  Box, 
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
import { ListPageArr, ListSortArr, PageCount, ReviewObj } from "../../types";

import styleWholelist from './Wholelist.module.scss';
import style from '../../global.module.scss';

interface MainProps {
  reviewArr: ReviewObj[];
};

export const Wholelist: FC<MainProps> = ({reviewArr}) => {
  const [mapList, setMapList] = useState(new Map());
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [listSortArr, setListSortArr] = useState<ListSortArr>([]);
  const pageSize = 10;
  const [pageCount, setPageCount] = useState<PageCount>();
  const [listPageArr, setListPageArr] = useState<ListPageArr>([]);
  const [active, setActive] = useState(false);
  const [cordinatSelected, setCordinatSelected] = useState<number>();
  
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
      if(reviewArr.findIndex(item => item.id === i) !== -1) {
        let arrFiltered = reviewArr
          .filter(item => item.id === i)
          .map(item => item.rating);
        setMapList(mapList.set
          (
            Array.from(items.keys())[i], {rating: Number(((items.get(i)?.rating! + 
            arrFiltered.reduce((sum, current) => sum! + current!, 0)!) / 
            (arrFiltered.length + 1)).toFixed(1)), date: items.get(i)?.date}
          )
        );
      } else {
        setMapList(mapList.set
          (
            Array.from(items.keys())[i], 
            {rating: items.get(i)?.rating, date: items.get(i)?.date}
          )
        );
      }
    }
  }, [reviewArr]);

  useEffect(() => {
    window.scrollTo(0,0);
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
        if(upLine > 510 && upLine < 642) {
          setCordinatSelected((selectedRef.current.offsetTop) - 60);
        } else if (upLine > 641 && upLine < 773) {
          setCordinatSelected((selectedRef.current.offsetTop) - 192);
        } else if (upLine > 772 && upLine < 904) {
          setCordinatSelected((selectedRef.current.offsetTop) - 324);
        } else if(upLine > 903 && upLine < 1035) {
          setCordinatSelected((selectedRef.current.offsetTop) - 456);
        } else {
          setCordinatSelected((selectedRef.current.offsetTop) + 72);
        }
      } else if (screenRes > 1080 && screenRes < 1441) {
        if(upLine > 850 && upLine < 982) {
          setCordinatSelected((selectedRef.current.offsetTop) - 60);
        } else if (upLine > 981 && upLine < 1113) {
          setCordinatSelected((selectedRef.current.offsetTop) - 192);
        } else if (upLine > 1112 && upLine < 1244) {
          setCordinatSelected((selectedRef.current.offsetTop) - 324);
        } else if(upLine > 1243 && upLine < 1375) {
          setCordinatSelected((selectedRef.current.offsetTop) - 456);
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
              <Description 
                idxSlide={selectedIndex? selectedIndex: 0}
                reviewArr={reviewArr}
              />
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
                  <ListItemButton
                    ref={(selectedIndex === item[0])? selectedRef: null}
                    selected={selectedIndex === item[0]}
                    onMouseEnter ={() => setSelectedIndex(item[0])}
                    onMouseLeave ={() => setSelectedIndex(-1)}
                    onClick={() => HandleClick(item[0])}
                    key={item[0]}
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
                      value={(mapList.get(item[0]))?.rating}
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