var input = document.getElementById("pokeBusca");                
input.addEventListener("keyup", function(event) {                
if (event.key === 'Enter') {                    
    event.preventDefault();                    
    document.getElementById("btnBuscar").click();
}
});

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

            let arrType = data.types.length;
            let pokeType = data.types[0].type.name;

            let pokeType2
            if(arrType > 1){
                pokeType2 = data.types[1].type.name;
                /*console.log("el pokemon tiene mas de un tipo:"+arrType);*/
            }

            pokeImage(pokeImg,pokeID,pokeName,pokeType,pokeType2);
                        
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

const pokeImage = (url,ID,Nombre,pkType,pkType2) => {
    const pokePhoto = document.getElementById("pokeImg");

    if(typeof ID === 'undefined' || typeof Nombre === 'undefined' || typeof pkType === 'undefined') {
        document.getElementById("pokeID").value =   document.getElementById("pokeName").value =
        document.getElementById("pokeType").value  = document.getElementById('Movimientos').value = "";
        
        pokePhoto.src = url;
        document.getElementById("pokeType").style.backgroundColor = 'White'
        if(typeof pkType2 === 'undefined'){
            document.getElementById("pokeType2").value = "";
            document.getElementById("pokeType2").style.backgroundColor = 'White';
            document.getElementById("pokeType2").style.visibility = "hidden";
            document.getElementById("lblpokeType2").style.visibility = "hidden";
        }
    } 
    else{
        document.getElementById("pokeID").value = ID;
        document.getElementById("pokeName").value = Nombre;
        document.getElementById("pokeType").value = pkType;        

        if(typeof pkType2 === 'undefined'){
            document.getElementById("pokeType2").value = "";
            document.getElementById("pokeType2").style.backgroundColor = 'White'
            document.getElementById("pokeType2").style.visibility = "hidden";
            document.getElementById("lblpokeType2").style.visibility = "hidden";
        }
        else{
            document.getElementById("pokeType2").value = pkType2;
            PonerColorTipo(document.getElementById("pokeType2").value)
            document.getElementById("pokeType2").style.visibility = "visible";
            document.getElementById("lblpokeType2").style.visibility = "visible";
        }
        
        pokePhoto.src = url;

        PonerColorTipo(document.getElementById("pokeType").value)
        /*
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
        }    */
    }        
}

function PonerColorTipo(tipo){
    if(tipo === document.getElementById("pokeType").value)
    {
        switch(tipo)
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
    else if (tipo === document.getElementById("pokeType2").value)
    {
        switch(tipo)
        {                    
            case "normal": document.getElementById("pokeType2").style.backgroundColor = '#A8A77A';break;
            case "fire": document.getElementById("pokeType2").style.backgroundColor = '#EE8130';break;
            case "water": document.getElementById("pokeType2").style.backgroundColor = '#6390F0';break;
            case "grass": document.getElementById("pokeType2").style.backgroundColor = '#7AC74C';break;
            case "flying": document.getElementById("pokeType2").style.backgroundColor = '#A98FF3';break;
            case "fighting": document.getElementById("pokeType2").style.backgroundColor = '#C22E28';break;
            case "poison": document.getElementById("pokeType2").style.backgroundColor = '#A33EA1';break;
            case "electric": document.getElementById("pokeType2").style.backgroundColor = '#F7D02C';break;
            case "ground": document.getElementById("pokeType2").style.backgroundColor = '#E2BF65';break;
            case "rock": document.getElementById("pokeType2").style.backgroundColor = '#B6A136';break;
            case "psychic": document.getElementById("pokeType2").style.backgroundColor = '#F95587';break;
            case "ice": document.getElementById("pokeType2").style.backgroundColor = '#96D9D6';break;
            case "bug": document.getElementById("pokeType2").style.backgroundColor = '#A6B91A';break;
            case "ghost": document.getElementById("pokeType2").style.backgroundColor = '#735797';break;
            case "steel": document.getElementById("pokeType2").style.backgroundColor = '#B7B7CE';break;
            case "dragon": document.getElementById("pokeType2").style.backgroundColor = '#6F35FC';break;
            case "dark": document.getElementById("pokeType2").style.backgroundColor = '#705746';break;
            case "fairy": document.getElementById("pokeType2").style.backgroundColor = '#D685AD';break;
                        
            default: document.getElementById("pokeType2").style.backgroundColor = 'White';
        }
    }    
}


