import React from 'react';

const PlantDetails = ({ match }) => {
  const plantId = match.params.id;
  return (
    <div>
      <h1>Details zu Pflanze {plantId}</h1>
      <p>Hier erscheinen Informationen über die ausgewählte Pflanze.</p>
    </div>
  );
};

export default PlantDetails;
