import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Old Town, Poland, Kraków</span>
            <span className="fpPrice">Starting from <b>₹ 10, 391</b></span>
            <div className="fpRating">
              <button>8.8</button>
              <span>Fabulous</span>
            </div>
          </div>

          <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=" alt="" className="fpImg" />
            <span className="fpName">7Seasons Apartments Budapest</span>
            <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
            <span className="fpPrice">Starting from <b>₹ 10, 285</b></span>
            <div className="fpRating">
              <button>8.7</button>
              <span>Fabulous</span>
            </div>
          </div>

          <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/623712785.webp?k=a8deaff248465ca9f8e0e7fb66fc48eb934bb5359f1fab1892a578560aa7333b&o=" alt="" className="fpImg" />
            <span className="fpName">Midtown Apartments</span>
            <span className="fpCity">Eixample, Spain, Barcelona</span>
            <span className="fpPrice">Starting from <b>₹ 27, 047</b></span>
            <div className="fpRating">
              <button>9.4</button>
              <span>Superb</span>
            </div>
          </div>

          <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/559654140.webp?k=89e79aa75ec8a78c63c6f97559ec8f893de372401cdde1b4a2ef8fa1b2389631&o=" alt="" className="fpImg" />
            <span className="fpName">3 Epoques Apartments by Adrez</span>
            <span className="fpCity">Prague 1, Czech Republic, Prague</span>
            <span className="fpPrice">Starting from <b>₹ 7, 238</b></span>
            <div className="fpRating">
              <button>8.6</button>
              <span>Fabulous</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default FeaturedProperties