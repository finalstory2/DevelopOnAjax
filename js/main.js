var persona = {
    "nombre": "Maciel Galeano",
    "edad": 23,
    "pais": "Urugauy"
}

var nombreAmigos = ["Alejandro","Manuel"];
console.log(nombreAmigos[0]);

//La estructura json es un arreglo con objetos adentro

var amigos = [
    {
        "nombre": "Maciel Galeano",
        "edad": 23,
        "pais": "Urugauy"
    },
    {
        "nombre": "Jose Galeano",
        "edad": 23,
        "pais": "Argentina"
    },
    {
        "nombre": "Godinez Galeano",
        "edad": 70,
        "pais": "Colombia"
    }
];

//Accedera cada elemento del Json

console.log(amigos[0].nombre)