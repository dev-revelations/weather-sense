import {
  BlockTitle,
  Icon,
  Link,
  Page, PageContent, Sheet, Toolbar
} from 'framework7-react';

import DailyForecastList from '../../components/DailyForecastList';
import ForecastDetail from '../../components/ForecastDetail';
import WeatherBox from '../../components/WeatherBox';
import { getSafeAreaClass } from '../../utils/f7utils';
import './style.scss';
import useHomePageLogic from './useHomePageLogic';

type HomePageProps = {
  f7route: any;
  f7router: any;
};

const HomePage = (props: HomePageProps) => {
  const { f7router } = props;

  const {
    weather,
    dailyList,
    selectedForecast,
    sheetOpen,
    handleSheetClosed,
    handleSearchClick,
    handleForecastClick,

  } = useHomePageLogic(f7router);

  return (
    <Page name="home">
      <PageContent className={getSafeAreaClass()}>
        <div className="weather-wrapper">
          <div className="weather-head">
            {weather && <WeatherBox model={weather} onSearchClick={handleSearchClick} />}
          </div>


          {/* Weather List  */}
          <div className="weather-body">
            {dailyList?.length > 0 && <DailyForecastList forecastList={dailyList} onItemClick={handleForecastClick} />}
          </div>
        </div>
      </PageContent>


      <Sheet
        className="weather-sheet"
        style={{ height: 'auto' }}
        swipeToClose
        push
        backdrop
        opened={sheetOpen}
        onSheetClosed={handleSheetClosed}
      >
        <div className="swipe-handler"></div>

        <Toolbar className="sheet-toolbar">
          <div className="left"><BlockTitle large>{selectedForecast?.getFormatedDay()}</BlockTitle></div>
          <div className="right">
            <Link sheetClose><Icon f7="xmark_circle_fill" /></Link>
          </div>
        </Toolbar>

        <PageContent>
          {selectedForecast && <ForecastDetail forecast={selectedForecast} />}
        </PageContent>
      </Sheet>


    </Page>
  );
};
export default HomePage;