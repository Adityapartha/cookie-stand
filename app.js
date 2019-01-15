'use strict';

function getRandomInt(min, max) {
    
   
   return Math.floor(Math.random() * (max - min )) + min;
}
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var PikeUl = document.getElementById('Pike');
var SeaTacAirportUl = document.getElementById('SeaTacAirport');
var SeattleCenterUl = document.getElementById('SeattleCenter');
var CapitolHillUl = document.getElementById('CapitolHill');
var AlkiUl = document.getElementById('Alki');
var i;

var Pike = {
    location: '1st and pike',
    minimumCustomers: 23,
    maximumCustomers: 65,
    averageCookies: 6.3,
    render: function() {
        var cookiesTotal = 0;
        for (var i = 0 ; i < time.length ; i++) {
            var PikeEl = document.createElement('li');
            var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
            var amountOfCookies = amountOfCustomers * this.averageCookies;
            amountOfCookies=Math.floor(amountOfCookies);
            PikeEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
            PikeUl.appendChild(PikeEl);

            console.log('amount of cookies', amountOfCookies);   
        cookiesTotal=cookiesTotal + amountOfCookies;
     
}   
var PikeEl = document.createElement('li');

PikeEl.textContent = `(total = ${cookiesTotal} cookies)`;
PikeUl.appendChild(PikeEl);
        
    }
}
Pike.render();

var SeaTacAirport = {
    location: '1st and pike',
    minimumCustomers: 3,
    maximumCustomers: 24,
    averageCookies: 1.2,
    render: function() {
        var cookiesTotal =0;
        for (var i = 0 ; i < time.length ; i++) {
            var SeaTacAirportEl = document.createElement('li');
            console.log(SeaTacAirportEl);
            var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
            console.log(amountOfCustomers);
            var amountOfCookies = amountOfCustomers * this.averageCookies;
            console.log(amountOfCookies);
            amountOfCookies=Math.floor(amountOfCookies);
            console.log(amountOfCookies);
            SeaTacAirportEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
            SeaTacAirportUl.appendChild(SeaTacAirportEl);
            console.log('amount of cookies', amountOfCookies);
            cookiesTotal=cookiesTotal + amountOfCookies;
        }    
    
    var SeaTacAirportEl = document.createElement('li');
    SeaTacAirportEl.textContent = `(total = ${cookiesTotal} cookies)`;
    SeaTacAirportUl.appendChild(SeaTacAirportEl);
    }
}
SeaTacAirport.render();

var SeattleCenter = {
    location: '1st and pike',
    minimumCustomers: 11,
    maximumCustomers: 38,
    averageCookies: 3.7,
    render: function() {
        var cookiesTotal=0;
        for (var i = 0 ; i < time.length ; i++) {
            var SeattleCenterEl = document.createElement('li');
            // console.log(SeattleCenterEl);
            var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
            console.log(amountOfCustomers);
            var amountOfCookies = amountOfCustomers * this.averageCookies;
            console.log(amountOfCookies);
            amountOfCookies=Math.floor(amountOfCookies);
            console.log(amountOfCookies);
            SeattleCenterEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
            SeattleCenterUl.appendChild(SeattleCenterEl);
            console.log('amount of cookies', amountOfCookies);
            cookiesTotal=cookiesTotal + amountOfCookies;
        }
        var SeattleCenterEl = document.createElement('li');
        SeattleCenterEl.textContent = `(total = ${cookiesTotal} cookies)`;
        SeattleCenterUl.appendChild(SeattleCenterEl);
    }
}
SeattleCenter.render();

var CapitolHill = {
    location: '1st and pike' ,
    minimumCustomers: 20,
    maximumCustomers: 38,
    averageCookies: 2.3,
    render: function() {
        var cookiesTotal = 0;
        for (var i = 0 ; i < time.length ; i++) {
            var CapitolHillEl = document.createElement('li');
           
            var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
            var amountOfCookies = amountOfCustomers * this.averageCookies;
            amountOfCookies=Math.floor(amountOfCookies);
            
            CapitolHillEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
            CapitolHillUl.appendChild(CapitolHillEl);
            console.log('amount of cookies', amountOfCookies);
            cookiesTotal=cookiesTotal + amountOfCookies;
        }
        var CapitolHillEl = document.createElement('li');
        CapitolHillEl.textContent = `(total= ${cookiesTotal} cookies)`;
        CapitolHillUl.appendChild(CapitolHillEl);
    }    
}
CapitolHill.render();

var Alki = {
    location: '1st and pike' ,
    minimumCustomers: 2,
    maximumCustomers: 16,
    averageCookies: 4.6,
    render: function() {
        var cookiesTotal = 0
        for(var i =0 ; i < time.length; i++) {
        var AlkiEl = document.createElement('li');
        
        var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
        
        var amountOfCookies = amountOfCustomers * this.averageCookies;
        
        amountOfCookies=Math.floor(amountOfCookies);
        
        AlkiEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
        AlkiUl.appendChild(AlkiEl);
        console.log('amount of cookies', amountOfCookies);
        cookiesTotal = cookiesTotal + amountOfCookies;
        }
        var AlkiEl = document.createElement('li');
        AlkiEl.textContent = `(total = ${cookiesTotal} cookies)`;
        AlkiUl.appendChild(AlkiEl);
    }        
}
Alki.render();