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