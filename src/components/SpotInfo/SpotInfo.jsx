
import { FaStar } from "react-icons/fa";
import "./SpotInfo.css";

const SpotInfo= ({ spotDetails  }) => {
const {   
    Owner, SpotImages,
    avgStarRating, city, country, description,
    name, numReviews, price,
    state} = spotDetails 


    const handleClick = () => {
        alert('Feature Coming Soon...')
    }

    return (
   <div className="page">
        <h2 className="spot-title">{name}</h2>
        <p className="spot-location">
           {city}, {state}, {country} 
        </p>
        <div className="spot-images">
          {SpotImages
          .sort((a, b) => b.preview - a.preview)
          .map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              className={index === 0 ? 'large-image' : 'small-image'} 
            
            />
          ))}
        </div>
        <div className="details-callout-wrapper">
        <div className="details-container">
          <div className="details-text">
            <h2 className="spot-host">
                Hosted by {Owner.firstName} {Owner.lastName} 
            </h2>
           <p className="spot-description">{description}</p>
          </div>
          </div>
          <div className="callout-container">
              <div className="callout-text">
                <span className="callout-price">${price} night</span> 
                <p className="callout-rating">
                  <FaStar />
                  {avgStarRating
                    ? avgStarRating.toFixed(1)
                    : "New"}{" "}
                  {numReviews ? "・" + numReviews : ""}{" "}
                  {numReviews === 0 ? "" : numReviews > 1 ? "reviews" : "review"}
                </p>
              </div>
              <div className="button-container">
                <button className="button" onClick={handleClick}>
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SpotInfo;