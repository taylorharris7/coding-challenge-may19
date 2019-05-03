function powerOn() {
  ship.powerOn = true;
}

function countModules() {
  return availableModules.length;
}

function countEssential() {
  var essentialModules = 0;
  
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].essential) {
      essentialModules++;
    } 
  }
  
  return essentialModules;
}