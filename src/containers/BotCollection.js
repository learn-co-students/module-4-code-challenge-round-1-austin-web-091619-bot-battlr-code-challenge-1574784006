import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
renderBots=()=>{
	return this.props.bots.map(bot=><BotCard key={bot.id} bot={bot} handleClick={this.props.handleAddBot}/>)
}
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
