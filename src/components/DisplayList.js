import React, { useState } from "react";

function DisplayList (props){
  return (
    <div className="container">
      <ul className="list-group w-75 mt-"> 

      {props.data.map(item=>(
        <div className="col-sm-mt-5 mb-5">
          Artist:{item.artist}
        <div className="card">
          <div className="card-body">
            <li className="list-group-item">
              <h4>Track: {item.track}</h4>
              <h5 style={{display:'flex'}}>Artist:{item.artist}</h5>
              <h5 style={{display:'flex'}}>Album: {item.album}</h5>
              <h5 style={{display:'flex'}}>Genre: {item.genre}</h5>
              <h5 style={{display:'flex'}}>Year Released:{item.year}</h5>
                            
          </li>
          </div>
        </div>
        </div>
      ))}
      </ul>
    </div>
  )
}

export default DisplayList ;