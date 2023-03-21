import React from "react";
import "./News.css";

const NewsCard = ({ src, title, author, url }) => {
  return (
    <>
      <div className="NewsBoxRow">
        {/* <div>
          <img className="NewsCardImgSize" src={src} />
        </div> */}
        <a href={url}>
          <div className="colum">
            <h5 className="titleWrap">{title}</h5>
            <h6 className="author">출처 {author}</h6>
          </div>
        </a>
      </div>
    </>
  );
};

export default NewsCard;
