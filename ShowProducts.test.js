import React from 'react'
import { render ,screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShowProducts from './ShowProducts';

test('renders lots of products message', () => {
    const { getByText } = render(<ShowProducts category={"fruit"}/>)
    expect(getByText('There are many products in this category')).toBeInTheDocument()
})

test('renders lots of products message', () => { 
  const { container } = render(<ShowProducts category={"sweets"}/>)
  expect(screen.queryByText('There are many products in this category')).toBeNull()
})
 
test('count equals to li in the dom', () => { 
  const { container } = render(<ShowProducts category={"vegetables"}/>);
  const count=ShowProducts.count;
  expect(container.querySelectorAll("li").length===count);
});

test('Hide expensive items', () => {
  const { getByText, container } = render(<ShowProducts category={"sweets"}/>);
  fireEvent.click(getByText("Hide expensive items"));
  const count = ShowProducts.count;
  expect(container.querySelectorAll("li").length === count);
});

