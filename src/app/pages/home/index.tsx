import {
  Block,
  BlockTitle,
  Page, PageContent
} from 'framework7-react';

import './style.scss';
import { getSafeAreaClass } from '../../utils/f7utils';

type HomePageProps = {
  f7route: any;
  f7router: any;
};

const HomePage = (props: HomePageProps) => {

  const { f7router } = props;

  return (
    <Page name="home">
      <PageContent className={getSafeAreaClass()}>
        <Block strong inset>
          <BlockTitle large>Liverpool</BlockTitle>
        </Block>
      </PageContent>
    </Page>
  );
};
export default HomePage;