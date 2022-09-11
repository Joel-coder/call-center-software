import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import PhoneContainer from "./component/PhoneContainer.jsx";
import useApi from "./component/useApi.js";
import usePostApi from "./component/usePostApi.js";
import RountButton from "./component/Button.jsx";

import { useEffect, useState } from "react";

const App = () => {
  const [id, setID] = useState(null);
  const archived = { is_archived: true };
  const { loading, data } = useApi(
    "https://aircall-job.herokuapp.com/activities"
  );

  useEffect(() => {
    if (id != null) {
      fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(archived),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  }, [id]);
  return (
    <div className="container">
      <Header />
      <div className="test">
        {data &&
          data.map((data) => (
            <PhoneContainer key={data.id} data={data} setID={setID} />
          ))}
      </div>
      <footer className="bottom-bar">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-archive"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
          </svg>
        </span>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
