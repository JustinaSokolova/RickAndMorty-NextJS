'use client'

import React, {useState} from 'react';
import {Box, TextField, Button, FormControl} from '../../../lib/mui';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../root-store-context';

const SearchForm: React.FC = observer(() => {
  const { fetchEpisodes } = useStores();
  const [searchField, setSearchField] = useState('');

  const handleSearch = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
      if(searchField.length) {
        console.log(searchField);
        fetchEpisodes(searchField);
      }
    };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if(event.code === "Enter") event.preventDefault();
    if(searchField.length && event.code === "Enter") {
      event.preventDefault();
      console.log(searchField);
      fetchEpisodes(searchField); 
    }
  };

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
      <FormControl fullWidth>
     <TextField
          type="text"
          id="outlined-basic" variant="outlined"
          label="Name"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event)}
          color="primary"
        />  
        </FormControl>
     </Box>
     <Button variant="outlined" onClick={(e) => handleSearch(e)} >Enter</Button> 
     </Box>
     </>
  )
})

export default SearchForm;