import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'


class BotsPage extends React.Component {
  constructor(){
    super()

    this.state = {
      bots: [],
      botArmy: [],
      clicked: false,
      currentBot: ''
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => {
      const addOwnedToBots = bots.map(bot => {
        bot.owned = false
      return bot})
      this.setState({bots: addOwnedToBots})
    })
    .catch(e => console.log(e))
  }


  handleAddBot = (bot) => {
   
    if(bot.owned !== true){
    const changedBots = this.state.bots.map(b => {
      if(b === bot){
        b.owned = true
        return b
      }
      return b
    })
    this.setState({bots: changedBots})


    bot.owned = true
    let addToArmy = this.state.botArmy
    addToArmy.push(bot)
    this.setState({botArmy: addToArmy})
  }
  }


  handleRemoveBot = (bot) => {

    if(bot.owned !== false){
      const changedBots = this.state.bots.map(b => {
        if(b === bot){
          b.owned = false
          return b
        }
        return b
      })

      this.setState({bots: changedBots}) 
    
  
    bot.owned = false
    let removedFromArmy = []
    this.state.bots.forEach(botA => {
      if (botA.owned === true){
        removedFromArmy.push(botA)
      }
    })
    this.setState({botArmy: removedFromArmy})
  }
  }

  handleBotClick = (bot) => {
    this.setState({clicked: !this.state.clicked})
    this.setState({currentBot: bot})
  }

 
  handleGoBack = () => {
    this.setState({clicked: !this.state.clicked})
  }

  


  render() {
    return (
      <div>
        <YourBotArmy handleRemoveBot={this.handleRemoveBot} botArmy={this.state.botArmy} />
       
       {this.state.clicked === true ? <BotSpecs handleGoBack={this.handleGoBack} handleAddBot={this.handleAddBot} bot={this.state.currentBot} /> : <BotCollection clicked={this.state.clicked} handleRemoveBot={this.props.handleRemoveBot} bots={this.state.bots} handleBotClick={this.handleBotClick} />} 

        
      </div>
    );
  }

}

export default BotsPage;
