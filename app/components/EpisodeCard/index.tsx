'use client'

import { Card, CardContent, Typography} from '../../../lib/mui';

import Link from 'next/link'

import { Episode } from '../../interfaces/Episode'
import styled from 'styled-components';

const EpisodeCard = (episode: Episode) => {

  return (
    <>
     <Link
      href={`/${episode.id}`}
    >
      <CardStyle>
      <Card sx={{ width: 295, height: 170 }}>
      <CardContent>
        <LinkStyle>
      <Typography variant="h5" component="div">
          {episode.name}
        </Typography>
        </LinkStyle>
        <Typography variant="body1">Air date: {episode.air_date}</Typography>
        <Typography variant="subtitle1">Episode: {episode.episode}</Typography>
        </CardContent>
      </Card>
      </CardStyle>
      </Link>
      </>
  )
};

  const LinkStyle = styled.a`
  transition: all 0.3s;
`

const CardStyle = styled.div`
cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05)
  }

  &:hover ${LinkStyle} {
    color: #1976d2;
  }
`

export default EpisodeCard;