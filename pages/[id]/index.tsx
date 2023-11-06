'use client'

import React, { useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Character } from '../../app/interfaces/Character'
import Loader from '../../app/components/common/Loader'
import { Box, Button, Container, Typography, Card, CardMedia, CardContent } from '../../lib/mui'
import { useStores } from '../../app/root-store-context'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import { HeadContext } from '../../app/interfaces/head-interfaces'
import PageLayout from '../../app/layouts/page-layout'

const EpisodeItem: React.FC = observer(() => {
  const { episodeItem, loading, error, fetchEpisodeItem } = useStores();
  console.log(episodeItem)

  const router = useRouter();
  const {id} = router.query

  useEffect(() => {
    id && fetchEpisodeItem(String(id))
  }, [id]);

  const headContext: HeadContext = useMemo(
    () => ({
      title: `Episode | ${episodeItem?.name}`,
      meta: [],
    }),
    [episodeItem?.name]
  )

  if (loading) return (<Loader/>)

  if (error) {
    return (
      <>
      <Typography variant="body1"
      noWrap
      component="div" sx={{display: "flex", justifyContent: "center", mt: 4}}>Oops!! Error: {error} </Typography>
      </>
    )
  }

  if(episodeItem === null) {
    return (
      <>
      <Typography variant="body1"
      noWrap
      component="div" sx={{display: "flex", justifyContent: "center", mt: 4}}>Oops!! It seems that such an episode does not exist</Typography>
      </>
    )
  }

  return !loading && episodeItem && ( 
    <>
    <PageLayout headContext={headContext}>
    <Container sx={{display: "flex", flexDirection: "column", gap: "18px"}}>
        <Button variant="outlined" sx={{display: "flex", alignSelf: "flex-start", mt: 3}}>
          <Link href="/">Go back</Link>
        </Button>
      <Typography variant="h5" component="div">
          {episodeItem.name}
        </Typography>
        <Typography variant="body1">Air date: {episodeItem.air_date}</Typography>
        <Typography variant="subtitle1">Episode: {episodeItem.episode}</Typography>
        <Typography variant="subtitle1">Characters: {episodeItem.characters?.length}</Typography>
        <Box sx={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
        {episodeItem.characters?.map((character: Character, index: number) => (
             <Card key={index}  sx={{ width: 160 }} >
               <CardMedia
                 component="img"
                 height="160"
                 image={character.image}
                 alt="character img"
               />
               <CardContent sx={{padding: "12px"}}>
                 <Typography gutterBottom variant="body1" component="div">
                 {character.name}
                 </Typography>
                 <Typography variant="subtitle2" color="text.secondary">
                 {character.status}
                 </Typography>
               </CardContent>
           </Card>
        ))}
        </Box>
    </Container>
    </PageLayout>
    </>
  )
})

export default EpisodeItem;