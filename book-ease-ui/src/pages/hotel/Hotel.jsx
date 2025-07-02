import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faRestroom, faWifi } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {
  const images = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701710100.jpg?k=70776563ba751d73623cdf1ef9cc772cc75b5e6d9eef18a224377714779f65ca&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/701709873.jpg?k=51833510274be448354738e2209f0ffc1d0c45d250cec59ae1c01f59da464781&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701709975.jpg?k=f6c1b6f98ede0dec504c58d3e332aebad3e41da28d18fdf8f029dba21b3398fc&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701709447.jpg?k=97b136c003f7888a3b8705e213e648e1038096db372bf66cd5a75072f553248d&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701710208.jpg?k=8be0ea1d39ff21c97fbce876db7717d7e099d5b79922628737b4612e6e541a87&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701760673.jpg?k=8d371b930b2678db51c2b3d8b084c586d271100e95f55f05a3c48efa9d008119&o="
    }
  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now.!</button>
          <h1 className="hotelTitle">Collection O Channasandra Metro Station Formerly Sri Krishna Nilaya</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Plot No. 111/1, New Channasandra Extension, Bengaluru, India</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 5km from the center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹3,000 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {images.map(image => (
              <div className="hotelImgWrapper">
                <img src={image.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h2 className="hotelAbout">About this property</h2>
              <p className="hotelDesc">
                <b>Comfortable Accommodations:</b> Collection O Channasandra Metro Station Formerly Sri Krishna Nilaya in Bangalore offers family rooms with air-conditioning, private bathrooms, work desks, and free WiFi. Each room includes a TV, wardrobe, and tiled floors.
                <br></br>
                <br></br>
                <b>Convenient Facilities:</b> Guests enjoy a lounge, lift, 24-hour front desk, housekeeping, laundry, room service, and luggage storage. Free on-site parking is available.
                <br></br>
                <br></br>
                <b>Dining Options:</b> A continental breakfast is served daily.
                <br></br>
                <br></br>
                <b>Nearby Attractions:</b> Kempegowda International Airport is 38 km away. Nearby points include The Heritage Centre & Aerospace Museum (12 km), Commercial Street (20 km), and Bangalore Palace (24 km).
              </p>
            </div>
            <div className="hotelPrice">
              <h1>Perfect for a 2 night stay!</h1>
              <span>
                <b>Top location:</b> Highly rated by recent guests (10.0)
              </span>
              <h3>
                <b>₹ 2, 834</b> (2 nights)
              </h3>
              <span>
                Free parking available at the hotel
              </span>
              <button>
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel