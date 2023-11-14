import { useState, useEffect } from 'react'

export default function TripList() {
  const [trips, setTrips] = useState([])

  useEffect(() => {

    fetch('http://localhost:4000/trips')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => setTrips(json))

  }, [])

  console.log(trips)

  

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      <ul>
        {
          trips.map((trip) => {
            return (
              <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
              </li>
              
            )
          })
        }
      </ul>
    </div>
  )
}
