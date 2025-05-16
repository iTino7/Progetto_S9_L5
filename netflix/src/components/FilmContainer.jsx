import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MyTrendingFilm from "./MyTrendingFilm";
import MyWatchAgain from "./MyWatchAgain";
import MySeries from "./MySeries";

class FilmContainer extends Component {
  render() {
    return (
      <>
        <MyTrendingFilm title="Trending now" />
        <MyWatchAgain title="Horror" />
        <MySeries title="Series" />
      </>
    );
  }
}

export default FilmContainer;
