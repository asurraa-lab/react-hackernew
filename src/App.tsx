import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./layouts/header";
import { NewsCard, NewsCardProps } from "./components/news-card";
import axios from "axios";

function App() {
  const [popularStoryState, setPopularStoryState] = React.useState<number[]>(
    []
  );

  useEffect(() => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((res) => {
        const data = res.data;
        setPopularStoryState(data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div
      className="App"
      style={{
        paddingRight: 50,
        paddingLeft: 50,
        paddingTop: 5,
        backgroundColor: "#F6F6EF",
      }}
    >
      <Header />
      {popularStoryState.map((id, index) => {
        return <NewsCard id={id} index={index} />;
      })}
    </div>
  );
}

export default App;
