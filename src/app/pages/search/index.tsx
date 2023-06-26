import { Page } from "framework7-react";
import { getSafeAreaClass } from "../../utils/f7utils";

const SearchPage = () => {

    return (
        <Page name="search" className={getSafeAreaClass()}>
            Search Page
        </Page>
    );
};


export default SearchPage;