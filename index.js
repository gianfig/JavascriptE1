//Crear el array de objetos "Pizzas".
//Debemos crear 6 objetos como mínimo.
//Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

Pizzas = [
    {
        id: 1,
        nombre: "Mozzarella",
        ingredientes: ["tomate salsa","queso"],
        precio: 320
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes: ["tomate salsa","queso","tomate","queso"],
        precio: 1800
    },
    {
        id: 3,
        nombre: "Anana",
        ingredientes: ["salsa de tomate","queso","Anana"],
        precio: 350
    },
    {
        id: 4,
        nombre: "Jamon y morron",
        ingredientes: ["queso","jamon","tomate salsa","morron"],
        precio: 1750
    },
    {
        id: 5,
        nombre: "Jamón y ananá",
        ingredientes: ["salsa de tomate","queso","jamon","ananá"],
        precio: 200
    },
    {
        id: 6,
        nombre: "huevo",
        ingredientes: ["tomate salsa","queso","huevo","aceituna"],
        precio: 1950
    },
    {
        id: 7,
        nombre: "Fugazzeta",
        ingredientes: ["queso","cebolla","queso"],
        precio: 890
    }
]

//Crear una iteración del array que imprima en consola:


const id = Pizzas.filter(Pizzas => Pizzas.id % 2 !== 0)
const precio = Pizzas;
const nombres = Pizzas;

id.forEach((Pizzas) => {
    console.log(`La pizza ${Pizzas.nombre} posee id=${Pizzas.id}, el cual es IMPAR`);
});

precio.forEach((Pizzas) => {
    if(Pizzas.precio < 600){
        console.log(`La pizza ${Pizzas.nombre} vale menos de $600, su valor es ${Pizzas.precio}`);
    }
});

nombres.forEach((Pizzas) => {
    console.log(`La pizza ${Pizzas.nombre} cuesta $${Pizzas.precio}`);

});





for (pizza of Pizzas){ 
    console.log(`Los ingredientes de la pizza ${pizza.nombre} son:`)
    for (ingredientes of pizza.ingredientes){
        console.log("- "+ingredientes);
    }

}

