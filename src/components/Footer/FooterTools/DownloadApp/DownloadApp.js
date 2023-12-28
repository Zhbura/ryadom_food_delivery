import "../FooterTools.scss";
import qr from "../../../../img/qr.svg";
import appstore from "../../../../img/appstore.svg";
import googleplay from "../../../../img/googleplay.svg";

export const DownloadApp = () => {
    return (
        <div className="download-app">
            <button className="download-app__item">
                <img src={qr} alt="Сканируй QR-код и скачивай приложение" />
            </button>
            <div className="download-app__items">
                <button className="download-app__item">
                    <img src={appstore} alt="Скачай приложение в appstore" />
                </button>
                <button className="download-app__item">
                    <img src={googleplay} alt="Скачай приложение в google play" />
                </button>
            </div>
        </div>
    )
}