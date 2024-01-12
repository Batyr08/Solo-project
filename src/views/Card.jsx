const React = require('react');

function CardMain({
  reviewId,
  nameId,
  placeId,
  typeId,
  avgId,
  descriptionId,
  pictureId,
  mapId,
  login
}) {
  return (
    <div className="card-main">
      <div className="card-body-main">
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

      <div id="ymap" className="ymap">
        <script src="https://api-maps.yandex.ru/2.1/?apikey=3a9895ca-9810-4abe-886a-271245cc4612&lang=ru_RU" />
        <script src="/api/yandex.js"></script>
      </div>
      <div className="comment-section">
        <input type="text" name="comment" placeholder="Leave comment"></input>
      </div>
      {login ? (
        <button type="button" className="btn btn-primary" id={reviewId.toString()}>
          Add comment
        </button>
      ) : (
        <p>Please log in to add a comment.</p>
      )}
    </div>
  );
}

module.exports = CardMain;
