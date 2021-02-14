import React, { useState } from 'react'

export const SearchGifs = ({onSearchCategoryGif, setNameCategory}) => {
    const [categoryInput, setCategoryInput] = useState("");

    const handleInputChange = (e) => {
        setCategoryInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(categoryInput.trim().length > 2){
          onSearchCategoryGif(categoryInput.trim());
          setNameCategory(categoryInput.trim());
          setCategoryInput('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
        <div className="row g-3 align-items-center search">
        <input 
            type = "text"
            value= {categoryInput}
            onChange = {handleInputChange} 
            placeholder="Write the category to search"
        />
        <button  className="btn btn-outline-primary" type="submit"> SEARCH GIF </button>
        </div>
        
        </form>
    )
}
