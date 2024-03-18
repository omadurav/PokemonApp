import { useState } from 'react'

export const InputSearch = ({ onAddPokemon }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onAddPokemon(inputValue.trim().toLowerCase());
        setInputValue('');
    }


    return (
        <form className='w-1/2 mx-auto' onSubmit={(event) => onSubmit(event)}>
            <input
                className='border border-gray-300 w-full px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400'
                type="text"
                placeholder='Busca tus pokemòn...'
                value={inputValue}
                onChange={(event) => handleInputValue(event)}
            />
        </form>
    )
}
