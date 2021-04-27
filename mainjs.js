
let name=prompt("Adınızı yazınız:")
let nameDOM=document.querySelector("#name")
nameDOM.innerHTML= name;

let date= new Date();
let day=date.getDay();

let dayDOM=document.querySelector("#day");

setInterval(() => {
	timer()
}, 1000);

function timer() {
	let date_time = new Date();
	var time = date_time.toLocaleTimeString();
	document.querySelector("#time").innerHTML = time;
};


switch(day){
    case 0:
        day="Pazar"
        break;
    case 1:
        day="Pazartesi"
        break;
    case 2:
        day="Salı"
        break;
    case 3:
        day="Çarşamba"
        break;
    case 4:
    day="Perşembe"
    break;
    case 5:
        day="Cuma"
        break;
    case 6:
        day="Cumartesi"
        break;
    
}
dayDOM.innerHTML=day;
    
console.log(day)