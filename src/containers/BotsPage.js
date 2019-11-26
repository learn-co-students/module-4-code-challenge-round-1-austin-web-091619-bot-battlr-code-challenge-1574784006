import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import BotFilter from './BotFilter'
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots:[],
    botArmy:[],
    inspectBot: null,
    filter:"All",
    sort:"health"
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

  handleFilterChange=(event)=>{
    this.setState({
      filter:event.target.value
    })
  }
  handleSortChange=(event)=>{
    this.setState({
      sort:event.target.value
    })
  }

  filterBots=()=>{
    if(this.state.filter==="All"){
      return this.sortBots()
    } else {
      return this.sortBots().filter(bot=>bot.bot_class===this.state.filter)
    }
  }

  sortBots=()=>{
    if(this.state.sort !== 'sum'){
      return this.state.bots.sort((bot1,bot2)=>{
        if(bot1[this.state.sort]<bot2[this.state.sort]){
          return 1
        } else {
          return -1
        }
      })
    } else {
      // sort is sum
      return this.state.bots.sort((bot1,bot2)=>{
        if((bot1.armor+bot1.damage+bot1.health)>(bot2.armor+bot2.damage+bot2.health)){
          return 1
        } else {
          return -1
        }
      })
    }
  }


  render() {
    return (
      <div>
        <YourBotArmy handleRemoveBot={this.handleRemoveBot} botArmy={this.state.botArmy}/>
        <BotFilter handleSortChange={this.handleSortChange} sort={this.state.sort} handleFilterChange={this.handleFilterChange} filter={this.state.filter}/>
        { this.state.inspectBot ?
          <BotSpecs bot={ this.state.inspectBot } handleAddBot={this.handleAddBot} handleClearInspect={this.handleClearInspect}/> :
          <BotCollection handleInspectBot={this.handleInspectBot} bots={this.filterBots()} />
        }
      </div>
    );
  }

}

export default BotsPage;
