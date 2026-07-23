import React from 'react';

function List({ items }) {
    return (
        <div>
            <h2>Produce List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.type}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;