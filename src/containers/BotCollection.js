import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
	constructor() {
		super()
		this.state = {
			bot: null,
			onSpec: false
		}
	}

	handleDisplaySpecs = (bot) => {
		this.setState({ onSpec: true })
		this.setState({ bot })
	}

	handleGoBack = () => {
		this.setState({ onSpec: false })
		this.render()
	}

	render() {
		const { bots, onBotAdd } = this.props
		if (this.state.onSpec)
			return (
				<BotSpecs
					bot={this.state.bot}
					onGoBack={this.handleGoBack}
					onBotAdd={onBotAdd}
				/>
			)
		else
			return (
				<div className="ui four column grid">
					<div className="row">
						{bots.map(bot => {
							return <BotCard
								key={bot.id}
								bot={bot}
								onBotClick={this.handleDisplaySpecs}
							/>
						})}
					</div>
				</div>
			);
	}

};

export default BotCollection;
