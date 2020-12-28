// const square = num => num * num;

// const square2 = (num) => {
//     return num * num;
// }
// const divide = (a, b) => a / b;

// const divide2 = (a, b) => {
//     return a / b;
// }
// console.log(square(3));
// console.log(divide(4, 2));

const event = {
    name: 'Birthday party',
    guestList: ['Karina', 'Jane', 'Mike'],
    printGuestList () {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending the " + this.name + "\n");
        })
    }
}

event.printGuestList();
