import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Mockdata from "./mockdata"
import Footer from "./footer"

const Home = () => {
  const [first, setFirst] = React.useState("")
  const [last, setLast] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [textOne, setTextOne] = React.useState("COMING TO YOUR STATE SOON!")
  const [textTwo, setTextTwo] = React.useState("SIGN UP TO LEAVE A REVIEW!")

  const handleOnClick = e => {
    e.preventDefault()
    axios
      .post("https://haunted-moonlight-21086.herokuapp.com/email", {
        first: first,
        last: last,
        email: email
      })
      .then(response => {
        setFirst("")
        setLast("")
        setEmail("")
        setTextOne("Thank You for signing up!")
        setTextTwo(
          "You will be notified by email when you can begin leaving reviews."
        )
      })
      .catch(error => console.log("handleOnClick error", error))
  }

  return (
    <div className="home-page">
      <div className="heading-text">
        <div>America's site for </div>
        <div className="authentic"> AUTHENTIC </div>
        <div> realtor reviews</div>
      </div>
      <div className="links-wrapper">
        <div className="leave-rating">
          <Link to="/leave-rating">Leave a Rating</Link>
        </div>

        <div className="see-top-rated">
          <Link to="/top-rated">See Top Rated Realtors</Link>
        </div>
      </div>

      <div className="body-text">
        <h1>{textOne}</h1>
        <h2>{textTwo}</h2>
      </div>

      <div className="sign-up-form">
        <form onSubmit={handleOnClick}>
          <div className="sign-up-grid">
            <p>Full Name</p>
            <div className="home-page-grid-two-column">
              <input
                onChange={event => setFirst(event.target.value)}
                className="home-page-name"
                type="text"
                placeholder="First"
                value={first}
                required
              />
              <input
                onChange={event => setLast(event.target.value)}
                className="home-page-name"
                type="text"
                placeholder="Last"
                value={last}
                required
              />
            </div>
            <p>Email</p>
            <input
              onChange={event => setEmail(event.target.value)}
              className="home-page-email"
              placeholder="someone@example.com"
              type="email"
              value={email}
              required
            />
            <button className="sign-up-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <Mockdata />
      <Footer />
    </div>
  )
}
export default Home
