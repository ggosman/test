import "../App.css";
import infoImg from "../img/infoImg.png";

function Info() {
  return (
    <div className="info">
      <div className="container">
        <div className="info-wrapper">
          <div className="info-text">
            <h1>Нейросеть по определению болезней</h1>
            <p>
              AI Symtpom - Казахстанская нейросеть по определению заболеваний на
              основе симптомов
            </p>
            <button>Начать</button>
          </div>
          <div className="info-image">
            <img src={infoImg} alt="infoImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
