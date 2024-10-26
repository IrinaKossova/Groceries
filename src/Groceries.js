import React, { useState } from 'react';
import './Groceries.css';

const Groceries = () => {
    const [items, setItems] = useState([]);   
    const [item, setItem] = useState('');    
    const addItem = () => {
        if (item.trim()) {
        setItems([...items, item]);          
        setItem('');                         
        }
    };

const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
    };

return (
    <div>
    <h1>Groceries List</h1>
    <input 
        type="text" 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        placeholder="I should buy..." 
    />
    <button onClick={addItem}>Add Item</button>
    <ul>
        {items.map((t, index) => (
            <li key={index} onClick={() => removeItem(index)}>{t}</li>
        ))}
    </ul>
</div>
        );
};
    
export default Groceries;