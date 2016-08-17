//Designed by Weslyg 08.07.2016
'use strict';
//hey you!

const DESKTOP_MEDIA = ['screen', 'window'];
var myVar;
var Ari;

//функция автофокуса поля ввода
document.getElementById('google').focus();

//Важно блять!
//обработка закрытия по потере фокуса
document.getElementById('google').onblur = function() {
   window.close();
}

// проверочка на Энтр (спизженно)
document.getElementById("google")
    .addEventListener("keyup", function(event) {
    event.preventDefault();

// обработчик энтра плюс Эскейпа
    if (event.keyCode == 13) {
        document.getElementById("start").click();
    }
    else if (event.keyCode == 27)
    {
       window.close();
    }
  });



// var xhr = new xhrquest();
// // xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
// xhr.open("GET", 'bd.json', true);
// xhr.send();

var req = new XMLHttpRequest();
req.open('GET', 'KeyDB.json', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
      console.log(req.responseText);
      Ari = JSON.parse(req.responseText);
  }
     else {
      console.log("Error loading page\n");
  }
  }
};
req.send(null);


console.log(Ari);

//Запуск по кнопке start 
document.querySelector('#start').addEventListener('click', function() {
myVar = document.getElementById('google').value;
    if (Ari[myVar] != undefined) {
    window.open( Ari[myVar] );
    window.close();
    }
    else {
      console.log ("что то пошло не так(");
      window.open('https://www.google.ru/search?q=' + myVar);
      window.close();
      // прописать анимашку тут! будет зачетно) желательно еще с трясущимся текстом) 
     // или проще) просто слать на гугл в случае если не нашли то, что было нужно.
     
    }

});






// if (xhr.status != 200) {
//     alert( xhr.status + ': ' + xhr.statusText );
//     }
//     else 


// var xhr = new xhrquest();
// // xhr.open('GET', 'bd.json', false);
// xhr.open("GET", '/bd.json' );
// xhr.send();

//       if ((xhr.status == 200) || (xhr.status == 304)) {
//             var Ari = JSON.parse(xhr.responseText);
//             if (myVar in Ari) { // наличие 
        
//         for (var key2 in Ari) { //перебираем все
//                 var que = (Ari[myVar]);
//                     }
//                 console.log(que);
//                 }
//             }
//     else {
//      window.open('https://www.google.ru/search?q=' + myVar); 
//   }
//    window.close();
// });





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



//https://www.google.ru/search?newwindow=1&tbm=isch&q=
//
