const name = 'Collins'
const userAge = '36'

const user = {
    name: name,
    age: userAge,
    location: "Dallas"
}

const product = {
    label: 'red notebook',
    price: 3,
    stock: 200,
}


const transaction = (type, {label, stock}) => {
}
transaction('order', product)