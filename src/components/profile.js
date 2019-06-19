import React from 'react';
import style from './profile.module.css';
import Image from "./images/profile-image"

export default () => {
  return (
    <div className={style.profileTile}>
      <div>
          <Image src='profile.jpg'/>
      </div>
      <div className={style.details}>
        <h1 className={style.name}>Prateek Bhatnagar</h1>
        <div className={style.phoenatics}>[Pratëëk - Bhätnägär]</div>
        <div>
          <span className={style.caption}>Pronouns:</span>
          <span>he/him</span>
        </div>
      </div>
    </div>
  );
}