import React from "react";
import Header from './Header';
import Feed from './Feed';

function App() {
  return (
    // <div className="App">
    <React.Fragment>
      <Header />
      <main>
        <Feed />
      </main>
    </React.Fragment>


  );
}

export default App;
