import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import PhoneContainer from "./component/PhoneContainer.jsx";
import useApi from "./component/useApi.js";
import usePostApi from "./component/usePostApi.js";
import useGetResetApi from "./component/useGetResetApi.js";
import "regenerator-runtime/runtime";
import { useEffect, useState } from "react";

const App = () => {
  const [id, setID] = useState(null);
  const [cellphone, setCellPhone] = useState(null);
  const [data, setData] = useState([]);
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchApi = () => {
    fetch("https://aircall-job.herokuapp.com/activities", {
      signal: signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApi();
    return () => {
      controller.abort();
    };
  }, [cellphone]);

  useEffect(() => {
    remove();
    if (id != null) {
      usePostApi(`${id}`);
    }
  }, [id]);

  const remove = () => {
    const x = data.filter((phone) => {
      return phone.id !== id;
    });
    setData(x);
  };

  const reset = () => {
    cellphone ? setCellPhone(false) : setCellPhone(true);
    useGetResetApi("https://aircall-job.herokuapp.com/reset");
  };
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
        <span onClick={reset}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x-diamond"
            viewBox="0 0 16 16"
          >
            <path d="M7.987 16a1.526 1.526 0 0 1-1.07-.448L.45 9.082a1.531 1.531 0 0 1 0-2.165L6.917.45a1.531 1.531 0 0 1 2.166 0l6.469 6.468A1.526 1.526 0 0 1 16 8.013a1.526 1.526 0 0 1-.448 1.07l-6.47 6.469A1.526 1.526 0 0 1 7.988 16zM7.639 1.17 4.766 4.044 8 7.278l3.234-3.234L8.361 1.17a.51.51 0 0 0-.722 0zM8.722 8l3.234 3.234 2.873-2.873c.2-.2.2-.523 0-.722l-2.873-2.873L8.722 8zM8 8.722l-3.234 3.234 2.873 2.873c.2.2.523.2.722 0l2.873-2.873L8 8.722zM7.278 8 4.044 4.766 1.17 7.639a.511.511 0 0 0 0 .722l2.874 2.873L7.278 8z" />
          </svg>
          <p>Reset</p>
        </span>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
