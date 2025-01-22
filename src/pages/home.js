import React, { useState, useEffect } from "react";
import axios from "axios";
import Hedar from "../componant/Hedar";
import { Link } from "react-router-dom";
import Slidar from "../componant/Slidar";

export default function Home() {
  const [Xxx, setXxx] = useState([]);
  const [setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=8c4a17696dab522853861e576ee44805`
        );
        setXxx(response.data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ////////////////  code Search ///////

  const [results, setResults] = useState([]);
  const [textInput, setTextInput] = useState("");

  const getAnime = async () => {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${textInput}`
    );
    setResults(response.data.data);
  };

  useEffect(() => {
    getAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textInput]);

  return (
    <>
      <Hedar />
      <Slidar />

      <div className="container">
        <form className="w-50 ms-auto me-auto m-5" role="search">
          <input
            onChange={(e) => setTextInput(e.target.value)}
            className="form-control bg-secondary me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <div className="row">
          {results &&
            results &&
            Xxx.filter((item) => {
              const searchValue = textInput.toLowerCase().trim();
              if (searchValue === "") {
                return true;
              } else {
                return (
                  item.title && item.title.toLowerCase().includes(searchValue)
                );
              }
            }).map((item) => (
              <div
                key={item.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                    className="card-img-top"
                    alt={item.name || item.title}
                    style={{ height: "240px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name || item.title}</h5>
                    <p className="card-text flex-grow-1">
                      {item.overview.slice(0, 40)}
                    </p>
                    <Link
                      to={`/Detilse/${item.id}`}
                      className="btn btn-primary mt-auto"
                    >
                      Show
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
