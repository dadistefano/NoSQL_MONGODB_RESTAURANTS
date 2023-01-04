// Ejercicio 1 //

//Selecciono la base de datos con la que quiero trabajar, tanto si existe como si no.
use UTN;

//Creo la coleccion para almacenar los datos de las materias
db.createCollection("Materias")

//Inserto datos de 2 materias
//Como docentes y notas son Arrays de String y numericos respectivamente, los encierro entre corchetes "[]"

db.Materias.insert({CodMateria: "BBDD2", NombreMateria: "Base de datos 2", DiaCursada: "Lunes", Docentes: ["Tomas", "Javier"], Notas: [8,9]});
db.Materias.insert({CodMateria: "Mate2", NombreMateria: "Matematica 2", DiaCursada: "Martes", Docentes: ["Teresa", "Andrea"], Notas: [5,6]});


// Ejercicio 2 //

//Selecciono la base de datos con la que quiero trabajar, tanto si existe como si no.
use UTN;

//Busco materias, aplicando el or para filtrar por 2 variantes
db.Materias.find({$or:[{"DiaCursada": "Lunes"},{"DiaCursada": "Viernes"}]});

// Ejercicio 3 //

//Selecciono la base de datos con la que quiero trabajar, tanto si existe como si no.
use covid19;

//Busco datos de la coleccion filtrando el pais.
//Luego y en el segundo corchete, indico los nombres de campos que deben ser seleccionados con un "1"

db.countries_summary.find({country: "Argentina"}, {"country":1, "date": 1, "confirmed":1, "confirmed_daily": 1, "recovered":1, "recovered_daily": 1, "deaths":1, "deaths_daily": 1}).sort({"date": -1}).pretty();


// Ejercicio 4 //

//Selecciono la base de datos con la que quiero trabajar, tanto si existe como si no.
use covid19;

//Busco datos de la coleccion filtrando si el numero de casos confirmados es mayor a 20 mil.
//Luego y en el segundo corchete, indico los nombres de campos que deben ser seleccionados con un "1"
//Hago un ordenamiento con el sort de casos confirmados descendientes
//Aplico un formato para facilitar la lectura

db.countries_summary.find({confirmed_daily:{$gte:20000}},{country:1, date:1, confirmed:1, confirmed_daily:1, recovered:1, recovered_daily:1, deaths:1, population:1}).sort({confirmed_daily:-1}).pretty();