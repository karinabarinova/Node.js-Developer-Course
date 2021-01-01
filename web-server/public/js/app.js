//browser HTTP requests with fetch

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault(); //prevents instant page refreshing
    const location = search.value;
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(data.error);
            }
            console.log(data.location, data.forecast, data.address);
        })
    })
})