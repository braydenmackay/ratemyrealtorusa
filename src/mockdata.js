import React from "react"
import defaultPicture from "./image/default-profile.png"

const Mockdata = () => {
  return (
    <div className="top-rated-page">
      <div className="top-rated-container">
        <img className="top-rated-pic" src={defaultPicture} alt="Profile pic" />

        <div className="top-rated-info-container">
          <div className="top-rated-name-location">
            Scott M / Salt Lake, UT.
          </div>
          <div className="top-rated-brokerage">Brokerage: KW</div>
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
          <p>
            Scott is an absolute professional. He knows all of his stuff and has
            been very helpful. You get the sense that you're going to be taken
            care of right away when you meet him. He really goes above and
            beyond to help his clients.
          </p>
        </div>
      </div>

      <div className="top-rated-container">
        <img className="top-rated-pic" src={defaultPicture} alt="Profile pic" />

        <div className="top-rated-info-container">
          <div className="top-rated-name-location">
            Chris Mitchell / Orem, UT.
          </div>
          <div className="top-rated-brokerage">Brokerage: Best Home Realty</div>
          <div className="top-rated-rating">4 Stars</div>

          <p>
            Chris was good to work with. At times a little abrasive. But he did
            good work for us on our new home search and was very helpful in
            negotiations.
          </p>
        </div>
      </div>

      <div className="top-rated-container">
        <img className="top-rated-pic" src={defaultPicture} alt="Profile pic" />

        <div className="top-rated-info-container">
          <div className="top-rated-name-location">
            Gina Backalski / Provo, UT.
          </div>
          <div className="top-rated-brokerage">
            Brokerage: Better Homes Real Estate
          </div>
          <div className="top-rated-rating">1 Star</div>

          <p>
            Worked with Gina for a few weeks. She was very pushy. In order to
            get the deal worked out, she was going to have to lower her
            comission. Because of this she tried really hard to push her client
            to a different home. A good realtor should have their clients best
            interest at heart, not their own!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mockdata
