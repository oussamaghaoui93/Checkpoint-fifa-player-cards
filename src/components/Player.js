import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ player_image, player_name, player_number, player_type, player_match_played, player_age }) => {
    return (
        <Card style={{ width: '18rem', margin: '1%' }}>
            <Card.Img variant="top" src={player_image} />
            <Card.Body>
                <Card.Title>{player_name}</Card.Title>
                <Card.Text>
                    <strong>Age:</strong> {player_age} <br />
                    <strong>Jersey Number:</strong> {player_number} <br />
                    <strong>Position:</strong> {player_type} <br />
                    <strong>Matches Played:</strong> {player_match_played}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    player_name: 'Unknown Player',
    player_number: 0,
    player_age: 0,
    player_type: 'Unknown Position',
    player_match_played: 0,
    player_image: 'https://apiv3.apifootball.com/badges/players/29319_j-musso.jpg'
};

export default Player