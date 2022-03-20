import React , {useState} from 'react';
import {FormGroup} from 'reactstrap';
import createItem from './helpers';

const NewMenuItemForm = () => {
    const INITIAL_VALUE = {
        menu : '',
        itemName: '',
        recipe: '',
        serve: '',
        description: '',
        id : ''
    }
    const [formData , setFormData] = useState(INITIAL_VALUE);


    const handleChange = (e) => {
        const {name , value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createItem(formData);
        setFormData(INITIAL_VALUE);
    }
    return (
        <div className='radio'>
            <h2>Add a new snack or drink to our menu!</h2>
            <div>
        <form onSubmit = {handleSubmit}>
            <div className='radio'>
            <input type = 'radio' id='snacks' name='menu' value='snacks' onChange={handleChange} data-testid='snacks' />
            <label htmlFor='snacks' >Snack</label>
            <input type='radio' id='drinks' name='menu' value='drinks' onChange={handleChange} data-testid='drinks'  />
            <label htmlFor='drinks'>Drink</label>
            </div>
            <div>
            <label htmlFor='itemName'>Item Name</label>
            <input 
            id='itemName'
            type='text'
            name='itemName'
            placeholder='Item Name'
            value={formData.name}
            onChange={handleChange}
            className='input'
            data-testid='itemName'
            />
            </div>
            <div>
            <label htmlFor='description'>Description</label>
            <input 
            id='description'
            type='text'
            name='description'
            placeholder='Description'
            value={formData.description}
            onChange={handleChange}
            className='input'
            data-testid='description'
            />
            </div>
            <div>
            <label htmlFor='recipe'>Recipe</label>
            <input 
            id='recipe'
            type='text'
            name='recipe'
            placeholder='Recipe'
            value={formData.recipe}
            onChange={handleChange}
            className='input'
            data-testid='recipe'
            />
            </div>
            <div>
            <label htmlFor='serve'>Serving Instructions</label>
            <input 
            id='serve'
            type='text'
            name='serve'
            placeholder='Serving Instructions'
            value={formData.serve}
            onChange={handleChange}
            className='input'
            data-testid='serve'
            />
            </div>
            <button>Submit Item</button>
        </form>
        </div>
        </div>
    )
}


export default NewMenuItemForm;