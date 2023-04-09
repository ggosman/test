import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const [endPoint, setEndPoints] = useState("");

  const [container, setContainer] = useState([]);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "837c152f8amshdebcf0fe56acf70p11af6ejsn3b56c48a5352",
      "X-RapidAPI-Host": "symptom-checker4.p.rapidapi.com",
    },
    body: '{"symptoms":"I have a red rash on my forearm that appeared suddenly last night. It does not itch or hurt."}',
  };

  fetch(
    "https://symptom-checker4.p.rapidapi.com/analyze?symptoms=%3CREQUIRED%3E",
    options
  )
    // .then((response) => response.json())
    // .then((response) => console.log(response))
    .then((response) => {
      console.log(response.json());
    })
    .then((data) => {
      setContainer(data);
    })
    .catch((err) => console.error(err));

  const onChangeHandler = (e) => {
    setEndPoints(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Welcome />
      {/* <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler} />
        <button type="submit">submit</button>
      </form> */}
    </div>
  );
}

export default App;
