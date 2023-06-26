import { Page, PageContent } from "framework7-react";
import SearchBar from "../../components/SearchBar";
import WeatherList from "../../components/WeatherList";
import { getSafeAreaClass } from "../../utils/f7utils";
import './style.scss';
import useSeachLogic from "./useSearchLogic";

type SearchPageProps = {
    f7route: any;
    f7router: any;
};

const SearchPage = (props: SearchPageProps) => {

    const { f7route, f7router } = props;

    const { weathers, handleSearch } = useSeachLogic(f7router);

    return (
        <Page name="search" className={getSafeAreaClass()}>
            <PageContent>
                <div className="weather-search-wrapper">
                    <div className="weather-search-top">
                        <SearchBar onSearch={handleSearch} />
                    </div>

                    <div className="weather-list-body">
                        <WeatherList weatherList={weathers} onClick={handleSearch} />
                    </div>
                </div>
            </PageContent>
        </Page>
    );
};


export default SearchPage;