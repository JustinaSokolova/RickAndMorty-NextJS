'use client'

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Button, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from "../../../lib/mui";

import EpisodeCard from '../EpisodeCard'
import { Episode } from '../../interfaces/Episode'

import Loader from '../common/Loader';
import { useStores } from '../../root-store-context';
import { observer } from 'mobx-react-lite';
import _ from "lodash";


const EpisodesList: React.FC = observer(() => {
  const { episodes, totalCount, loading, error, setSortedEpisodes, getSortedEpisodes } = useStores();
  const [visible, setVisible] = useState(5);
  const [sortBy, setSortBy] = useState("");


  const getFilteredEpisodes = (sortBy: string) => {
      // @ts-ignore
      const filteredEpisodes = episodes.sort((a ,b) => {
        let dateA = new Date(Date.parse(a.air_date));
        let dateB = new Date(Date.parse(b.air_date));
        // @ts-ignore
        if (sortBy === "asc") return dateA - dateB;
        // @ts-ignore
        if (sortBy === "dest") return dateB - dateA;
      })
      return setSortedEpisodes(filteredEpisodes);
    }


  const handleChangeSort = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
    getFilteredEpisodes(event.target.value);

  };

  const handleMoreEpisodes = () => {
    setVisible((prevValue) => prevValue + 5);
  }


  const episodesForShow = getSortedEpisodes.length ? getSortedEpisodes : episodes

  if (error) {
      return (
        <>
        <Typography variant="body1"
        noWrap
        component="div" sx={{display: "flex", justifyContent: "center"}}>Oops!! Error: {error} </Typography>
        </>
      )
    }

  if (loading) return (<Loader/>)

  if(totalCount === null) return (
    <>
    <Typography variant="body1"
    noWrap
    component="div" sx={{display: "flex", justifyContent: "center"}}>{"Sorry, there are no episodes with this name :("}</Typography>
    </>
  )

  return episodes.length ? (
      <>
      <Container sx={{display: "flex", flexDirection: "column", gap: "24px"}}>
        <Typography variant="h4" sx={{color: "#000"}}>Episodes ({totalCount})</Typography>
        <Box sx={{ minWidth: 120 }}>
        <Typography variant="body1" sx={{color: "#000", mb: 2}}>Sorted by Date:</Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Select"
          onChange={handleChangeSort}
          sx={{maxWidth: "320px"}}
        >
          <MenuItem value="dest">newest</MenuItem>
          <MenuItem value="asc">oldest</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <Grid container spacing={3}>
          {episodesForShow.slice(0, visible).map((episode: Episode, index: number) => (
            <Grid item xs={4} key={`${episode.id}${episode.name}`} >
              <EpisodeCard {...episode} />
              </Grid>
          ))}
        </Grid>
        <Button variant="outlined" sx={{ alignSelf: "center", mb: 3}} onClick={handleMoreEpisodes}>Load more</Button>
        </Container>
      </>
  ) : (
    <Typography variant="body1"
    noWrap
    component="div" sx={{display: "flex", justifyContent: "center"}}>Use the input field to search for episodes</Typography>
  )
})

export default EpisodesList