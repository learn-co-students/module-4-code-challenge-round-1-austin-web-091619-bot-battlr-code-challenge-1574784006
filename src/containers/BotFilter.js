import React from 'react'

const BotFilter = (props)=> {
    return (
        <div style={{marginBottom: 10}} >
            Bot type:
            <select onChange={props.handleFilterChange} value={props.filter}>
                <option value="All">All</option>
                <option value="Assault">Assault</option>
                <option value="Defender">Defender</option>
                <option value="Support">Support</option>
            </select>
            Sort by:
            <label>Health</label>
            <input type={"checkbox"} onChange={props.handleSortChange} checked={props.sort==='health'} value={'health'}/>
            <label>Damage</label>
            <input type={"checkbox"} onChange={props.handleSortChange} checked={props.sort==='damage'} value={'damage'}/>
            <label>Armor</label>
            <input type={"checkbox"} onChange={props.handleSortChange} checked={props.sort==='armor'} value={'armor'}/>
            <label>Summed Stats</label>
            <input type={"checkbox"} onChange={props.handleSortChange} checked={props.sort==='sum'} value={'sum'}/>

        </div>
    )

}

export default BotFilter