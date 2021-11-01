import React, { useState, useEffect } from "react";
import axios from "axios";

const Band = (query) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [bands, setBands] = useState([]);
  const [genre, setGenre] = useState([]);
  const [albums, setAlbums] = useState([]);
  console.log(query);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/db`
      );
      const data = await response.data;
      setData(data);
    };
    const getBands = async () => {
      const response = await axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/db`
      );
      const data = await response.data.bands.find(
        (ele) => ele.id == query.query.match.params.id
      );
      setBands(data);
    };

    const getALbums = async () => {
      const response = await axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/db`
      );
      let x = [];

      const data = await response.data.albums.map((ele) => {
        if (ele.bandId == query.query.match.params.id) {
          x.push(ele);
        }
      });
      setAlbums(x);
    };

    fetchData();
    getBands();
    getALbums();
    // getGenre()
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {!isLoaded ? (
        <div className="flex justify-center">
          <div className="bg-white shadow-xl rounded-lg w-1/2 my-1 text-center">
            <em>Loading...</em>
          </div>
        </div>
      ) : (
        <div className=" lg:bg-gray-700 h-full sm:w-3/4 sm:mt-20 mt-10 lg:flex lg:flex-col w-66 lg:h-2/4 lg:w-2/4 ml-16 sm:ml-0 rounded-3xl lg:shadow-lg justify-center items-center text-center mx-2 border-10 border-gray-900-25">
          <h3 className="uppercase text-4xl lg:text-6xl  lg:text-white tracking-wider ">
            {bands.name}
          </h3>
          <div className="w-full  lg:flex lg:flex-row justify-around uppercase text-medium text-white tracking-wider my-4">
            <div className="lg:w-2/6 bg-gray-500 rounded-xl p-3 shadow-sm mx-4 mt-2">
              <h4 className="my-3">Genre:{bands.genreCode}</h4>
              <h4 className="my-3">Year: {bands.year}</h4>
              <h4 className="my-3">Country: {bands.country}</h4>
            </div>
            <div className="lg:w-2/6 bg-gray-500 rounded-xl p-3 shadow-sm mx-4 mt-2">
              <h4>Members: </h4>
              {bands.members.map((b) => (
                <p className="my-2" key={b.name}>
                  -{b.name}
                </p>
              ))}
            </div>

            <div className="lg:w-2/6 bg-gray-500 rounded-xl p-3 shadow-sm mx-4 mt-2">
              <h4>Albums: </h4>
              {albums.map((b) => (
                <p className="my-2" key={b.name}>
                  {b.name} -{b.year}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Band;
