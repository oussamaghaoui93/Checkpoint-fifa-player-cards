import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import React from 'react'

const Team = ({ team_name, team_country, team_founded, team_badge }) => {
    return (
        <div className="d-flex justify-content-center align-items-center "><MDBCard style={{ maxWidth: 'auto', display: 'flex' }}>
            <MDBRow className='g-0'>
                <MDBCol md='4'>
                    <MDBCardImage src={team_badge} alt='team logo' fluid />
                </MDBCol>
                <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle>{team_name}</MDBCardTitle>
                        <MDBCardText>
                            <strong>Team country:</strong> {team_country} <br />
                            <strong>Team founded:</strong> {team_founded} <br />

                        </MDBCardText>
                        <MDBCardText>
                            <small className='text-muted'>Last updated 3 mins ago</small>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard></div>
    )
}
Team.defaultProps = {
    team_name: 'Unknown team',
    team_country: 'Unknown',
    team_founded: 'Unknown',
    team_badge: 'https://apiv3.apifootball.com/badges/73_atletico-madrid.jpg'
};

export default Team