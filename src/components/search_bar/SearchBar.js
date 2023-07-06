import { Grid, TextField } from "@mui/material";
import searchBar from "./SearchBar.module.scss";

const SearchBar = (props) => {
    return (
        <Grid container className={searchBar.searchbar}>
            <TextField
            className={searchBar.textfield}
            label="Search Images..."
            value={props.confirmSearch}
            onChange={event => props.setSearch(event.target.value)}
            />
        </Grid>
    );
}

export default SearchBar;