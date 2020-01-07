import React from 'react';
import '../css/Body.css'


function Body() {
    const imagem = [
        {  
            id:"#001",
            nome: "Bulbasaur",
           imgURL: require('../../assets/img/Bulba.png')
        },

        {   
            id:"#002",
            nome: "Lyvsaur",
            imgURL: require('../../assets/img/002.png')
        },
        
        {   
            id:"#003",
            nome: "Venursaur",
            imgURL: require('../../assets/img/003.png')
        },

        {   
            id:"#004",
            nome: "Charmander",
            imgURL: require('../../assets/img/004.png')
        },

        {   id:"#005",
            nome: "charmander2",
            imgURL: require('../../assets/img/005.png')
        },

        {   id:"#006",
            nome: "Dragon",
            imgURL: require('../../assets/img/006.png')
        },

        {   id:"#007",
            nome: "Square",
            imgURL: require('../../assets/img/007.png')
        },

        {   id:"#008",
            nome: "Squart",
            imgURL: require('../../assets/img/008.png')
        },

        {   id:"#009",
            nome: "Blestoise",
            imgURL: require('../../assets/img/009.png')
        },

        ]


    return (

        <div className="menu-container">
            {imagem.map(e =>

                <div className="item">

                    <img src={e.imgURL} alt='imagem' className='img' />
                    <p className="geometrico"> {e.id} 
                   
                    </p>

                    <div className="legenda">
                      <p className="nomePokemon"> {e.nome}</p>

      
                    </div>
                   
                    
                    
                  
                

                </div>
                

            )}

           

        </div>


    );
}

export default Body;