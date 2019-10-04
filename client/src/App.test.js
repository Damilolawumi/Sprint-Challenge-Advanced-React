import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Player from './Player';
import useLocalStorage from './useLocalStorage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// it('useLocalStorage Component renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<useLocalStorage />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('useDarkMode Component renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<useDarkMode/>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('NavBar Component renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<NavBar/>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });



// jest.mock('axios', () => {
//   return {
//     get: () => {
//       return Promise.resolve({
//         data: [
//           { id: 0, name: 'Alex Morgan', country: 'United States', searches: '100' }
//         ],
//       });
//     },
//   };
// });

// beforeEach(() => {
//   rtl.cleanup();
//   player = rtl.render(<Player player={player} />);
// });
// describe('App Component', () => {
//   it('can render a players list that comes from api', () => {
//     const elementWithPlayer = player.queryByText(/name/);
//     expect(elementWithPlayer).toBeInTheDocument();
//   });
// });

