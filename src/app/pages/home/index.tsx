import React from 'react';
import {
  Block,
  BlockTitle,
  Page, PageContent
} from 'framework7-react';

const HomePage = () => {

  

  return (
    <Page name="home">
      <PageContent>
        <Block strong inset>
          <BlockTitle large>Liverpool</BlockTitle>
        </Block>
      </PageContent>
    </Page>
  );
};
export default HomePage;