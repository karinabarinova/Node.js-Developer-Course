//Object property shorthand

const name = 'Karina';
const userAge = 24;

const user = {
    name,
    age: userAge,
    location: 'Kyiv'
};

console.log(user);

//object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}
// const label = product.label;
// const price = product.price;

// const {label: productLabel, price, rating = 5} = product;
// console.log(productLabel);
// console.log(price);
// console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);



