import React from 'react';
import style from './profile.module.css';
import ProfileImage from "./images/profile-image";
import nameImgSrc from '../images/name.png';

export default () => {
  return (
    <div className={style.profileTile}>
      <div>
          <ProfileImage className={style.profilePic}/>
      </div>
      <div className={style.details}>
        <img className={style.name} src={nameImgSrc}/>
        <div className={style.phoenatics}>[Pratëëk - Bhätnägär]</div>
      </div>
    </div>
  );
}