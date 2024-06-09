import React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

const PaginationEL = ({ count, page, onPageChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3 }}>
      <Pagination count={count} page={page} onChange={onPageChange} color="secondary" />
    </Box>
  );
};

export default PaginationEL;
