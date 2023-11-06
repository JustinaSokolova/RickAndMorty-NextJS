import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
query SearchEpisodes($filter: FilterEpisode){
  episodes(filter: $filter) {
    info {
      count
      pages
    }
    results {
      id
      name
      episode
      air_date
    }
  }
}
`


