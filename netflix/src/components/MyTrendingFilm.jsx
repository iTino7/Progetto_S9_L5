import React, { Component } from "react";
import { Container } from "react-bootstrap";

class FilmContainer extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      const resp = await fetch(
        "https://www.omdbapi.com/?s=berserk&full&apikey=a2ca179f"
      );

      if (resp.ok) {
        const movies = await resp.json();
        this.setState({ movies: movies.Search });
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <>
        <h4 className=" px-4 text-white mt-3">{this.props.title}</h4>
        <Container fluid className="pt-2">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {this.state.movies.slice(0, 6).map((item) => (
              <img
                key={item.imdbID}
                src={item.Poster}
                alt={item.Title}
                style={{
                  cursor: "pointer",
                  minWidth: "15%",
                }}
                className="my-2"
              />
            ))}
          </div>
        </Container>
      </>
    );
  }
}

export default FilmContainer;
