import React, { Component } from 'react';
import List from './List.jsx';

class FilteredList extends Component {
    render() {
        const filteredItems = this.props.items.filter(
            item => item.type === "Fruit"
        );

        return (
            <List items={filteredItems} />
        );
    }
}

export default FilteredList;