import React from 'react';
import Axios from 'axios';
import Player from './Player';
import styled from 'styled-components';

const MainDiv = styled.div`
display: flex;
    flex-wrap: wrap;
`;

const Div = styled.div`
    box-shadow: 2px 1px 4px -1px;
    width: 220px;
    background: #f3f3d5;
    margin: 10px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/players')
      .then((response) => {

        this.setState({
          players: response.data
        })
        console.log(response.data);
      })

  }


  render() {
    return (
      <MainDiv>
        {
          this.state.players.map(player => {
            return <Div>
              <Player player={player} />
            </Div>
          })
        }
      </MainDiv>
    );
  }
}

export default App;

