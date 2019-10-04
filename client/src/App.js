import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      players: [],
     }

     this.componentDidMount () {
       Axios.get('http://localhost:5000/api/players')
       .then((response) => {

        this.setState({
          players: response.data
        })
        console.log (response.data);
       })
     }
  }
  render() { 
    return ( 
      <div>
      </div>
     );
  }
}
 
export default App;

