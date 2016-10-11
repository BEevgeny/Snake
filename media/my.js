var txta = document.getElementById('textarea'); // поиск вывода
//txta.innerHTML = 100500; // вывод на экран
var	snake = "@";


/*var div = document.createElement('div');
div.innerHTML = '@!@!@';
//textarea.appendChild(div);

document.body.insertBefore(div, document.body.appendChild[1)
*/


function square(sizex,sizey) {
	for (var i = 0; i <= sizey; i++) {
	txta.innerHTML += "\n"; 
		for (var j = 0; j < sizex; j++) {
		txta.innerHTML += ".";
		}
	}
}
square(45,20)



//txta.innerHTML += div;





/*
function area(size, type) {
    var t   = document.createElement ("table"), s = "",
        td  = "<td style='padding:10px;'></td>";
        blue = "<td style='padding:10px; background: blue;'></td>";
    t.border = "1";
    for (var i = 0; i < size; i++) {
        s += "<tr>";
        for (var j = 0; j < size; j++) {
            if (type === 1) s += i - j > size - (size + 1) ? blue : td;
//          if (type === 2) s += (i + j) % 3 === 1 ? blue : td;
        }
        s += "</tr>";
    }
    t.innerHTML = s;
    return t;
}

 window.addEventListener ("load", function () {
        document.body.appendChild (area (10, 1));
 //       document.body.appendChild (area (10, 2));
    });*/