const React = require('react');
const Layout = require('./Layout');

function Edit({ login, edit }) {
  return (
    <Layout login={login}>
      <script defer src="/client/update.js" />
      <form action={`/profile/${edit.id}/update`} method="POST" className="editForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={edit.name} />
        <br />
        <label htmlFor="place">Place:</label>
        <input type="text" id="place" name="place" value={edit.place} />
        <br />
        <label htmlFor="type">Type:</label>
        <input type="text" id="type" name="type" value={edit.type} />
        <br />
        <label htmlFor="averagePrice in USD">Average Price:</label>
        <input type="text" id="averagePrice" name="averagePrice" value={edit.avg} />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="10" value={edit.description}></textarea>
        <br />
        <label htmlFor="pictureLink">Picture Link:</label>
        <input type="url" id="pictureLink" name="pictureLink" value={edit.picture} />
        <br />
        <label htmlFor="mapPoint">Map Point:</label>
        <input type="text" id="mapPoint" name="mapPoint" value={edit.map} />
        <br />
        <br />
        <label htmlFor="mapPoint">Map Point:</label>
        <input type="hidden" id="idforUpdate" name="id" value={edit.id} />
        <br />
        <button type="submit" className="btn btn-primary">
          Edit review
        </button>
      </form>
    </Layout>
  );
}

module.exports = Edit;
