import React from "react";
import "../css/ExperienceItem.css";

export default function ExperienceItem({ item, direction }) {
  return (
    <div className={"experience-item-" + direction}>
      <div className="position">
        {item.position} @ {item.place}
      </div>
      <div className="duration">
        {item.start} ~ {item.end}
      </div>
      <ul className="description">
        {item.description.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}
