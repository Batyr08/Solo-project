const React = require("react");
const Layout = require("./Layout");

function Review({ login }) {
    return (
      <Layout login={login}>
         <script defer src="./client/create.js" />
        <form action="/addreview" method="POST" className="createForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="place">Place:</label>
          <input type="text" id="place" name="place" required />
          <br />
          <label htmlFor="type">Type:</label>
          <input type="text" id="type" name="type" required />
          <br />
          <label htmlFor="averagePrice in USD">Average Price:</label>
          <input type="text" id="averagePrice" name="averagePrice" required />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="10" required></textarea>
          <br />
          <label htmlFor="pictureLink">Picture Link:</label>
          <input type="url" id="pictureLink" name="pictureLink" required />
          <br />
          <label htmlFor="mapPoint">Map Point:</label>
          <input type="text" id="mapPoint" name="mapPoint" required />
          <br />
          <button type="submit">Submit</button>
        </form>
      </Layout>
    );
}

module.exports = Review;
