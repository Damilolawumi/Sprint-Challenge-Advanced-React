import Player from './Player'
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

// describe('<Player />', () => {
//     it('rendered the title', () => {
//         const wrapper = render(<Player player="player" />);
//         expect(wrapper.text()).to.contain('player');
//       });
//     });

describe('Player Component', () => {
  const mockPlayerData = { id: 0, name: 'Alex Morgan', country: 'United States', searches: '100' }


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Player player={mockPlayerData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('')
});