import React from "react";
import CredlyBadge from "../elements/CredlyBadge";
import Resume from "../../resume.json";

function buildBadges(certificates) {
  let credlyBadges = [];
  certificates.forEach((cert, index) => {
    credlyBadges.push(
      <div key={index} className="column is-3 has-text-centered">
        <div className="certificate-card">
          <CredlyBadge
            width="120"
            height="120"
            imageId={cert.x_imageId}
            imageName={cert.x_imageName}
            badgeId={cert.x_badgeId}
            badgeName={cert.name + " by " + cert.issuer}
            certificateUrl={cert.url}
          />
          <h3 className="certificate-title">{cert.name}</h3>
          <p className="certificate-issuer">{cert.issuer}</p>
        </div>
      </div>
    );
  });
  return credlyBadges;
}

function Certifications(props) {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <h1 className="title terminal-text text-glow has-text-centered">Certifications & Achievements</h1>
        <div className="columns is-centered">
          {buildBadges(Resume.certificates)}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
