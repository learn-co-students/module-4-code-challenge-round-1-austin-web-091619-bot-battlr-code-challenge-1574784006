import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots:[],
    botArmy:[]
  }

  componentDidMount=()=>{
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp=>resp.json())
    .then(bots=>{
      console.log(bots)
      this.setState({ 
        bots: bots })
    })
  }

  handleAddBot=(id)=>{
    // check if bot is in army first. if not, add.
    if(!this.state.botArmy.find(bot=>bot.id===id)){
      this.setState({
        botArmy:[...this.state.botArmy, this.state.bots.find(bot=>bot.id===id)]
      })
    }
  }
  handleRemoveBot=(id)=>{
    // check if bot is in army first. if is, remove.
    if(this.state.botArmy.find(bot=>bot.id===id)){
      this.setState({
        botArmy:this.state.botArmy.filter(bot=>bot.id!==id)
      })
    }
  }



  render() {
    return (
      <div>
        <YourBotArmy handleRemoveBot={this.handleRemoveBot} botArmy={this.state.botArmy}/>
        <BotCollection handleAddBot={this.handleAddBot} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
