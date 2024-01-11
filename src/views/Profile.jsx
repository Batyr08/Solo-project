  const React = require("react");
  const Layout = require("./Layout");
  const Card = require('./ReviewCard');
  

  function Profile({ login, userReview }) {
      return (
        <Layout login={login}>
          <script defer src="/client/delete.js" />
          <div className="profile-container">
            <h1 className="welcome-message">Welcome to the profile, {login}!</h1>
            <a href="/addreview" className="add-review-link">
              Add a Review
            </a>
          </div>
          <div className="cards">
          {userReview.length ? (
            userReview.map((userRevieww) => (
              <Card
                key={userRevieww.id}
                reviewId={userRevieww.id}
                nameId={userRevieww.name}
                placeId={userRevieww.place}
                typeId={userRevieww.type}
                avgId={userRevieww.avg}
                descriptionId={userRevieww.description}
                pictureId={userRevieww.picture}
                mapId={userRevieww.map}
              />
            ))
          ) : (
            <p>There are no reviews yet</p>
          )}
        </div>
        </Layout>
      );
    }

  module.exports = Profile;
