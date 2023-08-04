async function searchFlight(event){
    event.preventDefault();
const origin=document.querySelector('#Origincity').value
const destination=document.querySelector('#Dest_city').value

console.log('log before call')
const response= await fetch('/api/flights/',{
    method:'POST',
    body:JSON.stringify({
        "origin":origin,
        "destination":destination
    }),
    headers:{
        'Content-Type': 'application/json',
    }
})

if(response.ok){
    document.location.replace('/flightsList');
}
else {
    alert('Failed to search flights');
}
}

document.querySelector('.search_flight').addEventListener('submit',searchFlight );
