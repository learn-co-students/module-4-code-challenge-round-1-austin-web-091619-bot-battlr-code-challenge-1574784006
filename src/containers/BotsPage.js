import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots:[],
    botArmy:[],
    inspectBot: null
  }

  componentDidMount=()=>{
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp=>resp.json())
    .then(bots=>{
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
  handleInspectBot=(id)=>{
    this.setState({
      inspectBot: this.state.bots.find(bot=>bot.id===id)
    })
  }
  
  handleClearInspect=()=>{
    this.setState({
      inspectBot: null
    })
  }



  render() {
    return (
      <div>
        <YourBotArmy handleRemoveBot={this.handleRemoveBot} botArmy={this.state.botArmy}/>
        { this.state.inspectBot ?
          <BotSpecs bot={ this.state.inspectBot } handleAddBot={this.handleAddBot} handleClearInspect={this.handleClearInspect}/> :
          <BotCollection handleInspectBot={this.handleInspectBot} bots={this.state.bots} />
        }
      </div>
    );
  }

}

export default BotsPage;
