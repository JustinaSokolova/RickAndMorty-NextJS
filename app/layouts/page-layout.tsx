import { HeadContext } from '../interfaces/head-interfaces';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  children: React.ReactNode,
  headContext: HeadContext
}

const PageLayout: React.FC<PageLayoutProps> = ({children, headContext}) => {
  const {title, meta} = headContext
  return (
    <Container>
      <Head>
      <title>{title}</title>
        {meta.map(({property, content, key, name}) => (
          <meta name={name || ''} content={content || ''} property={property || ''} key={key || ''} />
        ))}
        <link rel="icon" type="image/png"  href='../../favicon.png'/>
      </Head>
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export default PageLayout