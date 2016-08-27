//Designed by Weslyg 08.07.2016
'use strict';

const DESKTOP_MEDIA = ['screen', 'window'];
var myVar;
var Ari;
var Aria;
var pattern = /-\w{1,4}/i;
var link = /(https?):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/i;
//функция автофокуса поля ввода
document.getElementById('google').focus();


//##############################################################
//Важно блять!
//обработка закрытия по потере фокуса

document.getElementById('google').onblur = function() {
   window.close();
}


// обработчик энтра плюс Эскейпа
document.getElementById("google")
		.addEventListener("keyup", function(event) {
		event.preventDefault();

		if (event.keyCode == 13) {
				document.getElementById("start").click();
		}
		else if (event.keyCode == 27)
		{
			 window.close();
		}
	});

//Запрашиваем поисковики (ключи)
var req = new XMLHttpRequest();
req.open('GET', 'KeyDB.json', true);
req.onreadystatechange = function (aEvt) {
	if (req.readyState == 4) {
		 if(req.status == 200){
			Ari = JSON.parse(req.responseText);
	}
		 else {
			console.log("Error loading page\n");
		}
	}
};
req.send(null);

//запрашиваем Главные страницы
var Req = new XMLHttpRequest();
Req.open('GET', 'FirstPG.json', true);
Req.onreadystatechange = function (aEvt1) {
	if (Req.readyState == 4) {
		 if(Req.status == 200){
			Aria = JSON.parse(Req.responseText);
	}
		 else {
			console.log("Error loading page\n");
		}
	}
};
Req.send(null);

//Мач чистого ключа (второй список)

document.querySelector('#start').addEventListener('click', function() {
myVar = document.getElementById('google').value;

var Matching = myVar.match(pattern); //матчим строку по патерну 


	// матч чистого ключа

		if (Aria[myVar] != undefined) {   //переменить тут json
			window.open( Ari[myVar] );
			// window.close();
			}

				// матч ключа в подстроке (с удалением)

		else if (Matching != null) {
				var Str = Matching.toString();    // вместо обьекта делаем сторку
				var ComMatch = Str.toLowerCase();   //опускаем ее для избежания прожатия заглавных ключей

					var resql = myVar.replace( pattern, "");
					window.open(Ari[ComMatch] + resql);
						}

				// Матч на http 
				else if (myVar.match(link)) {
				console.log("мы тут!");
				window.open(myVar);
						 }

			else if ((myVar.charAt(myVar.length-3) == '.') || (myVar.charAt(myVar.length-4) == '.'))
						{
				window.open('http://' + myVar);// подумать! 
						}

		 //На гуглю
		 else {
			window.open('https://www.google.ru/search?q=' + myVar);
			// console.log("Идем в гуглю");
		 }
});










	// if ((myVar.charAt(myVar.length-3) == '.') || (myVar.charAt(myVar.length-4) == '.'))
	// {
	//   window.open('https://' + myVar);// подумать! 
	// }
	// // иначе начинаем ставить флаги (продумать)
	// else if ((myVar.charAt(myVar.length-2) == '-') && (myVar.charAt(myVar.length-1) == 'y')) {
	//  window.open('https://yandex.ru/search/?text=' + myVar.slice(0, -2));
	// }
	// // переводчик 
	// else if ((myVar.charAt(myVar.length-2) == '-') && (myVar.charAt(myVar.length-1) == 't')) {
	//  window.open('https://translate.google.ru/?hl=ru#en/ru/' + myVar.slice(0, -2));
	// }
	//  // переводчик яндекс 
	// else if ((myVar.charAt(myVar.length-3) == '-') && (myVar.charAt(myVar.length-2) == 'y') && (myVar.charAt(myVar.length-1) == 't')) {
	//  window.open('https://translate.yandex.ru/?text=' + myVar.slice(0, -3) + '&lang=en-ru');
	// }
	//  // кипы
	// else if ((myVar.charAt(myVar.length-2) == '-') && (myVar.charAt(myVar.length-1) == 'k')) {
	//  window.open('https://keep.google.com/u/0/#search/text%3D' + myVar.slice(0, -2));
	// }
	// // вк 
	// else if ((myVar.charAt(myVar.length-2) == '-') && (myVar.charAt(myVar.length-1) == 'v')) {
	//  window.open('https://new.vk.com/search?c%5Bq%5D=' + myVar.slice(0, -2) + '&c%5Bsection%5D=auto');
	// }
	// //wiki
	//  else if ((myVar.charAt(myVar.length-2) == '-') && (myVar.charAt(myVar.length-1) == 'w')) {
	//  window.open('https://ru.wikipedia.org/wiki/' + myVar.slice(0, -2));
	// }
	// //гугл картинки 
	// else if ((myVar.charAt(myVar.length-3) == '-') && (myVar.charAt(myVar.length-2) == 'g') && (myVar.charAt(myVar.length-1) == 'i')) {
	//  window.open('https://www.google.ru/search?newwindow=1&tbm=isch&q=' + myVar.slice(0, -3));
	// }
	// //яндекс картинки
	// else if ((myVar.charAt(myVar.length-3) == '-') && (myVar.charAt(myVar.length-2) == 'y') && (myVar.charAt(myVar.length-1) == 'i')) {
	//  window.open('https://yandex.ru/images/search?text=' + myVar.slice(0, -3));
	// }
	// else {
	//    window.open('https://www.google.ru/search?q=' + myVar); 
	// }

	//    window.close();
