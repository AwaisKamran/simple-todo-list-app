import React from 'react';
import "./Heading.css";

export default class Heading extends React.PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    console.log("Heading Component Rendered");
    return (<div className='heading'>Todo List</div>);
  }
}