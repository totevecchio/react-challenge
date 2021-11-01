import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [bandas, setBandas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/improvein/dev-challenge/bands")
      .then((result) => {
        setBandas(result.data);
        setIsLoaded(true);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredBands = bandas.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="w-screen h-screen ml-8 md:ml-0 flex justify-center items-center mt-10 md:mt-20 ">
      <div className="h-screen w-screen">
        <form className="flex justify-center ">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-400 rounded-sm shadow-lg"
            onChange={handleChange}
          />
        </form>
        {!isLoaded ? (
          <div className="flex justify-center">
            <div className="bg-white shadow-xl rounded-lg w-1/2 my-1 text-center">
              <em>Loading...</em>
            </div>
          </div>
        ) : (
          <>
            {filteredBands.map((data) => (
              <div className="flex justify-center">
                <div className="bg-white shadow-xl rounded-lg w-1/2 my-1">
                  <ul className="divide-y divide-gray-300">
                    <Link to={`/band/${data.id}`}>
                      <li className="p-4 hover:bg-gray-50 cursor-pointer text-center">
                        {data.name}
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
