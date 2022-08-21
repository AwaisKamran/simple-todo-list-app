import React from "react";
import "./ActionContainer.css"

export default class ActionContainer extends React.PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='button-container'>
        <button>
          <span className="delete-text">Delete</span> 
          <span className="material-symbols-outlined delete-icon">delete</span>
        </button>
      </div>
    );
  }
} 