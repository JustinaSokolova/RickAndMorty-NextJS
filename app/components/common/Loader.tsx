'use client'

import React from 'react';

import {Box, CircularProgress} from '../../../lib/mui';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", mt: 3 }}>
      <CircularProgress />
    </Box>
  )
}

export default Loader