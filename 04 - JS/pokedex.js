const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeBusca");
    let pokeBusca = pokeNameInput.value;
    pokeName = pokeBusca.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeBusca}`;
    fetch(url).then((res) => {
        if (res.status != "200") {            
            console.log(res);            
            pokeImage("./notpokemon.png")
        }
        else {       
            console.log(res);         
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;            
            let pokeID =  data.id;
            let pokeName = data.name;

            const pokeType = data.types[0].type.name;
            /*const objType = JSON.parse(data.types[0].type);*/

            pokeImage(pokeImg,pokeID,pokeName,pokeType);
                        
            /*console.log(pokeImg);*/
            /*console.log(pokeType);*/

            textarea = document.getElementById('Movimientos');
            textarea.value = ''
            for (i = 0; i < data.moves.length; ++i) {
                textarea.value +=data.moves[i].move.name+', ';
            }
                    
        }       
    });
}

const pokeImage = (url,ID,Nombre,pkType) => {
    const pokePhoto = document.getElementById("pokeImg");

    if(typeof ID === 'undefined' || typeof Nombre === 'undefined' || typeof pkType === 'undefined') {
        document.getElementById("pokeID").value =   document.getElementById("pokeName").value =
        document.getElementById("pokeType").value = document.getElementById('Movimientos').value = "";
        pokePhoto.src = url;
        
    } else {
        document.getElementById("pokeID").value = ID;
        document.getElementById("pokeName").value = Nombre;
        document.getElementById("pokeType").value = pkType;

        pokePhoto.src = url;

        switch(document.getElementById("pokeType").value)
        {                    
            case "normal": document.getElementById("pokeType").style.backgroundColor = '#A8A77A';break;
            case "fire": document.getElementById("pokeType").style.backgroundColor = '#EE8130';break;
            case "water": document.getElementById("pokeType").style.backgroundColor = '#6390F0';break;
            case "grass": document.getElementById("pokeType").style.backgroundColor = '#7AC74C';break;
            case "flying": document.getElementById("pokeType").style.backgroundColor = '#A98FF3';break;
            case "fighting": document.getElementById("pokeType").style.backgroundColor = '#C22E28';break;
            case "poison": document.getElementById("pokeType").style.backgroundColor = '#A33EA1';break;
            case "electric": document.getElementById("pokeType").style.backgroundColor = '#F7D02C';break;
            case "ground": document.getElementById("pokeType").style.backgroundColor = '#E2BF65';break;
            case "rock": document.getElementById("pokeType").style.backgroundColor = '#B6A136';break;
            case "psychic": document.getElementById("pokeType").style.backgroundColor = '#F95587';break;
            case "ice": document.getElementById("pokeType").style.backgroundColor = '#96D9D6';break;
            case "bug": document.getElementById("pokeType").style.backgroundColor = '#A6B91A';break;
            case "ghost": document.getElementById("pokeType").style.backgroundColor = '#735797';break;
            case "steel": document.getElementById("pokeType").style.backgroundColor = '#B7B7CE';break;
            case "dragon": document.getElementById("pokeType").style.backgroundColor = '#6F35FC';break;
            case "dark": document.getElementById("pokeType").style.backgroundColor = '#705746';break;
            case "fairy": document.getElementById("pokeType").style.backgroundColor = '#D685AD';break;
                        
            default: document.getElementById("pokeType").style.backgroundColor = 'White';
        }    
    }        
}


