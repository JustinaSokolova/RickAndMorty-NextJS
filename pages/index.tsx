import styled from 'styled-components';
import EpisodesList from '../app/components/EpisodesList';
import SearchForm from "../app/components/SearchForm";
import PageLayout from "../app/layouts/page-layout";
import { HeadContext } from "@/interfaces/head-interfaces";
import SubTitle from '../app/components/common/titles/sub-title';

const backgroundimage =
  'https://img.goodfon.ru/original/3360x1050/3/4d/vinda-rik-rick-windows-10-rick-and-morty-rik-i-morti-morti-r.jpg';

const headContext: HeadContext = {
  title: 'Rick and Morty App',
  meta: [
    {
      name: 'description',
      content: 'Rick and Morty App created with NextJS, MobX, GraphQL, MUI and styled components',
    },
  ],
};

const Main: React.FC = () => {
  return (
    <PageLayout headContext={headContext}>
      <BackgroundWrapper backgroundimage={backgroundimage} />
        <Header>
          <SubTitle align='center' mt={18}>{'Which episode would you like to find?'}</SubTitle>
        </Header>
        <Content>
            <SearchForm/>
            <EpisodesList/>
         </Content>
      
    </PageLayout>
  )
}

const BackgroundWrapper = styled.div<{backgroundimage: string}>`
  position: relative;
  height: 420px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
        

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // object-fit: cover
    background-image: url(${(props) => props.backgroundimage});
    background-repeat: no-repeat;
    background-position: left 85%;
    background-size: cover;
  }
`

const Header = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
`
const Content = styled.section`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export default Main;