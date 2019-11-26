import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	render() {
		const { bots, onBotClick } = this.props
		return (
			<div className="ui four column grid">
				<div className="row">
					{bots.map(bot => {
						return <BotCard 
							key={bot.id}
							bot={bot}
							onBotClick={onBotClick}
						/>
					})}
				</div>
			</div>
		);
	}

};

export default BotCollection;
