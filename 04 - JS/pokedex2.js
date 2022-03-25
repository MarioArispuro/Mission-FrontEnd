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
            console.log(pokeType);

            /*const tpl = data.map((data) => `<li>${data.moves[0]}</li>`);
            HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;*/

            /*for (i=0;i<data.moves.length;i++)
            {
                console.log(data.moves[i].move.name);                
            }*/

           /* // Make a container element for the list
            listContainer = document.createElement('div'),

            listContainer.setAttribute("id", "DivMovimientos");
            // Make the list
            listElement = document.createElement('ul'),
            // Set up a loop that goes through the items in listItems one at a time
            numberOfListItems = data.moves.length;          */  

            //listOption
            textarea = document.getElementById('Movimientos');
            textarea.value = ''
            for (i = 0; i < data.moves.length; ++i) {
                /*var option = document.createElement('option');
                option.value = data.moves[i].move.name;
                selectEl.appendChild(option);*/
                textarea.value +=data.moves[i].move.name+', ';
            }
            
            /** 
            // Add it to the page
            document.getElementsByID('Movimientos')[0].appendChild(listContainer);
            listContainer.appendChild(listElement);

            for (i = 0; i < data.moves.length; ++i) {
                // create an item for each one
                listItem = document.createElement('li');

                // Add the item text
                listItem.innerHTML = data.moves[i].move.name;

                // Add listItem to the listElement
                listElement.appendChild(listItem);
            }*/
        }       
    });
}

const pokeImage = (url,ID,Nombre,pkType) => {
    const pokePhoto = document.getElementById("pokeImg");
    /*const pokeID = document.getElementById("pokeID");*/
    document.getElementById("pokeID").value = ID;
    document.getElementById("pokeName").value = Nombre;
    document.getElementById("pokeType").value = pkType;
    pokePhoto.src = url;
}
