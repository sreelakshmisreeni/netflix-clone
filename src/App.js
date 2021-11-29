
import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import {action,originals} from './Urls'
import "./App.css";
import Banner from './Component/Banner/Banner';
import RowPost from './Component/RowPost/RowPost';



function App() {

  return (

    <div className="App">  
      
        <NavBar/>
        <Banner/>
        <RowPost url= {originals} title='Netflix Original'  />
        <RowPost url={action} title='Action Movie' isSmall />

    </div>


  );
}

export default App;
