import React from 'react';
import Axios from 'axios';
import Player from './Player';

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
      <div>
        {
          this.state.players.map(player => {
            return <div>
              <Player player={player}/>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;

