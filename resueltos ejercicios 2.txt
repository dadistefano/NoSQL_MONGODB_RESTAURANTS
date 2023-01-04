/*1. Todos los documentos*/

db.restaurants.find()

/*2. 
Mostrar los campos "restaurant_id", "name", "borough" y "cuisine" de la coleccion de restaurantes. 
Excluir el campo _id
*/

db.restaurants.find({
}, {
	restaurant_id: 1,
	name: 1,
	borough: 1,
	_id: 0
}
)

/*3. Mostrar los campos "restaurant_id", "name", "borough" y "cuisine" de la coleccion de restaurantes. 
Excluir el campo _id 
Restringir al borough de Bronx.*/

db.restaurants.find({
	borough: "Bronx"
},
{
	restaurant_id: 1,
	name: 1,
	borough: 1,
	_id: 0
})

/*4. Mostrar los campos "restaurant_id", "name", "borough" y "cuisine" de la coleccion de restaurantes. 
Excluir el campo _id 
Restringir a los boroughs de Staten Island, Queens o Bronxor Brooklyn*/

db.restaurants.find(
	{$or:
		[
			{
				borough: "Bronx"
			},
			{
				borough: "Bronxor Brooklyn"
			},
			{
				borough: "Staten Island"
			}
		]
	},
	{
		restaurant_id: 1,
		name: 1,
		borough: 1,
		_id: 0
	}
)

/*
5. Mostrar los campos "restaurant_id", "name", "borough" y "cuisine" de la coleccion de restaurantes. 
Excluir el campo _id 
Restringir al borough de Bronx.
Ordenar el listado alfabeticamente por el campo "name".
*/

db.restaurants.find({
	borough: "Bronx"
},
{
	restaurant_id: 1,
	name: 1,
	borough: 1,
	_id: 0
}).sort({
	name:1
}
)

/*
borough: {
		$in: ['Bronx', 'Brooklyn', 'Queens', 'Staten Island']}
	}
*/

/*
6. Mostrar los campos "restaurant_id", "name", "borough" y "cuisine" de la coleccion de restaurantes. 
Excluir el campo _id 
* Restringir al borough de Manhattan.
* Restringir a los restaurantes que hayan alcanzado algun "score" de mas de 90.
Para evaluar los valores del array, usar la funcion $elemMatch
Ordenar el listado alfabeticamente por el campo "name".
*/

db.restaurants.find({
$and:
	[
		{
			borough: "Manhattan"
		},
		{
			grades: { $elemMatch: {"score": {$gt : 90 } } }			
		}
	]
},	
{
	restaurant_id:1,
 	name:1,
 	borough:1,
 	_id:0,
 	grades: { score: 1 }
}
).sort({
	borough: 1,
	name: 1
}).pretty()

/*
7. Mostrar los campos "restaurant_id", "name", "borough" y "cuisine" de la coleccion de restaurantes. 
Excluir el campo _id
Excluir a los restaurantes cuyo valor para "cuisine" sea "American". 
Para evaluar que no exista, usar la funcion $ne.

Restringir a los restaurantes que hayan alcanzado algun "score" de mas de 80. 
Para evaluar los valores del array, usar la funcion $elemMatch.

Mostrar los valores ordenados por el campo de "cuisine".
*/

/*Juan*/
grades: {
	$elemMatch: {
		score: {
			$gte: 80,
			$lte: 90
		}
	}
}

/*Mauricio*/
grades:{$elemMatch:{$and:[{score: {$gte: 80}},{score: {$lte: 90}}]}}

db.restaurants.find({
	cuisine: { $ne: "American "},
	grades: { $elemMatch: { score: { $gte: 80 } } }
},
{
	restaurant_id: 1,
	name: 1,
	borough: 1,
	cuisine: 1,
	grades: { score: 1},
	_id: 0
}
).sort({
	cuisine: 1
}
).pretty()

/*Filtro si contiene cadena American */
/*No se pueden usar regex como argumentos en ne*/

db.restaurants.find({
	cuisine: {$ne: /American/}
},
{
	restaurant_id: 1,
	name: 1,
	borough: 1,
	cuisine: 1,
	_id: 0
}
).sort({
	cuisine: 1
}
).pretty()

/*
8. Mostrar los campos "restaurant_id", "name", "borough" y "cuisine" de la coleccion de restaurantes. 
Excluir el campo _id
Excluir a los restaurantes que contengan el termino 'mon' en algun lugar de su nombre.
Mostrar los valores ordenados por el campo de "name".
*/

/*Uso de regex

Inicio
db.restaurants.find( { borough: /^Bro/ } ).count()

Contiene
db.restaurants.find( { borough: /Bro/ } ).count()	

Finaliza con
db.restaurants.find( { borough: /Bro$/ } ).count()	
*/

/*
like'%mon%'
<>
!=
*/

db.restaurants.find({
	cuisine: {$not: /mon/}
},
{
	restaurant_id: 1,
	name: 1,
	borough: 1,
	cuisine: 1,
	_id: 0
}
).sort({
	name: 1
}
).pretty()

//Aplico un formato para facilitar la lectura

db.countries_summary.find({confirmed_daily:{$gte:20000}},{country:1, date:1, confirmed:1, confirmed_daily:1, recovered:1, recovered_daily:1, deaths:1, population:1}).sort({confirmed_daily:-1}).pretty();