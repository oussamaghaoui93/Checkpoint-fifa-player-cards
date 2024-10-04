import React, { useState, useEffect } from 'react';
import Teamobj from '../apifetchfifa';
import Team from './Team';
import Player from './Player';


const Playes = () => {
  const [realMadrid, setRealMadrid] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      const team = new Teamobj();
      await team.fetchData();  // Wait for the data to be fetched
      setRealMadrid(team);  // Set the team data in state
    };

    fetchTeamData();
  }, []);  // Empty dependency array to run only once when the component mounts

  // Don't try to access properties before data is available
  if (!realMadrid) {
    return <div>Loading...</div>;
  }

  return (

    <div>
      <Team team_name={realMadrid.team_name} team_country={realMadrid.team_country} team_founded={realMadrid.team_founded} team_badge={realMadrid.team_badge}   ></Team>
      <h3>Players:</h3>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

        {realMadrid.players.map(player => (
          <Player player_name={player.player_name} player_number={player.player_number} player_age={player.player_age} player_type={player.player_type} player_match_played={player.player_match_played} player_image={player.player_image}  ></Player>

          // <li key={player.player_key}>
          //   <img src={player.player_image} alt={player.player_name} width="50" />
          //   <p>Name: {player.player_name}</p>
          //   <p>Position: {player.player_type}</p>
          //   <p>Age: {player.player_age}</p>
          //   <p>Matches Played: {player.player_match_played}</p>
          //   <p>Goals: {player.player_goals}</p>
          // </li>
        ))}
      </div>
    </div >
  );
}

export default Playes;
