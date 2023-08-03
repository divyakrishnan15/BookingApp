async function TicketBooking(event){
    event.preventDefault();
    

    
const response= await fetch('api/findFlights',{
    method:'POST',
    body:JSON.stringify({
        Customer_name,
        gender,
        DOB,
        Phonenumber,
        Email,
        Class,
        ticket_no
    }),
    headers:{
        'Content-Type': 'application/json',
    }
})


    ticket_no=Math.floor(Math.random() * (4000 - 3500 + 1) + 3500)


if(response.ok){
    document.location.replace('/payments');
}
else {
    alert('Failed to search flights');
}
}

document.querySelector('#TicketInfo').addEventListener('submit',TicketBooking );
