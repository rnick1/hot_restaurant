//array of objects for reservations

const reservations = [
    {
        guestName:"Mr. Lichebo",
        numberOfGuests: 4,
        time24hr: 1600,
        waiting: true,
    },
    {
        guestName:"Ms. Nguyen",
        numberOfGuests: 6,
        time24hr: 1800,
        waiting: true,
    },
    {
        guestName:"Anh Tram",
        numberOfGuests: 2,
        time24hr: 1400,
        waiting: true,
    },
    {
        guestName:"Juana Ixcoy",
        numberOfGuests: 10,
        time24hr: 1400,
        waiting: true,
    }
];

const availability = () => {
    if (reservations.length >= 12){
        console.log("We are fully booked")
    }
    else {
        console.log("We are open for reservations")
    } 
}
