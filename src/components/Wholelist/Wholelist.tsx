import { Box, List, ListItemButton, ListItemText, Pagination, Rating, Stack } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useRef, useState } from "react";
import { useNavigate   } from 'react-router-dom';
import { items } from "../../constants";
import { WholelistDescription } from "./WholelistDescription/WholelistDescription";

import styleWholelist from './Wholelist.module.scss';
import style from '../../global.module.scss';
import { ListPageArr, ListSortArr, PageCount } from "../../types";

export const Wholelist = () => {
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
      setMapList(mapList.set(Array.from(items.keys())[i], {rating: items.get(i)?.rating, date: items.get(i)?.date}));
    }
  }, []);

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

  // console.log('wholelist');

  return(
    <>
      <div className={style.container}>
        <div className={styleWholelist.wholelist}>
          <div
            className={styleWholelist.description}
            style={{ 
              marginTop: `${cordinatSelected}px`,
            }}
          >
            {(selectedIndex !==-1) && <WholelistDescription idxSlide={selectedIndex? selectedIndex: 0}/>}
          </div>
          <Stack spacing={2}>
            <div className={styleWholelist.list_header}>
              <div
                ref={bestRef}
                onClick={handleClickBest}
                style={{cursor: 'pointer'}}
                className={`${styleWholelist.list_header_group} ${styleWholelist.active}`}
              >Лучшее
              </div>
              <div
                ref={newRef}
                onClick={handleClickNew}
                style={{cursor: 'pointer'}}
                className={styleWholelist.list_header_group}
              >Новинки
              </div>
            </div>
            <Box
              sx={{
                width: '100%',
                color: '#d6d6d6',
                bgcolor: '#4b4b4b',
                borderRadius: '4px',
                '& .MuiListItemText-secondary': {
                  color: '#a8a8a8',
                  fontSize: '13px',
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
                    className={styleWholelist.img}
                    ref={(selectedIndex === item[0])? selectedRef: null}
                    selected={selectedIndex === item[0]}
                    onMouseEnter ={() => setSelectedIndex(item[0])}
                    onMouseLeave ={() => setSelectedIndex(-1)}
                    onClick={() => HandleClick(item[0])}
                    key={item[0]}
                  >
                    <div>
                      <img src={(items.get(item[0]))?.images[0]}></img>
                    </div>
                    <ListItemText
                      sx={{ marginLeft: '20px', maxWidth: '330px' }}
                      primary={(items.get(item[0]))?.name} 
                      secondary={(items.get(item[0]))?.genre.join(', ')}
                    />
                    <ListItemText
                      sx={{ textAlign: 'right', mr: '50px'}}
                      secondary={(items.get(item[0]))?.date.toLocaleDateString()}
                    />
                    <Rating
                      name="text-feedback"
                      value={(items.get(item[0]))?.rating}
                      readOnly
                      precision={0.5}
                      sx={{ maxWidth: '100px', fontSize: '15px'}}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <ListItemText
                      sx={{ 
                        textAlign: 'right',
                        maxWidth: '110px',
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