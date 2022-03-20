import React from 'react';
import {render , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewMenuItemForm from './NewMenuItemForm';
import SnackOrBoozeApi from './Api';


it('renders without crashing' , () => {
    render(<NewMenuItemForm />)
})

it('matches snapshot' , () => {
    const {asFragment} = render(<NewMenuItemForm />);
    expect(asFragment()).toMatchSnapshot();
})

it('should add a new drink' , function () {
    const{queryByText , getByTestId} = render(<NewMenuItemForm />);
    const itemName = getByTestId('itemName')
    const drinks = getByTestId('drinks');
    const description = getByTestId('description');
    const recipe = getByTestId('recipe');
    const serve = getByTestId('serve');
    const btn = queryByText('Submit Item')
    expect(itemName).toBeInTheDocument();
   
    fireEvent.change(itemName , {target : {value : 'test item'}})
    fireEvent.click(drinks)
    fireEvent.change(description , {target : {value : 'test description'}})
    fireEvent.change(recipe , {target : {value : 'test recipe'}})
    fireEvent.change(serve , {target : {value : 'test serve'}})
    fireEvent.click(btn);

    setTimeout( async () => {
        const res = await SnackOrBoozeApi.getDrinks();
        expect(res[res.lenght]).toEqual({
            'id': 'test item',
            'name' : 'test item',
            'description' : 'test description',
            'recipe' : 'test recipe',
            'serve' : 'test serve'
        } , 2000)
    })
})
