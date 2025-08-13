

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ToyFilter } from '../cmp/ToyFilter.jsx'
import { ToyList } from '../cmp/ToyList.jsx'
import { toyService } from '../services/toy.service.js'
import { loadToys, removeToy, saveToy, setFilterBy } from '../store/actions/toy.action.js'
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";

export function ToyIndex() {

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy) // default filter
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)

    useEffect(() => {
        loadToys()
            .catch(err => {
                showErrorMsg('Cannot load toys!')
            })
    }, [filterBy])

    function onSetFilter(filterBy) { // new filter the user picked
        setFilterBy(filterBy) // this function changes the filter
    }

    function onRemoveToy(toyId) {
        removeToy(toyId)
            .then(() => {
                showSuccessMsg('Toy removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove toy')
            })
    }

    function onAddToy() {
        const toyToSave = toyService.getRandomToy()
        console.log('toyToSave', toyToSave)
        saveToy(toyToSave)
            .then((savedToy) => {
                showSuccessMsg(`Toy added (id: ${savedToy._id})`)
            })
            .catch(err => {
                showErrorMsg('Cannot add toy')
            })
    }

    function onEditToy(toy) {
        const price = +prompt('New price?')
        const toyToSave = { ...toy, price }

        saveToy(toyToSave)
            .then((savedToy) => {
                showSuccessMsg(`Toy updated to price: $${savedToy.price}`)
            })
            .catch(err => {
                showErrorMsg('Cannot update toy')
            })
    }

    return (
        <div className="toys-app">
            <h3>🎮 Toys Store</h3>
            <main>
                <div className="app-controls">
                    <Link to="/toy/edit" className="add-toy-btn">➕ Add New Toy</Link>
                    <button className='random-toy-btn' onClick={onAddToy}>🎲 Add Random Toy</button>
                </div>
                <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                {!isLoading
                    ? <ToyList
                        toys={toys}
                        onRemoveToy={onRemoveToy}
                        onEditToy={onEditToy}
                    />
                    : <div className="loading">🔄 Loading toys...</div>
                }
            </main>
        </div>
    )
}