import React from "react";

import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/priyanshusingh280906-hub")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="bg-gray-400 flex  flex-col">
        <h1 className="text-6xl p-10 bg-gray-500">
          GitHub User:- {data?.login}
        </h1>

        {data ? (
          <div className="flex p-4">
            <img
              src={data.avatar_url}
              alt={data.login}
              className="w-110 pr-10"
            />
            <div className="bg-gray-200 p-4">
              <h2 className="text-5xl pb-10">{data.name}</h2>
              <p className="text-2xl pb-10">Bio: {data.bio}</p>
              <div className="flex gap-4 text-3xl pb-4">
                <p>Followers: {data.followers}</p>
                <p>Following: {data.following}</p>
              </div>
              <p className="text-3xl">
                Public Repositories: {data.public_repos}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Github;
