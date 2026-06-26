const productos = [
{ id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 5 },
{ id: 2, nombre: "Mouse", categoria: "Electrónica", precio: 25, stock: 30 },
{ id: 3, nombre: "Camisa", categoria: "Ropa", precio: 45, stock: 10 },
{ id: 4, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 0 },
{ id: 5, nombre: "Pantalón", categoria: "Ropa", precio: 60, stock: 8 }
];

Ejercicio 1: Filtrar elementos (Usando filter)
Crea un código que devuelva un nuevo array únicamente con los productos que
pertenezcan a la categoría 'Electrónica' y cuyo precio sea menor a $500.

Ejercicio 2: Modificar objetos (Usando map)
Aplica un 10% de descuento a todos los productos. Devuelve un nuevo array de objetos
donde el precio esté actualizado.

Ejercicio 3: Buscar un elemento (Usando find)
Encuentra el primer producto que tenga un stock de 0.