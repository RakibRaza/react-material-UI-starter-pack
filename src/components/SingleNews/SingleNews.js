import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const API =
  "https://newsapi.org/v2/top-headlines?apiKey=6061afd57f0741918091e691f604e628";
const SingleNews = () => {
  const { params } = useParams();
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const res = await fetch(`${API}&q=${params}`);
    const data = await res.json();
    console.log(data);
    setNews(data.articles);
    console.log(data.articles);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  if (news.length === 0) {
    return (
      <Box py={10}>
        <Typography align="center" variant="h1">
          Loding.....
        </Typography>
      </Box>
    );
  }
  const { title, content, urlToImage } = news[0];
  return (
    <Container>
      <Paper component={Box} my={4} textAlign="center" p={6}>
        <img width="100%" src={urlToImage} alt={title} />
        <Typography gutterBottom variant="h4">
          {title}
        </Typography>
        <Typography paragraph>{content}</Typography>
        <Button
          size="large"
          component={Link}
          to="/"
          variant="contained"
          color="secondary"
        >
          Back Home
        </Button>
      </Paper>
    </Container>
  );
};

export default SingleNews;
