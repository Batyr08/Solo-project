const React = require('react');
const Layout = require('./Layout');
const CardMain = require('./Card');

function Main({ login, reviews}) {
  return (
    <Layout login={login}>
      <script defer src="/client/comment.js" />
      <div className="main-container">
        <p className="welcome">Welcome</p>
      </div>
      <div className="main-cards">
        {reviews.length ? (
          reviews.map((review) => (
            <CardMain
              key={review.id}
              reviewId={review.id}
              nameId={review.name}
              placeId={review.place}
              typeId={review.type}
              avgId={review.avg}
              descriptionId={review.description}
              pictureId={review.picture}
              mapId={review.map}
              login = {login}
            />
          ))
        ) : (
          <p>There are no reviews yet</p>
        )}
      </div>
    </Layout>
  );
}

module.exports = Main;
