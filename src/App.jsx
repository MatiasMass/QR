import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

const value = "matias";

function App() {
  const [value, setvalue] = useState("Lollapalooza Argentina");
  const [renderQR, setRenderQR] = useState(false);

  return (
    <div className="App">
      <div className="ticket">
        <div className="image">
          <h2>Lollapalooza Argentina 2023</h2>
          <img src="https://indierocks.b-cdn.net/wp-content/uploads/bfi_thumb/Lollapalooza-Argentina-2023-Editado-pw2aga3mdg6tz06whkqy8y1scszkvdi9uld9olap7o.png" alt="" />
        </div>
        <div className="info">
          <h3>Información</h3>
          <p>
            <strong>Fecha:</strong> 10 de Marzo de 2023
          </p>
          <p>
            <strong>Lugar:</strong> Hipódromo de San Isidro
          </p>
          <p>
            <strong>Artistas:</strong> Foo Fighters, The Strokes, The Killers,
            Twenty One Pilots, The Lumineers, The 1975, The Raconteurs, The
            National, The Black Keys, The Smashing Pumpkins,
          </p>
          <button className="button-buy" onClick={() => setRenderQR(true)}>
            Compar
          </button>
        </div>
      </div>
      {renderQR && (
        <div className="QRModal">
          <div className="QR">
            <button 
            className="close"
            onClick={() => setRenderQR(false)}>X</button>
            <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 154,
                width: "100%",
              }}
            >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={value}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
