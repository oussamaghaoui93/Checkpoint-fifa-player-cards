class Team {
    constructor() {
        this.team_key = '';
        this.team_name = '';
        this.team_country = '';
        this.team_founded = '';
        this.team_badge = '';
        this.players = [];  // Initialize an empty array to store players
    }

    async fetchData() {
        const url = `https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=18cb1a08ab677441309a66a897557774b64996dbb5bc6d233e5a8c1b263b9b6a`;
        let dataapi = await fetch(url);

        if (dataapi.ok) {
            let data = await dataapi.json();

            this.team_key = data[1].team_key;
            this.team_name = data[1].team_name;
            this.team_country = data[1].team_country;
            this.team_founded = data[1].team_founded;
            this.team_badge = data[1].team_badge;

            // Assign the players array from the response
            this.players = data[1].players.map(player => ({
                player_image: player.player_image,
                player_name: player.player_name,
                player_complete_name: player.player_complete_name,
                player_number: player.player_number,
                player_type: player.player_type,
                player_age: player.player_age,
                player_match_played: player.player_match_played,
            }));
        }
    }
}

export default Team;
