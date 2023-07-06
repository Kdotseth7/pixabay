import { useParams } from "react-router-dom";
import { Grid, Typography, Paper } from "@mui/material";
import cardDetail from "./CardDetail.module.scss";

const CardDetail = (props) => {
    // Getting ID from URL
    const { id } = useParams();

    // Finding image using ID
    const image = props.images.find(img => img.id.toString() === id);

    if (!image) return <Grid>Loading...</Grid>;

    return (
        <Grid container flexDirection="column" className={cardDetail.container}>
            <Grid item xs={12}>
                <Paper elevation={10} className={cardDetail.paper}>
                    <Typography variant="h4" color="primary">
                        User ID: {image.user}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={10} className={cardDetail.paper}>
                    <Typography variant="h5" color="secondary">
                        Relevant Tags: {image.tags}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <img src={image.webformatURL} alt={image.tags} className={cardDetail.image}/>
            </Grid>
        </Grid>
    );
};

export default CardDetail;
