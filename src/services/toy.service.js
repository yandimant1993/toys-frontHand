const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']


import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'

const STORAGE_KEY = 'toyDB'

_createToys()

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToys,
}

function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(toysId) {
    return storageService.get(STORAGE_KEY, toysId)
}

function remove(toysId) {
    return storageService.remove(STORAGE_KEY, toysId)
}

function save(toys) {
    if (toys._id) {
        return storageService.put(STORAGE_KEY, toys)
    } else {
        // when switching to backend - remove the next line
        toys.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, toys)
    }
}

function getEmptyToys() {
    return {
        _id: utilService.makeId(),
        name: '',
        imgUrl: '',
        price: utilService.getRandomIntInclusive(10, 100),
        labels: [],
        createdAt: Date.now(),
        inStock: true
    }
}


function _createToys() {
    const toys = utilService.loadFromStorage(STORAGE_KEY) || []
    if (toys.length > 0) return

   let toysArr = [
        {
            _id: 't101',
            name: 'Talking Doll',
            imgUrl: 'https://example.com/img/talking-doll.jpg',
            price: 123,
            labels: ['Doll', 'Battery Powered', 'Baby'],
            createdAt: 1631031801011,
            inStock: true
        },
        {
            _id: 't102',
            name: 'Race Toys',
            imgUrl: 'https://example.com/img/race-toys.jpg',
            price: 89,
            labels: ['On wheels', 'Battery Powered'],
            createdAt: 1642031801011,
            inStock: true
        },
        {
            _id: 't103',
            name: 'Wooden Puzzle',
            imgUrl: 'https://example.com/img/wooden-puzzle.jpg',
            price: 45,
            labels: ['Puzzle', 'Box game', 'Art'],
            createdAt: 1620031801011,
            inStock: false
        },
        {
            _id: 't104',
            name: 'Building Blocks',
            imgUrl: 'https://example.com/img/building-blocks.jpg',
            price: 59,
            labels: ['Box game', 'Baby'],
            createdAt: 1655031801011,
            inStock: true
        },
        {
            _id: 't105',
            name: 'Outdoor Swing',
            imgUrl: 'https://example.com/img/outdoor-swing.jpg',
            price: 199,
            labels: ['Outdoor', 'Baby'],
            createdAt: 1666031801011,
            inStock: true
        },
        {
            _id: 't106',
            name: 'Paint Set',
            imgUrl: 'https://example.com/img/paint-set.jpg',
            price: 39,
            labels: ['Art'],
            createdAt: 1638031801011,
            inStock: false
        },
        {
            _id: 't107',
            name: 'Robot Dog',
            imgUrl: 'https://example.com/img/robot-dog.jpg',
            price: 149,
            labels: ['Battery Powered', 'Doll'],
            createdAt: 1659031801011,
            inStock: true
        },
        {
            _id: 't108',
            name: 'Mini Skateboard',
            imgUrl: 'https://example.com/img/mini-skateboard.jpg',
            price: 75,
            labels: ['On wheels', 'Outdoor'],
            createdAt: 1612031801011,
            inStock: true
        },
        {
            _id: 't109',
            name: 'Puzzle Cube',
            imgUrl: 'https://example.com/img/puzzle-cube.jpg',
            price: 29,
            labels: ['Puzzle', 'Box game'],
            createdAt: 1648031801011,
            inStock: false
        },
        {
            _id: 't110',
            name: 'Stuffed Bear',
            imgUrl: 'https://example.com/img/stuffed-bear.jpg',
            price: 54,
            labels: ['Baby', 'Doll'],
            createdAt: 1609031801011,
            inStock: true
        }
    ]

    // for (var i = 0; i < 4; i++) {
    //     const toys = _createToy()
    storageService.post(STORAGE_KEY, toysArr)
}


// function _createToy() {
//     const toys = getEmptyToys()
//     toys._id = utilService.makeId()

//     return toys
// }


