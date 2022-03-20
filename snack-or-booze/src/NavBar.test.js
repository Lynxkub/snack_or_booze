import React from 'react';
import {render , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {MemoryRouter} from 'react-router-dom';
import NavBar from './NavBar'



test('NavBar renders without crashing' , () => {
    const {getByText} = render(
        <MemoryRouter initialEntries={['/']}>
            <NavBar />
        </MemoryRouter>
    );
    const snackLink = getByText('Snacks-');
    expect(snackLink).toBeInTheDocument();
    
})

test('app renders without crashing and can navigate to the snacks page' , async () => {

    const {getByText} = render((
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    ))
    setTimeout(() => {
        const link = getByText('Snacks-');
    fireEvent.click(link);
    expect(getByText('Nachos')).toBeInTheDocument();
    } , 2000)
   
    
})


test('app renders without crashing and can navigate to the drinks page' , async () => {

    const {getByText} =  render((
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    ))
    setTimeout(() => {
        const link = getByText('Drinks-');
    fireEvent.click(link);
    expect(getByText('Chocolate Milk')).toBeInTheDocument();
    } , 2000)
   
    
})