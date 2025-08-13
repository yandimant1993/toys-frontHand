


// const { useState, useEffect, useRef } = React

import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service"

export function ToyFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const onSetFilterDebounce = useRef(utilService.debounce(onSetFilter, 300)).current

    useEffect(() => {
        onSetFilterDebounce(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function clearFilter() {
        const emptyFilter = { txt: '', maxPrice: '', inStock: '' }
        setFilterByToEdit(emptyFilter)
        onSetFilter(emptyFilter)
    }

    return (
        <section className="toy-filter">
            <h3 className="filter-title">🔍 Filter Toys</h3>
            <div className="filter-inputs">
                <input 
                    type="text"
                    id="name"
                    name="txt"
                    placeholder="Search by name..."
                    value={filterByToEdit.txt}
                    onChange={handleChange}
                    className="filter-input"
                />

                <input 
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    placeholder="Max price..."
                    value={filterByToEdit.maxPrice || ''}
                    onChange={handleChange}
                    className="filter-input"
                />

                <select
                    id="inStock"
                    name="inStock"
                    value={filterByToEdit.inStock || ''}
                    onChange={handleChange}
                    className="filter-select"
                >
                    <option value="">All items</option>
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                </select>

                <button onClick={clearFilter} style={{ padding: '10px 15px', background: '#ff6b6b', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    🗑️ Clear Filter
                </button>
            </div>
        </section>
    )
}