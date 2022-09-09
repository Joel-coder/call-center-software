import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import PhoneContainer from "./component/PhoneContainer.jsx";
import useApi from "./component/useApi.js";
import RountButton from "./component/Button.jsx";
const App = () => {
  const { loading, data } = useApi(
    "https://aircall-job.herokuapp.com/activities"
  );
  console.log(data);
  return (
    <div className="container">
      <Header />
      <div className="test">
        {data &&
          data.map((data) => <PhoneContainer key={data.id} data={data} />)}
      </div>
      <RountButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
