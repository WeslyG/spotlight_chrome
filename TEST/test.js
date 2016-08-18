// var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [1,2,3] }';

// user = JSON.parse(user);

// var Find = "name";
// alert(Find);
// alert( user.Find ); // 1



var request = new XMLHttpRequest();

request.open('GET', 'bd.json');

request.onreadystatechange = function(e) {
    if (this.readyState = 4) {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            // console.log(user);
        }
        else {
        	
        }
    }
}

request.send(null);
