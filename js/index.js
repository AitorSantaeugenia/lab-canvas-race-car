/*
TODO
1) Pintar road --
2) Pintar car --
3) Make de car move right and left with arrows --

4) Create obstacles (minimo y ancho de carretera) - OJO con los intervalos cortos
	4-1) Class and classchildren
	4.2) Moving obstacles
//apuntes
- que sea una clase
- que vaya haciendo randoms
- de diferentes medidas
- pintando de arriba a abajo


5) Points 

Bonus
6) Intentar que se mueva la carretera

Obstaculos
	6.1) Pintar carretera antes que se mueva --
	6.2) Bajar velocidad carretera al llamar cada vez dentro del addEventListener, esta llama a la misma funcion
	y aumenta la velocidad
*/
//---------------------------------------------------------------
//Variables que necesitaremos por todo

//---------------------------------------------------------------
window.onload = () => {
	const placeHolderImage = document.getElementById('placeHolderImg');
	placeHolderImg.style.display = 'initial';

	document.getElementById('start-button').onclick = () => {
		const canvas = document.querySelector('#canvas');
		const endGame = document.getElementById('endScreen');
		const scoreEndGame = document.getElementById('score');
		const restartButton = document.getElementById('restartButton');
		const audio = document.getElementById('backgroundMusic');
		const audio2 = document.getElementById('startingSound');

		placeHolderImg.style.display = 'none';

		raceCarApp.init(canvas, endGame, scoreEndGame, restartButton, audio, audio2);
	};
};

//---------------------------------------------------------------
//Otros testings
