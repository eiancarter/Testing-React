// import React from 'react';
// import * as rtl from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import StarWarsCharacters from './StarWarsCharacters';
// afterEach(rtl.cleanup);

// // const help = require('./StarWarsCharacters');
// // jest.useFakeTimers();
 
// describe('effect returns list of characters', () => {
//     it('eventually returns next character after clicking button' , async () => {
//         const wrapper = rtl.render(<StarWarsCharacters />);
//         const button = wrapper.getTestById('previousbutton');
//         expect(wrapper.queryByText(/success/i)).not.toBeInTheDocument();
//         rtl.fireEvent.click(button);
//         expect(await wrapper.findByText(/success/i)); 
//     })
//     it('eventually returns previous character after clicking button' , async () => {
//         // const spy = jest.fn();
//         // expect(spy).not.toBeCalled();
//         // const promise = help.getCharacters(spy);
//         // jest.runAllTimers();
//         // await promise;
//         // expect(spy).toBeCalled();
//     })
// })

import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";

test('renders "success" text', () => {
  const { getByText, findByText } = render(<StarWarsCharacters />);
  console.log(getByText);
  // Click button
  act(() => {
    fireEvent.click(getByText("Previous"));
  });
  act(() => {
    fireEvent.click(getByText("Next"));
  });
  // Wait for page to update with query text
  findByText(/success/i);
});