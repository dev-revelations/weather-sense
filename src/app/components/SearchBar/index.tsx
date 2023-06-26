import { Block, Button, Icon } from "framework7-react";

import './style.scss';
import { useState } from "react";

type SearchBarProps = {
    onSearch: (text: string) => void;
};

const SearchBar = (props: SearchBarProps) => {

    const { onSearch } = props;

    const [searchText, setSearchText] = useState('');

    const callSearchHandler = () => {
        onSearch(searchText);
        setSearchText('');
    }

    const handleOnEnter = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            callSearchHandler();
        }
    };

    return (
        <Block className="search-block" strong inset>
            <input className="search-input" placeholder="Enter city or state name"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyUp={handleOnEnter}
            />
            <Button className="search-button"
                onClick={callSearchHandler}
            >
                <Icon f7="search" />
            </Button>
        </Block>
    );
};

export default SearchBar;