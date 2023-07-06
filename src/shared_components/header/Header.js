import { AppBar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import header from "./Header.module.scss";

const Header = () => {
    return (
        <AppBar position="sticky" className={header.appBar}>
            <Link to="/pixabay" className={header.header}>
                <Typography variant="h3" component="h1" fontFamily="Roboto">
                    Pixabay Image Search
                </Typography>
            </Link>
        </AppBar>
    );
}

export default Header;