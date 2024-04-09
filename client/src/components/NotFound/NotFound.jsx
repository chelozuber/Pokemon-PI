import style from "./NotFound.module.css";

import Notfound from "../../assets/loaderNF.gif"

const NotFound = () => {
  return (
    <div className={style.mainContainer}>
      <img src={Notfound} alt="" />
      <p className={style.text}></p>
    </div>
  );
};
export default NotFound;
