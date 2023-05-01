import { useState } from "react";

function App() {
  //STATE
  const [parkingSpots, setParkingSpots] = useState ([
    {id: 1, nom: "Emplacement 1"},
    {id: 2, nom: "Emplacement 2"},
    {id: 3, nom: "Emplacement 3"},
    {id: 4, nom: "Emplacement 4"},
    {id: 5, nom: "Emplacement 5"},
    {id: 6, nom: "Emplacement 6"},
    {id: 7, nom: "Emplacement 7"},
    {id: 8, nom: "Emplacement 8"},
    {id: 9, nom: "Emplacement 9"},
    {id: 10, nom: "Emplacement 10"}
  ]);

  const [leaveParkingSpot, setLeaveParkingSpot] = useState("")

  //COMPORTEMENTS
  const handleDelete = (id: any) => {
    console.log(id);
    const availableParkingSpots = [...parkingSpots];
    const availableParkingSpotsUpdated = availableParkingSpots.filter(parkingSpot => parkingSpot.id !== id)
    setParkingSpots(availableParkingSpotsUpdated)
  }

  const handleTicket = (min: any, max: any) => {
    alert (Math.floor(Math.random() * (max - min + 1)) + min);
  }
  //HandleSubmit devrait normalement permettre de générer un nouvel "id" et récupérer la valeur que l'on rend dans le formulaire afin de remettre en place la place de parking.
  //Je n'ai pas trouver pourquoi cette partie ne fonctionne pas alors qu'elle est identique à un test fonctionnel réalisé en amont.
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const parkingSpotCopy = [...parkingSpots];

    const id = new Date().getTime();
    const nom = leaveParkingSpot;
    parkingSpotsCopy.push({id: id, nom: nom});

    setParkingSpots(parkingSpotsCopy);
    setLeaveParkingSpot("");
  };

  const handleChange = (event:any)=> {
    const valueAfterChange = event.target.value;
    console.log(valueAfterChange);
    setLeaveParkingSpot(valueAfterChange);
  };

  //AFFICHAGE
  return (
    <div className="App">
      <div>
        <h1>Parking App</h1>
      </div>
      <div>
        <h2>Tickets Delivery !</h2>
        <button onClick={() => handleTicket(1, 10)}> Get a Ticket number!</button>
      </div>
      <div>
        <h2>Parking Spots !</h2>
        <ul>
          {parkingSpots.map((parkingSpot) =>(
            <li key={parkingSpot.id}>{parkingSpot.nom}<button onClick={() => handleDelete(parkingSpot.id)}> Get parked !</button></li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Leave the parking !</h2>
        <form action="submit" onSubmit={handleSubmit}>
          <input value={leaveParkingSpot} type="text" placeholder="Spot number" onChange={handleChange}/>
          <button>Leave the spot !</button>
        </form>
      </div>
    </div>
    
  );
}
export default App;