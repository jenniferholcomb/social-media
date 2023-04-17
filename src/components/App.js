import React from "react";
import Header from './Header';
import ProfileHeader from "./ProfileHeader";
import Feed from './Feed';

const profile = { name: "Kellie A. Corrigan" };

function App() {
  return (
    // <div className="App">
    <React.Fragment>
      <Header />
      <main>
        <ProfileHeader name={profile.name} />
        <Feed />
      </main>
    </React.Fragment>


  );
}

export default App;
