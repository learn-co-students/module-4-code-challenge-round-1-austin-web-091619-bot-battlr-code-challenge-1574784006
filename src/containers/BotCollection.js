import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  constructor(){
	  super()
  }



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/* {this.props.bots.map((bot, idx) => <BotCard handleAddBot={this.props.handleAddBot} bot={bot} key={idx} />)} */}

			  {this.props.bots.map((bot, idx) => <BotCard clicked={this.props.clicked} handleRemoveBot={this.props.handleRemoveBot} handleBotClick={this.props.handleBotClick} bot={bot} key={idx} />)}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
