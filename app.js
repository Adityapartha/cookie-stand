'use strict';



// var Pike = {
//     location: '1st and pike',
//     minimumCustomers: 23,
//     maximumCustomers: 65,
//     averageCookies: 6.3,
//     render: function() {
//         var cookiesTotal = 0;
//         for (var i = 0 ; i < time.length ; i++) {
//             var PikeEl = document.createElement('li');
//             var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
//             var amountOfCookies = amountOfCustomers * this.averageCookies;
//             amountOfCookies=Math.floor(amountOfCookies);
//             PikeEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
//             PikeUl.appendChild(PikeEl);

//             console.log('amount of cookies', amountOfCookies);   
//         cookiesTotal=cookiesTotal + amountOfCookies;
     
// }   
// var PikeEl = document.createElement('li');

// PikeEl.textContent = `(total = ${cookiesTotal} cookies)`;
// PikeUl.appendChild(PikeEl);
        
//     }
// }
// Pike.render();

// var SeaTacAirport = {
//     location: '1st and pike',
//     minimumCustomers: 3,
//     maximumCustomers: 24,
//     averageCookies: 1.2,
//     render: function() {
//         var cookiesTotal =0;
//         for (var i = 0 ; i < time.length ; i++) {
//             var SeaTacAirportEl = document.createElement('li');
//             console.log(SeaTacAirportEl);
//             var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
//             console.log(amountOfCustomers);
//             var amountOfCookies = amountOfCustomers * this.averageCookies;
//             console.log(amountOfCookies);
//             amountOfCookies=Math.floor(amountOfCookies);
//             console.log(amountOfCookies);
//             SeaTacAirportEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
//             SeaTacAirportUl.appendChild(SeaTacAirportEl);
//             console.log('amount of cookies', amountOfCookies);
//             cookiesTotal=cookiesTotal + amountOfCookies;
//         }    
    
//     var SeaTacAirportEl = document.createElement('li');
//     SeaTacAirportEl.textContent = `(total = ${cookiesTotal} cookies)`;
//     SeaTacAirportUl.appendChild(SeaTacAirportEl);
//     }
// }
// SeaTacAirport.render();

// var SeattleCenter = {
//     location: '1st and pike',
//     minimumCustomers: 11,
//     maximumCustomers: 38,
//     averageCookies: 3.7,
//     render: function() {
//         var cookiesTotal=0;
//         for (var i = 0 ; i < time.length ; i++) {
//             var SeattleCenterEl = document.createElement('li');
//             // console.log(SeattleCenterEl);
//             var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
//             console.log(amountOfCustomers);
//             var amountOfCookies = amountOfCustomers * this.averageCookies;
//             console.log(amountOfCookies);
//             amountOfCookies=Math.floor(amountOfCookies);
//             console.log(amountOfCookies);
//             SeattleCenterEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
//             SeattleCenterUl.appendChild(SeattleCenterEl);
//             console.log('amount of cookies', amountOfCookies);
//             cookiesTotal=cookiesTotal + amountOfCookies;
//         }
//         var SeattleCenterEl = document.createElement('li');
//         SeattleCenterEl.textContent = `(total = ${cookiesTotal} cookies)`;
//         SeattleCenterUl.appendChild(SeattleCenterEl);
//     }
// }
// SeattleCenter.render();

// var CapitolHill = {
//     location: '1st and pike' ,
//     minimumCustomers: 20,
//     maximumCustomers: 38,
//     averageCookies: 2.3,
//     render: function() {
//         var cookiesTotal = 0;
//         for (var i = 0 ; i < time.length ; i++) {
//             var CapitolHillEl = document.createElement('li');
           
//             var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
//             var amountOfCookies = amountOfCustomers * this.averageCookies;
//             amountOfCookies=Math.floor(amountOfCookies);
            
//             CapitolHillEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
//             CapitolHillUl.appendChild(CapitolHillEl);
//             console.log('amount of cookies', amountOfCookies);
//             cookiesTotal=cookiesTotal + amountOfCookies;
//         }
//         var CapitolHillEl = document.createElement('li');
//         CapitolHillEl.textContent = `(total= ${cookiesTotal} cookies)`;
//         CapitolHillUl.appendChild(CapitolHillEl);
//     }    
// }
// CapitolHill.render();

// var Alki = {
//     location: '1st and pike' ,
//     minimumCustomers: 2,
//     maximumCustomers: 16,
//     averageCookies: 4.6,
//     render: function() {
//         var cookiesTotal = 0
//         for(var i =0 ; i < time.length; i++) {
//         var AlkiEl = document.createElement('li');
        
        // var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
        
        // amountOfCookies=Math.floor(amountOfCookies);
        
        // AlkiEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
        // AlkiUl.appendChild(AlkiEl);
        // console.log('amount of cookies', amountOfCookies);
        // cookiesTotal = cookiesTotal + amountOfCookies;
        // var AlkiEl = document.createElement('li');
        // AlkiEl.textContent = `(total = ${cookiesTotal} cookies)`;
        // AlkiUl.appendChild(AlkiEl);
//     }        
// }
// Alki.render();
function getRandomInt(min, max) {
   return Math.ceil(Math.random() * (max - min )) + min;
}
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookiesTotal = 0;
var allPlaces = [];
var chatForm = document.getElementById('chat-form');
var hourlyTotals = [];


function newStores(event){
  event.preventDefault();
  console.log('form sumbitted');

  var locationName = document.getElementById('locationName');
  var minCustomers = document.getElementById('minCustomers');
  var maxCustomers = document.getElementById('maxCustomers');
  var avgCookies = document.getElementById('avgCookies');


  if (!event.target.locationName.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.avgCookies.value) {
    return alert('Fields cannot be empty!');      
  }
 event.target.locationName.value = null;
 event.target.minCustomers.value = null;
 event.target.maxCustomers.value = null;
 event.target.avgCookies.value = null;

 new newLocation(locationName, minCustomers, maxCustomers, avgCookies);
 renderAllPlaces();
 allPlaces.push(this);

}
chatForm.addEventListener('sumbit', newStores);

CookiesStores.prototype.hourCookies= function (){
    for (var i = 0; i < time.length; i++) {
     this.hourCookiesCustomers.push(getRandomInt(this.minimumCustomers, this.maximumCustomers));
     this.totalCookies = this.totalCookies + this.hourCookiesCustomers[i];
    }
}


var placesTable = document.getElementById('location');

function CookiesStores(location, minimumCustomers, maximumCustomers, averageCookies) {
    this.location = location;
    this.minimumCustomers = minimumCustomers;
    this.maximumCustomers = maximumCustomers;
    this.averageCookies = averageCookies;
    this.hourCookiesCustomers =[];
    this.totalCookies =0;
    this.salmons = 0;
    allPlaces.push(this);
}

new CookiesStores('Pike', 23, 65, 6.3);
new CookiesStores('SeaTacAirport', 3, 24, 1.2);
new CookiesStores('SeattleCenter', 11, 38, 3.7);
new CookiesStores('CapitolHill', 20, 38, 2.3);
new CookiesStores('Alki', 2, 16, 4.6);


CookiesStores.prototype.render = function() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td'); 
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    for (var i = 0; i < time.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.hourCookiesCustomers[i];
        trEl.appendChild(tdEl);
    }
        tdEl = document.createElement('td')
        tdEl.textContent = this.totalCookies;
        trEl.appendChild(tdEl); 
        placesTable.appendChild(trEl);
    };

    for (var a=0; a< time.length; a++){
        var totals=0
        for (var b=0; b < allPlaces.length; b++){
            totals += allPlaces[b].hourCookiesCustomers[a];
        }
        hourlyTotals.push(totals);
    }
    var allTotal = 0;
    for (var e =0; e < time.length; e++) {
        allTotal += hourlyTotals[e];
        console.log(allTotal)

};
function makeHeaderRow() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    var blackTh = document.createElement('th');
    trEl.appendChild(blackTh);
    for (var i = 0; i < time.length; i++) {
        thEl = document.createElement('th');
        thEl.textContent= time[i];
        trEl.appendChild(thEl);
    }
    thEl = document.createElement('th')
    thEl.textContent = 'total';
    trEl.appendChild(thEl);
    placesTable.appendChild(trEl);
    

}
function footerRender() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = 'hourTotal';
    trEl.appendChild(tdEl);
 var totalTotal =0
    for (var i =0; i < time.length; i++){
       var totalPerHour = 0; 
         
        for(var j = 0; j < allPlaces.length; j++) {
            totalPerHour += allPlaces[j].hourCookiesCustomers[i];

        }

        totalTotal += totalPerHour
        tdEl = document.createElement('td');
        console.log(totalPerHour);
        tdEl.textContent = totalPerHour;
        trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
        tdEl.textContent= totalTotal;
        trEl.appendChild(tdEl);
        placesTable.appendChild(trEl);
}
//       for(var i =0; i < time.length; i++) {
// var hourlyTotals =0;
//   for (var j =0; j < storeData.length; j++){
//       hourlyTotals += storeData[j].hourCookiesCustomers[i]
//   }
//       sumOfTotals += hourlyTotals;
  
// tdEl = document.createElement('td');
// tdEl.textContent = hourlyTotals;
// trEl.appendChild(tdEl)
// }
// tdEl = document.createElement('td');
// tdEl.textContent = sumOfTotals;
// trEl.appendChild(tdEl);
// Table.appendChild(trEl); 
     
     
function renderAllPlaces(){
    for (var i = 0; i < allPlaces.length; i++){
        allPlaces[i].hourCookies();
        allPlaces[i].render();
    }
    // allPlaces[0].footerRender();
}  


makeHeaderRow();
renderAllPlaces();
footerRender();
console.log(allPlaces);
