import React from "react";
let index=0;

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        <div
          className={`timelineItem ${(index++) % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
        >
          <div>
            <h2>Bachelor of Technology</h2>
            <h4>NIT Hamirpur</h4>
            <p>July 2019 - June 2023</p>
            <h3>Electrical Engineering</h3>
            <p>CGPI: 7.53</p>
          </div>
        </div>
        <div
          className={`timelineItem ${(index++) % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
        >
          <div>
            <h2>Senior Secondary Education</h2>
            <h4>Raja Ram Sah College, Raxaul</h4>
            <p>April 2016 - April 2018</p>
            <h3>Science(PCM)</h3>
            <p>Percentage: 81.8%</p>
          </div>
        </div>
        <div
          className={`timelineItem ${(index++) % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
        >
          <div>
            <h2>Secondary Education</h2>
            <h4>Nathuni Durga High School, Purandra Bhelahi</h4>
            <p>March 2014 - April 2016</p>
            <p>Science, Maths, S. Science, Hindi, English, Sanskrit</p>
            <p>Percentage: 76.6%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// const TimelineItem = ({ heading, text, index }) => (
//   <div
//     className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"
//       }`}
//   >
//     <div>
//       <h2>{heading}</h2>
//       <p>{text}</p>
//     </div>
//   </div>
// );

export default Timeline;
