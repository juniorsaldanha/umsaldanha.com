import React from "react";
import Resume from "../../resume.json";

function Timeline() {
  return (
    <div className="timeline">
      {Resume.work.map((item, index) => {
        const startDate = new Date(item.startDate);
        const endDate = item.endDate ? new Date(item.endDate) : null;
        const duration = endDate 
          ? `${startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
          : `${startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - Present`;
        
        return (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-company terminal-text">{item.company}</h3>
                  <span className="timeline-position">{item.position}</span>
                  <span className="timeline-duration">{duration}</span>
                </div>
                <p className="timeline-summary">{item.summary}</p>
                {item.website && (
                  <a href={item.website} target="_blank" rel="noopener noreferrer" className="timeline-link">
                    <i className="fas fa-external-link-alt"></i> Visit Website
                  </a>
                )}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="timeline-highlights">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
