import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../components/Profile";
import { Container } from "react-bootstrap";

const GitHubProfile = () => {
  // Déclaration de l'état pour stocker les données du profil
  const [profileData, setProfileData] = useState(null);

  // Utilisation du hook useEffect pour effectuer une opération après le rendu du composant
  useEffect(() => {
    // Définition d'une fonction asynchrone pour récupérer les données du profil
    const fetchProfile = async () => {
      try {
        // Requête GET à l'API GitHub pour obtenir les données du profil utilisateur
        const response = await axios.get(
          "https://api.github.com/users/github-john-doe"
        );
        // Mise à jour de l'état avec les données du profil récupérées
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching the profile data", error);
      }
    };

    fetchProfile();
  }, []); // Le tableau vide indique que ce useEffect se déclenche seulement après le premier rendu du composant

  return (
    <Container className="py-5">
      <h1 className="text-center">GitHub Profile</h1>
      <div
        className="border-bottom border-primary mb-4"
        style={{ width: "20%", height: "4px", margin: "0 auto" }}
      ></div>
      {profileData ? <Profile profile={profileData} /> : <p>Loading...</p>}
    </Container>
  );
};

export default GitHubProfile;
