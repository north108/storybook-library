// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import 'jsdom-global/register';
// import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, mount , configure} from 'enzyme';
import App from './App';

describe('A suite', () => {
  it('validate basic structure', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('a').text()).toEqual('Learn React');
  })
});

