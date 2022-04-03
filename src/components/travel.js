import React from "react";

function Travel(props) {
  return (
    <div className="travel_row">
      <div className="travel_image">
        <img src={props.item.imageUrl} className="sight" alt="" />
      </div>
      <div className="travel_details">
        <div className="location">
          <img src="/map_icon.png" alt="" className="location_icon" />
          <h5>{props.item.location.toUpperCase()}</h5>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.item.title}</h2>
        <h3>
          {props.item.startDate} - {props.item.endDate}
        </h3>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

export default Travel;
