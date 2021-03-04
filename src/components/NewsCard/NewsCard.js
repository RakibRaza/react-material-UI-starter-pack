import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  avater: {
    background: red[500],
  },
}));
const NewsCard = ({ title, urlToImage, content, author, publishedAt }) => {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={4}>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader
          avatar={<Avatar className={classes.avater}>N</Avatar>}
          title={author}
          subheader={publishedAt}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image={urlToImage || "https://via.placeholder.com/150"}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {content || "this is some fake data"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ marginTop: "auto", justifyContent: "center" }}>
          <Button
            component={Link}
            to={`/news/${title}`}
            variant="outlined"
            size="large"
            color="secondary"
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsCard;
