

import React, { Component } from "react";
import "./style.css";
import Bookmark from './components/Bookmark'
import   DisplayList from './components/DisplayList'



class  App extends Component{
  state = {
   
    list: [],
    
  };

  handleSubmit = (Track , Artist , Album , Genre , Year)=>{
    let obj={
      track:Track,
      artist:Artist,
      album:Album,
      genre:Genre,
      year:Year


    }
    this.setState({
      list: [...this.state.list, obj]
    })
  }
   
  render(){
    
    return (

      <div> 
         <Bookmark   handleSubmit={this.handleSubmit}/>
         <DisplayList  data={this.state.list} />

      </div>
     
      
    

    );
  }
  

  
}


export default App ;