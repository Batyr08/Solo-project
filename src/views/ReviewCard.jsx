const React = require('react');

function Card({ reviewId, nameId, placeId, typeId, avgId, descriptionId, pictureId, mapId }) {
  return (
    <div className="card">
      <div className="card-body">
        <img className="img-body" src={pictureId} alt={`Image for ${nameId}`} />
        <p className="card-title">Name: {nameId}</p>
        <p className="card-text">Description: {descriptionId}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Place: {placeId}</li>
        <li className="list-group-item">Activity type: {typeId}</li>
        <li className="list-group-item">Average price: {avgId}</li>
        <li className="list-group-item">Map point: {mapId}</li>
      </ul>
      <a href={`/profile/${reviewId}/delete`} className="btn btn-danger">
        Delete review
      </a>
      <a href={`/profile/${reviewId}/edit`} className="btn btn-secondary">
        Edit review
      </a>
    </div>
  );
}

module.exports = Card;
