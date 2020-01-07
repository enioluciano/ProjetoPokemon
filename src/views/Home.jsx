import React from 'react';
import '../components/css/Home.css'
import '../components/css/Header.css'
import Header from '../components/templates/Header'
import Body from '../components/templates/Body'
import Main from '../components/templates/Main'



function Home() {
  return (
    <div className="container">
      <Header />
      <Body />

    </div>
  );
}

export default Home;
