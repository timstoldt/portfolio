import React, { useState } from "react";
import "./selectionList.css";

const SelectionList = ({ content }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="list-container">
      <div className="item-titles">
        {content.map((item, idx) => (
          <div
            onClick={() => setSelected(idx)}
            className={"item-title" + (selected === idx ? " selected" : "")}
          >
            <p>{item.title}</p>
            <div className="project-links"></div>
            {item.gitLink && (
              <a
                href={item.gitLink}
                target="_blank"
                className="social-icon"
                rel="noreferrer"
              >
                <img
                  className="contact-img"
                  src="./images/github.svg"
                  alt="github"
                  width={30}
                  height={30}
                />
              </a>
            )}
            {item.prodLink && (
              <a
                href={item.prodLink}
                target="_blank"
                className="social-icon"
                rel="noreferrer"
              >
                <img
                  className="contact-img"
                  src="./images/website.svg"
                  alt="github"
                  width={30}
                  height={30}
                />
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="selected-item-container">
        {/* {content[selected].view && (
          <iframe
            className="item-view"
            src={content[selected].view}
            title={content[selected].title}
          ></iframe>
        )}
        {content[selected].video && (
          <video
            className="item-video"
            width={300}
            autoplay={true}
            mute={true}
            loop={true}
          >
            <source src={content[selected].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )} */}
        <div className="item-description">{content[selected].description}</div>
      </div>
    </div>
  );
};

export default SelectionList;
