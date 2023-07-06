import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";
import cardComponent from "./CardComponent.module.scss";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CardComponent = (props) => {
    return (
        <Card raised sx={{ maxWidth: 450 }} className={cardComponent.card}>
            <CardActionArea className={cardComponent.actionArea}>
                <CardMedia
                    component="img"
                    height="300"
                    image={props.image["largeImageURL"]}
                    alt={props.image["tags"]}
                />
                <CardContent>
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <ThumbUpAltIcon />
                            <Typography gutterBottom variant="h6" component="span">
                                {props.image["likes"]}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <CommentIcon />
                            <Typography gutterBottom variant="h6" component="span">
                                {props.image["comments"]}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <VisibilityIcon />
                            <Typography gutterBottom variant="h6" component="span">
                                {props.image["views"]}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardComponent;
