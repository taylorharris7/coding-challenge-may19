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

function findModuleIndex(moduleName) {
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].name == moduleName && availableModules[i].essential) {
      return i;
    }
  }
}

function loadModule(index) {
  ship.modules.push(availableModules[index]);
}
loadModule(findModuleIndex('life-support'));
loadModule(findModuleIndex('propulsion'));
loadModule(findModuleIndex('navigation'));
loadModule(findModuleIndex('communication'));

function resetLARRY() { 
  for (var i = 0; i < 10; i++) {
    LARRY.quack();
  }
}
resetLARRY();

function setMessage() {
  radio.message = JSON.stringify(navigation);
}
setMessage();

function activateBeacon() {
  radio.beacon = true;
}

function setFrequency() {
  radio.frequency = (radio.range.low + radio.range.high) / 2;
}

function initialize() {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

function calibrateX() {
  var signal;
  for (var i = 0; i < 12; i++) {
    signal = checkSignal();
    
    if (signal) {
      navigation.x = signal;
      break;
    }
  }
}
calibrateX();
