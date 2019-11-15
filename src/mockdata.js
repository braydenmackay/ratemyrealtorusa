import React from "react"
import defaultPicture from "./image/default-profile.png"

const Mockdata = () => {
  return (
    <div className="top-rated-page">
      <div className="top-rated-container">
        <img className="top-rated-pic" src={defaultPicture} alt="Profile pic" />

        <div className="top-rated-info-container">
          <div className="top-rated-name-location">
            Brayden MacKay / Orem, UT.
          </div>
          <div className="top-rated-rating">5 Stars</div>

          {/* <div className="top-rated-link" key={results.id}>
                  <Link
                    to={{
                      pathname: `/view-realtor/:${results.id}`,
                      state: {
                        results
                      }
                    }}
                  >
                    Click here to see reviews
                  </Link>
                </div> */}
          <button>Click here to view reviews</button>
        </div>
      </div>

      <div className="top-rated-container">
        <img className="top-rated-pic" src={defaultPicture} alt="Profile pic" />

        <div className="top-rated-info-container">
          <div className="top-rated-name-location">
            Brayden MacKay / Orem, UT.
          </div>
          <div className="top-rated-rating">5 Stars</div>

          <button>Click here to view reviews</button>
        </div>
      </div>

      <div className="top-rated-container">
        <img className="top-rated-pic" src={defaultPicture} alt="Profile pic" />

        <div className="top-rated-info-container">
          <div className="top-rated-name-location">
            Brayden MacKay / Orem, UT.
          </div>
          <div className="top-rated-rating">5 Stars</div>

          <button>Click here to view reviews</button>
        </div>
      </div>
    </div>
  )
}

export default Mockdata
