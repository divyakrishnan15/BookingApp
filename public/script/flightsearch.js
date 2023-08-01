async function searchFlight(event){
    event.preventDefault();
const origin=document.querySelector('#Origincity').value
const destination=document.querySelector('#Dest_city').value
const searchBtn = document.querySelector('#searchBtn')
const searchFlights = document.querySelector('#displayFlights')

const response= await fetch('api/findFlights',{
    method:'GET',
    body:JSON.stringify({
        origin,
        destination
    }),
    headers:{
        'Content-Type': 'application/json',
    }
})

if(response.ok){
    document.location.replace
}
}

