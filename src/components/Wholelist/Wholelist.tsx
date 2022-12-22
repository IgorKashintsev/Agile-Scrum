import { Box, List, ListItemButton, ListItemText, Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { items } from "../../constants";

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

  useEffect(() => {
    for(let i = 1; i <= items.size; i++) {
      setMapList(mapList.set(Array.from(items.keys())[i - 1], items.get(i)?.rating));
    }
    setListSortArr([...mapList.entries()].sort((a, b) => b[1] - a[1]));

    setPageCount(Math.ceil(listSortArr.length / pageSize));

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setListPageArr(listSortArr.slice(start, end))
  }, [pageCount, currentPage]);

  const handleListItemEnter = (index: number) => {
    setSelectedIndex(index);
  };
  
  return(
    <>
      <div className={style.container}>
        <Stack spacing={2}>
          <Box
            sx={{
              mt: '55px',
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
            <div className={styleWholelist.img}>
              <List
                sx={{
                  '&& .Mui-selected, && .Mui-selected:hover': {
                    color: 'rgba(0, 0, 0, 0.87)',
                    bgcolor: '#fff',
                    '& .MuiListItemText-secondary': {
                      color: 'rgba(31, 31, 31, 0.87)',
                    },
                  }
                }}
                component="nav"
                aria-label="secondary mailbox folder"
              >
                {listPageArr.map((item, index) => (
                  <ListItemButton 
                    selected={selectedIndex === item[0]}
                    onMouseEnter ={() => handleListItemEnter(item[0])}
                    onMouseLeave ={() => handleListItemEnter(-1)}
                    key={index}
                  >
                    <img src={(items.get(item[0]))?.images[0]}></img>
                    <ListItemText 
                      sx={{ marginLeft: '20px'}}
                      primary={(items.get(item[0]))?.name} 
                      secondary={(items.get(item[0]))?.genre.join(', ')}
                    />
                    <ListItemText 
                      sx={{ textAlign: 'right'}}
                      primary="Бесплатно"
                    />
                  </ListItemButton>
                ))}
              </List>
            </div>
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
    </>
  );
};