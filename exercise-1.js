// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const paises$$ = document.createElement('ul');
for(const pais of countries){
    const li$$ = document.createElement("li");
    li$$.innerText = pais;
    paises$$.appendChild(li$$);
    document.body.appendChild(paises$$);
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const remove$$ = document.querySelector(".fn-remove-me").remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul$$ = document.createElement("ul");
const divData$$ = document.querySelector("[data-function='printHere']");

for(const marca of cars){
const li$$ = document.createElement("li");
li$$.innerText = marca;
ul$$.appendChild(li$$);
divData$$.appendChild(ul$$);
}

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const newDiv$$ = document.createElement("div");
document.body.appendChild(newDiv$$);
const newUl$$ = document.createElement("ul")
for(const pais of countries1){
    const li$$ = document.createElement("li")
    li$$.innerHTML =`<div><h4>${pais.title}</h4><img src="${pais.imgUrl}" alt="${pais.title}"></div>`
    newUl$$.appendChild(li$$);
    newDiv$$.appendChild(newUl$$);
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
const button$$ = document.createElement("button");
button$$.innerText = "Elimina el ultimo"
document.body.appendChild(button$$);


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

button$$.addEventListener("click", function(){
    const todosli$$ = document.querySelectorAll("li");
    todosli$$[todosli$$.length-1].remove();
    console.log(todosli$$)
    })