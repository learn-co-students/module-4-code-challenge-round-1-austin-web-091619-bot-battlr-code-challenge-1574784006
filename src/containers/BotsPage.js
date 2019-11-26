import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
// import { runInThisContext } from "vm";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      yourBots: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(bots => this.setState({ bots }))
  }

  // Fuunctions below

  handleAddBot = (bot) => {
    let yourBots = [...this.state.yourBots]
    if (yourBots.length < 4 && !yourBots.includes(bot)) {
      yourBots.push(bot)
      this.setState({ yourBots })
    }
  }

  handleRemoveBot = (bot) => {
    let yourBots = [...this.state.yourBots]
    const i = yourBots.indexOf(bot)
    yourBots.splice(i, 1)
    this.setState({ yourBots })
  }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.yourBots}
          onBotClick={this.handleRemoveBot}
        />
        <BotCollection
          bots={this.state.bots}
          onBotAdd={this.handleAddBot}
        />

      </div>
    );
  }

}

export default BotsPage;
