import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/701710100.webp?k=0b8db7727d21902794c53c718e805c74a7f39822faa7d331be8ea3ee674a6ce6&o=" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Collection O Channasandra Metro Station Formerly Sri Krishna Nilaya</h1>
                <span className="siDistance">17.9 km from centre</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹ 1,417</span>
                    <span className="siTaxCharges">+₹ 238 taxes and charges</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem