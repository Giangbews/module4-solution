
(function () {

var names = ["Giang", "John", "Larry", "Son", "Hoang", "Linh", "Lan", "luyen", "Nam"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'l') {
    byeSpeaker.speak(names[i]) ;
  } 
  else {
    helloSpeaker.speak(names[i]) ;
  }
}

})();
