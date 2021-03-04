import React, { useEffect, useState } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import NewsCard from "../NewsCard/NewsCard";
const API =
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6061afd57f0741918091e691f604e628";

const News = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const res = await fetch(API);
    const data = await res.json();

    setNews(data.articles);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <Container component={Box} py={6}>
      <Grid container spacing={2} justify="center">
        {news.map((item) => (
          <NewsCard key={item.title} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

export default News;
