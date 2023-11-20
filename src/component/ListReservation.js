// ListReservation.jsx
import React, { useEffect, useState } from 'react';

const ListReservation = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/reservation/reservations', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('user:resto'),
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Vérifiez si la propriété 'content' existe dans la réponse JSON
        const reservations = data.content || [];
  
        setReservations(reservations);
      })
      .catch(error => console.error('Error retrieving reservations:', error));
  }, []);

  return (
    <div>
      <h2>Liste des réservations</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date de réservation</th>
            <th>Nombre de personnes</th>
            <th>restaurant</th>
            <th>client_id</th>
            <th>restauration_id</th>
            {/* Ajoutez d'autres colonnes en fonction de vos données */}
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.date}</td>
              <td>{reservation.nb_personne}</td>
              <td>{reservation.restaurant}</td>
              <td>{reservation.client_id}</td>
              <td>{reservation.restauration_id}</td>
              {/* Ajoutez d'autres cellules en fonction de vos données */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListReservation;