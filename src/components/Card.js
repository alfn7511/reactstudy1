/* 여기에 주어진 요구 사항을 충족 시키기 위한 코드를 작성 및 수정해 주세요. */
import './Card.css';
// import { useState } from 'react';
function Card({ item, index, onBookmarkToggle }) {
  return (
    <li className="card--container" id={'card' + index}>
      <div className="header">
        <div className="card--tag">
          <span className="upload-date">{item.upload_date}</span>
        </div>
        <div className="card--tag">
          <span className={`icon bookmark ${item.bookmark ? 'on' : ''}`} onClick={() => onBookmarkToggle(index)}>
            <i className="fa fa-bookmark"></i>
          </span>
        </div>
      </div>
      <div className="card--content">
        <span className="title">{item.title}</span>
      </div>
      <div className="footer">
        <div className="card--tag">
          <span className="views">{item.views}</span>
          views
        </div>
      </div>
    </li>
  );
}
export default Card;
