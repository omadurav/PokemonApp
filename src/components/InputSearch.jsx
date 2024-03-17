import { useState } from 'react'

export const InputSearch = ({ onAddPokemon }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onAddPokemon(inputValue.trim().toLowerCase());
        setInputValue('');
    }


    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder='Busca tus pokemom'
                value={inputValue}
                onChange={(event) => handleInputValue(event)}
            />
        </form>
    )
}
