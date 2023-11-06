'use client'

import React from 'react';
import {Box, TextField, Button, FormControl} from '../../../lib/mui';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../root-store-context';

const SearchForm: React.FC = observer(() => {
  const { searchQuery, setSearchQuery, fetchEpisodes } = useStores();

  const handleSearch = () => {
      if(searchQuery.length) fetchEpisodes();
    };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if(event.code === "Enter") event.preventDefault();
    if(searchQuery.length) {
      fetchEpisodes(); 
    }
  }

  return (
    <>
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "24px", mt: 3}}>
    <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '45ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <FormControl fullWidth >
     <TextField
          type="text"
          id="outlined-basic" variant="outlined"
          label="Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event)}
          color="primary"
        />
        </FormControl>
     </Box>
     <Button variant="outlined" type="button" onClick={handleSearch}>Enter</Button> 
     </Box>
     </>
  )
})

export default SearchForm;