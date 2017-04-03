var btn = document.querySelector('#suggestCall');
var weather = document.querySelector('.weatherChoice');
var timeArrived = document.querySelector('.timeArrivedChoice');
var health = document.querySelector('.healthChoice');
var inputArea = document.querySelector('.inputArea')

var suggestionTable = document.getElementById('suggest').innerHTML;
var template = Handlebars.compile(suggestionTable);


btn.addEventListener('click', function(){


  var activities =  [
  {name : 'mix', activity : "Go home or to a friend and practice mixing some music"},
  {name : 'football', activity : "Go to UCT or go home to Simon's Town and play soccer"},
  {name : 'rest', activity : "Go home and take it easy to recover"},
  {name : 'visit', activity : "See if any friends are available for a visit in the area (especially during traffic)"},
  {name : 'food', activity : "Go home and make a meal for yourself and your family"},
  {name : 'work', activity : "Stay late and work hard on your code"},
  {name : 'dogWalk', activity : "Go home and take your dog for a walk"},
  {name : 'sleep', activity : "Go home and go to sleep and/or get an early night! Take care of yourself"},
  {name : 'nature', activity : "Enjoy the ocean or the mountain and get into the sunshine"},
  {name : 'hide', activity : "Hide in my bed and wait for things to get better"}
];
if((timeArrived.value !== 'notOption') && (health.value !== 'notOption') && (weather.value !== 'notOption')){
if(timeArrived.value == '6:45' || timeArrived.value =='7:15'){
  var a = 'early';
  var b = "won't";
}
else if(timeArrived.value == '8:00'){
  var a = "on time";
  var b = "might";
}
else if(timeArrived.value == '9:00'){
  var a = "late";
  var b = "will";
}

if (weather.value == 'sunny'){
  var c = "beautiful";
  var d = "would";
}
else if (weather.value == 'mild'){
  var c = "mild";
  var d = "might";
}
else if(weather.value == 'lightRain' || weather.value == 'hardRain'){
  var c = "kak"
  var d = "will not"
  for (var i=0;i<activities.length;i++){
    if (activities[i].name == 'nature' || activities[i].name == 'football' || activities[i].name == 'dogWalk'){
      activities.splice(i, 1)}
    }
    // console.log(activities)
  }
if (health.value == 'well'){
  var f = "well";
  var g = "getting outside while there is still sunshine";
}
else if (health.value == 'tired'){
  var f = "tired";
  var g = "going home and getting an early night";
  for (var i=0;i<activities.length;i++){
    if (activities[i].name == 'visit' || activities[i].name == 'work' || activities[i].name == 'football'){
      activities.splice(i, 1)}
    }
}
else if (health.value == "sickFlu" || health.value == "sickStomach"){
  var f = "sick";
  var g = "going home to recover and rest";
  for (var i=0;i<activities.length;i++){
    if (activities[i].name == 'nature' || activities[i].name == 'visit' || activities[i].name == 'football' || activities[i].name == 'dogWalk' || activities[i].name == 'work'){
      activities.splice(i, 1)}
    }
}

var sentence = "You arrived " + a + " today, so you " + b + " have to deal with a lot of traffic. It is a " + c + " day, so going outside " + d + " be a good idea. As you are feeling " + f + ", think about " + g + "."
var suggestPop = template({
  sentence,
  activities
})
inputArea.insertAdjacentHTML('beforeend', suggestPop);
// suggestPop.style.display = 'block';
// var suggestionDiv = document.querySelector('#suggestionPopUp');
// suggestionDiv.style.display='block';
var suggestionDiv = document.querySelector('#suggestionPopUp');
suggestionDiv.style.display='block';
setTimeout(function(){
  suggestionDiv.classList.remove('move');
},100)
weather.value = "notOption";
health.value = "notOption";
timeArrived.value = "notOption";
}
else{
  alert('Please make sure you have selected an option for weather, health and time arrived.')
}
});



function removeSuggest(){
  var suggestionDiv = document.querySelector('#suggestionPopUp');
suggestionDiv.classList.add('move');


setTimeout(function(){
  inputArea.removeChild(suggestionDiv);
},1000)
}
