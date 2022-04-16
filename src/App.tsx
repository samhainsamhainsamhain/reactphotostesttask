import React from "react";

import Photo from "./components/photo/Photo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Photo
        id={0}
        url={
          "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q"
        }
      />
    </div>
  );
}

export default App;
