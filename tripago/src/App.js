import { useState } from 'react';
import './App.css'
import TripList from './components/TripList'

function App() {

  const [showTrips, setShowtrips] = useState(true);

  return (
    <div className="App">
      <button onClick = { () => setShowtrips(false)}>Hide trips</button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App
