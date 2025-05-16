import "./App.css";
import FilmContainer from "./components/FilmContainer";
import MyFooter from "./components/MyFooter";
import MyNavBar from "./components/MyNavBar";
import MyTvShows from "./components/MyTvShows";

function App() {
  return (
    <>
      <MyNavBar img="logo" fontIcon="fs-5" />
      <MyTvShows title="TV Shows" iconClass="me-3 fs-5" />
      <FilmContainer/>
      <MyFooter footerClass="footer-links" />
    </>
  );
}

export default App;
