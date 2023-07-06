import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CardComponent from "../card_component/CardComponent";
import SearchBar from "../search_bar/SearchBar";

const CardList = (props) => {
    if (!props.images) {
        return (
            <Grid container justifyContent="center">
                <Grid item>
                    <SearchBar confirmSearch={props.confirmSearch} setSearch={props.setSearch} />
                </Grid>
            </Grid>
        );
    }
    return (
        <Grid container justifyContent="center">
            <Grid item>
                <SearchBar confirmSearch={props.confirmSearch} setSearch={props.setSearch} />
            </Grid>
            <Grid container item>
                {
                    props.images.map(image => {
                        return (
                            <Link key={image.id} to={`/image-details/${image.id}`}>
                              <CardComponent key={image.id} image={image} />
                            </Link>
                        );
                    })
                }
            </Grid>
        </Grid>
    );
}

export default CardList;