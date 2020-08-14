import React from 'react';
import PlayerCard from './PlayerCard';
import {connect} from 'react-redux'



const PlayerStateToProps = state => {
  return { players: state.players };
};

const PlayerListConnect = ({players}) => {
    
  const displayPlayers = () => {
    return Object.keys(players).map(key => (
      <PlayerCard key={players[key].id} player={players[key]} />
    ));
  
  }
    return (
      <div className='row'>
        {displayPlayers()}
      </div>
    );
  
  }
  const PlayerList = connect(PlayerStateToProps)(PlayerListConnect);

export default PlayerList;

/* Nouvelle facon avec hook :  */
/* import React from 'react';
import PlayerCard from './PlayerCard';
import {useSelector} from 'react-redux'

const PlayerList = () => {
  const players = useSelector((state)=>state.players)
    
  const displayPlayers = () => {
    return Object.keys(players).map(key => (
      <PlayerCard key={players[key].id} player={players[key]} />
    ));
  }
    return (
      <div className='row'>
        {displayPlayers()}
      </div>
    );
  
  }
export default PlayerList; */