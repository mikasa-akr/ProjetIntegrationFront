import React, { useState, useEffect } from 'react';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';



const AdminLogin = () => {

    const [restaurateurs, setRestaurateurs] = useState([]);

    const [error, setError] = useState(null);



    useEffect(() => {

        axios.get('http://localhost:8080/api/restaurateurs')

            .then(response => {

                setRestaurateurs(response.data);

            })

            .catch(error => {

                console.error('Erreur lors de la récupération des données:', error);

                setError(error.message || 'Une erreur s\'est produite.');

            });

    }, []);



    if (error) {

        return <div>Erreur: {error}</div>;

    }



    return (

        <div>

            <h1>Liste des Restaurateurs</h1>

            <table className="table table-hover">

                <thead>

                    <tr>

                        <th scope="col">#</th>

                        <th scope="col">Nom</th>

                        <th scope="col">Prénom</th>

                        <th scope="col">Email</th>

                    </tr>

                </thead>

                <tbody>

                    {restaurateurs.map((restaurateur, index) => (

                        <tr key={restaurateur.id}>

                            <th scope="row">{index + 1}</th>

                            <td>{restaurateur.nom}</td>

                            <td>{restaurateur.prenom}</td>

                            <td>{restaurateur.email}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

};



export default AdminLogin;
