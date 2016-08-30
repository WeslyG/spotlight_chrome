//Designed by Weslyg 08.07.2016
'use strict';

const DESKTOP_MEDIA = ['screen', 'window'];
var myVar;
var Ari;
var Aria;
var locl = /localhost(:\w+)?/i;
var pattern = /-\w{1,5}.?/i;
var link = /((https?)|(ftp)):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/i;
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
var req1 = new XMLHttpRequest();

req.open('GET', 'http://weslyg.tk/spotlight_chrome/KeyDB.json', true);
req.onreadystatechange = function (aEvt1) {
	if (req.readyState == 4) {
		 if(req.status == 200){
			Ari = JSON.parse(req.responseText);
		}
		 else if (req.status !== 200) { //берем локальные данные 
				req1.open('GET', './setting backup/KeyDB.json', true);
				req1.onreadystatechange = function (aEvt1) {
					if (req1.readyState == 4) {
						 if(req1.status == 200){
							Ari = JSON.parse(req1.responseText);
						}
						 else {
							console.log("Ошибочка чет");
							}
						}
					};
					req1.send(null);
				}
			}
		};
		req.send(null);

//запрашиваем Главные страницы
var Req1 = new XMLHttpRequest();
var Req = new XMLHttpRequest();

Req.open('GET', 'http://weslyg.tk/spotlight_chrome/FirstPG.json', true);
Req.onreadystatechange = function (aEvt1) {
	if (Req.readyState == 4) {
		 if(Req.status == 200){
			Aria = JSON.parse(Req.responseText);
		}
		 else if (Req.status !== 200) { //берем локальные данные 
				Req1.open('GET', './setting backup/FirstPG.json', true);
				Req1.onreadystatechange = function (aEvt1) {
					if (Req1.readyState == 4) {
						 if(Req1.status == 200){
							Aria = JSON.parse(Req1.responseText);
						}
						 else {
							console.log("Ошибочка чет");
							}
						}
					};
					Req1.send(null);
				}
			}
		};
		Req.send(null);

var dbase;
var Db = new XMLHttpRequest();
var Db1 = new XMLHttpRequest();

Db.open('GET', 'http://weslyg.tk/spotlight_chrome/DB_wors.json', true);
Db.onreadystatechange = function (aEvt1) {
	if (Db.readyState == 4) {
		 if(Db.status == 200){
			dbase = JSON.parse(Db.responseText);
		}
		 else if (Db.status !== 200) { //берем локальные данные 
				Db1.open('GET', './setting backup/DB_wors.json', true);
				Db1.onreadystatechange = function (aEvt1) {
					if (Db1.readyState == 4) {
						 if(Db1.status == 200){
							dbase = JSON.parse(Db1.responseText);
						}
						 else {
							console.log("Ошибочка чет");
							}
						}
					};
					Db1.send(null);
				}
			}
		};
		Db.send(null);


//Мач чистого ключа (второй список)

document.querySelector('#start').addEventListener('click', function() {
myVar = document.getElementById('google').value;

var MatchingStart = myVar.match(pattern); //матчим строку по патерну 

if (MatchingStart != null) {
	var MatchingMiddle = MatchingStart.toString();
	var Matching = MatchingMiddle.replace( " ", "");
	console.log("мы тут!1");
		}

	// матч чистого ключа
		if (Aria[myVar] != undefined) {
			window.open( Aria[myVar] );
			console.log("мы тут!2");
			}

				// матч ключа в подстроке (с удалением)
		else if (Matching in Ari) {
				var Str = Matching.toString();    // вместо обьекта делаем сторку
				var ComMatch = Str.toLowerCase();   //опускаем ее для избежания прожатия заглавных ключей
				var resql = myVar.replace( pattern, "");
				window.open(Ari[ComMatch] + resql);
				console.log("мы тут!3");
					}

				// Матч http ftp
		else if (myVar.match(link)) {
				window.open(myVar);
				console.log("мы тут!4");
					}

				//матч localhost
		else if (myVar.match(locl))  {
					console.log("мы тут!5");
					window.open("http://" + myVar);
				}

				//матч ключей сайтов
		else if (myVar in dbase){
			window.open(dbase[myVar]);
			console.log("мы тут!6");
		}

		else if ((myVar.charAt(myVar.length-3) == '.') || (myVar.charAt(myVar.length-4) == '.')) {
				window.open('http://' + myVar);// подумать! 
				console.log("мы тут!7");
					}

		 //На гуглю
		 else {
			window.open('https://www.google.ru/search?q=' + myVar);
			// console.log("Идем в гуглю");
					}
});