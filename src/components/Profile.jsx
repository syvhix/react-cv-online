import React from "react";

const Profile = ({ profile }) => {
  return (
    <div className="profile">
      {/* Affichage de l'avatar de l'utilisateur avec une taille et un style arrondi */}
      <img
        src={profile.avatar_url}
        alt="Avatar"
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <p>
        <strong>Followers:</strong> {profile.followers}
      </p>
      <p>
        <strong>Following:</strong> {profile.following}
      </p>
      <p>
        <strong>Public Repos:</strong> {profile.public_repos}
      </p>
      {/* Lien vers le profil GitHub de l'utilisateur */}
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        View Profile on GitHub
      </a>
    </div>
  );
};

export default Profile;
