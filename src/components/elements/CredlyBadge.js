import React from "react";

function CredlyBadge(props) {
  // Use the actual certificate URL for both image and link if provided
  let imgSrc = props.certificateUrl || 
    "https://images.credly.com/size/" + props.width + "x" + props.height +
    "/images/" + props.imageId + "/" + props.imageName;
  
  let imgLink = props.certificateUrl || "https://www.credly.com/badges/" + props.badgeId + "/public_url";
  
  return (
    <figure className="is-inline-block image">
      <a href={imgLink} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={props.badgeName} />
      </a>
    </figure>
  );
}

export default CredlyBadge;
