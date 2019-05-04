function powerOn() {
  ship.powerOn = true;
}

function countModules() {
  return availableModules.length;
}

function countEssential() {
  var essentialModule = 0;
  
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].essential) {
      essentialModule++;
    }
  }
  
  return essentialModule;
}

function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

function loadIntoShip() {
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].name == 'life-support') {
      loadModule(i);
    }
  }
}
loadIntoShip();
