import { roadMapDays } from './utilis/RoadMapJson';
import RoadMapCard from './RoadMapCard';
import React, { useState } from 'react';
import Header from './Header';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RoadMap_Modules_Topics = () => {
  const [startMock, setStartMock] = useState(false);
  const itemsPerPage = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const renderRoadMapCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, roadMapDays.length);

    return roadMapDays.slice(startIndex, endIndex).map((element, index) => (
      <RoadMapCard {...element} key={index} startMock={startMock} setStartMock={setStartMock} />
    ));
  };

  return (
    <>
      <Header />
      <Stack spacing={2}>
        {renderRoadMapCards()}
        
        <Pagination
        sx={{ cursor: 'pointer',margin:"0 auto !important",marginTop:"10px !important" }}
          count={Math.ceil(roadMapDays.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              component="div"
              onClick={() => setCurrentPage(item.page)}
              sx={{ cursor: 'pointer',marginLeft:"50px !important" }}
              icon={(item.type === 'previous' && <ArrowBackIcon />) || (item.type === 'next' && <ArrowForwardIcon />)}
            />
          )}
        />
      </Stack>
    </>
  );
};

export default RoadMap_Modules_Topics;
