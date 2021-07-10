console.log( 'Inicio de Programa' ); //1

setTimeout( () => {
	console.log( 'Primer TimeOut' ); //5
}, 3000 );

setTimeout( () => {
	console.log( 'Segundo TimeOut' ); //2
}, 0 );

setTimeout( () => {
	console.log( 'Tercer TimeOut' ); //3
}, 0 );

console.log( 'Fin de Programa' ); //4