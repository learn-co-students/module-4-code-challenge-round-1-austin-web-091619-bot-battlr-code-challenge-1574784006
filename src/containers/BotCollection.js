import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(){
	  super()
  }



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map((bot, idx) => <BotCard handleAddBot={this.props.handleAddBot} bot={bot} key={idx} />)}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
