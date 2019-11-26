import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  render(){
    const { bots, onBotClick } = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots.map(bot => {
              return <BotCard
                key={bot.id}
                bot={bot}
                onBotClick={onBotClick}
              />
            })}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
