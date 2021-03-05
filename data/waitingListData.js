// array of ojects for waiting list
const waitingList = [
    {
        guestName: "Frank Coppola",
        numberOfGuests: 4,
        checkinTime: 2000,
        waiting: true,
    },
    {
        guestName: "Nina Simone",
        numberOfGuests: 1,
        checkinTime: 2300,
        waiting: true,
    },
    {
        guestName: "Idris Elba",
        numberOfGuests: 8,
        checkinTime: 1700,
        waiting: true,
    },
    {
        guestName: "Sherman Alexi",
        numberOfGuests: 6,
        checkinTime: 1400,
        waiting: true,
    },
];

const takingTables = () => {
    if(waitingList.length > 25){
        console.log('we are no longer taking names on the waiting list')
    }
    else{console.log(`There are ${waitingList.length} tables ahead of you.`)}
}

module.exports = waitingList;