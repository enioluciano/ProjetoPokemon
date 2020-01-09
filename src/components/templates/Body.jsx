import React from "react";
import "../css/Body.css";

function Body() {
  const imagem = [
    {
      id: "#001",
      nome: "Bulbasaur",
      imgURL: require("../../assets/img/Bulba.png")
    },

    {
      id: "#002",
      nome: "Lyvsaur",
      imgURL: require("../../assets/img/002.png")
    },

    {
      id: "#003",
      nome: "Venursaur",
      imgURL: require("../../assets/img/003.png")
    },

    {
      id: "#004",
      nome: "Charmander",
      imgURL: require("../../assets/img/004.png")
    },

    {
      id: "#005",
      nome: "charmander2",
      imgURL: require("../../assets/img/005.png")
    },

    { id: "#006", nome: "Dragon", imgURL: require("../../assets/img/006.png") },

    { id: "#007", nome: "Square", imgURL: require("../../assets/img/007.png") },

    { id: "#008", nome: "Squart", imgURL: require("../../assets/img/008.png") },

    {
      id: "#009",
      nome: "Blestoise",
      imgURL: require("../../assets/img/009.png")
    }
  ];

  function roda(id) {
    var elemento = document.getElementById(id);

    elemento.classList.toggle("rotaciona");
  }

  return (
    <div className="menu-container">
      {imagem.map(e => (
        <div className="flipper" id={e.id} onClick={() => roda(e.id)}>
          <div className="item">
            <img src={e.imgURL} alt="imagem" className="img" />
            <p className="geometrico">
              {" "}
              <strong>{e.id} </strong>
            </p>

            <div className="legenda">
              <div className="body-legend">
                <p className="nomePokemon">
                  {" "}
                  <strong>{e.nome}</strong>
                  <div className="botao-container">
                    <div className="botao">Grass</div>

                    <div className="botao1">Poison</div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="cartao-back">
            <div className="container-back">
              <div className="conteudo-back">
                <div className="display-topo">
                  <div className="conteudo-topo">
                    <p style={{ color: "#aeaeaf" }}>
                      <strong> MAX HP </strong>
                    </p>
                    <div className="numero">
                      <strong>1632</strong>
                    </div>
                  </div>
                </div>

                <div className="display-topo">
                  <div className="conteudo-topo">
                    <p style={{ color: "#aeaeaf" }}>
                      <strong> MAX CP </strong>
                    </p>
                    <div className="numero">
                      <strong>1532</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="body-back">
                <h4>Fast Attacks</h4>

                <table className="table">
                  <tr>
                    <th>Attack</th>
                    <th>Type</th>
                    <th>Power</th>
                  </tr>

                  <tbody>
                    <tr>
                      <td>Razor Leaf</td>
                      <td className="botao-tabela">Grass</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>Vine Wip</td>
                      <td className="botao-tabela">Grass</td>
                      <td>7</td>
                    </tr>
                  </tbody>
                </table>

                <h4>Special Attacks</h4>

                <table className="table">
                  <tr>
                    <th>Attack</th>
                    <th>Type</th>
                    <th>Power</th>
                  </tr>

                  <tbody>
                    <tr>
                      <td>Power Whip</td>
                      <td className="botao-tabela">Grass</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <td>Sludge Bomb</td>
                      <td className="botao-tabela2">Poison</td>
                      <td>55</td>
                    </tr>
                    <tr>
                      <td>Solar Beam</td>
                      <td className="botao-tabela">Grass</td>
                      <td>120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Body;
