
gdjs.evtsExt__FireBullet__FireBullet = gdjs.evtsExt__FireBullet__FireBullet || {};

/**
 * Behavior generated from Fire bullets
 */
gdjs.evtsExt__FireBullet__FireBullet.FireBullet = class FireBullet extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.FireCooldown = behaviorData.FireCooldown !== undefined ? behaviorData.FireCooldown : Number("0.1") || 0;
    this._behaviorData.HasJustFired = false;
    this._behaviorData.FiringArc = behaviorData.FiringArc !== undefined ? behaviorData.FiringArc : Number("45") || 0;
    this._behaviorData.BulletQuantity = behaviorData.BulletQuantity !== undefined ? behaviorData.BulletQuantity : Number("1") || 0;
    this._behaviorData.AngleVariance = behaviorData.AngleVariance !== undefined ? behaviorData.AngleVariance : Number("0") || 0;
    this._behaviorData.RotateBullet = behaviorData.RotateBullet !== undefined ? behaviorData.RotateBullet : true;
    this._behaviorData.AmmoQuantity = Number("0") || 0;
    this._behaviorData.ShotsPerReload = behaviorData.ShotsPerReload !== undefined ? behaviorData.ShotsPerReload : Number("0") || 0;
    this._behaviorData.ReloadDuration = behaviorData.ReloadDuration !== undefined ? behaviorData.ReloadDuration : Number("1") || 0;
    this._behaviorData.MaxAmmo = behaviorData.MaxAmmo !== undefined ? behaviorData.MaxAmmo : Number("0") || 0;
    this._behaviorData.ShotsBeforeNextReload = Number("0") || 0;
    this._behaviorData.TotalShotsFired = Number("0") || 0;
    this._behaviorData.TotalBulletsCreated = Number("0") || 0;
    this._behaviorData.StartingAmmo = behaviorData.StartingAmmo !== undefined ? behaviorData.StartingAmmo : Number("0") || 0;
    this._behaviorData.TotalReloadsCompleted = Number("0") || 0;
    this._behaviorData.UnlimitedAmmo = behaviorData.UnlimitedAmmo !== undefined ? behaviorData.UnlimitedAmmo : true;
    this._behaviorData.ReloadInProgress = false;
    this._behaviorData.HeatIncreasePerShot = behaviorData.HeatIncreasePerShot !== undefined ? behaviorData.HeatIncreasePerShot : Number("0") || 0;
    this._behaviorData.HeatLevel = Number("0") || 0;
    this._behaviorData.AutomaticReloading = behaviorData.AutomaticReloading !== undefined ? behaviorData.AutomaticReloading : true;
    this._behaviorData.OverheatDuration = behaviorData.OverheatDuration !== undefined ? behaviorData.OverheatDuration : Number("0") || 0;
    this._behaviorData.LinearCoolingRate = behaviorData.LinearCoolingRate !== undefined ? behaviorData.LinearCoolingRate : Number("0.1") || 0;
    this._behaviorData.ExponentialCoolingRate = behaviorData.ExponentialCoolingRate !== undefined ? behaviorData.ExponentialCoolingRate : Number("0.3") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.FireCooldown !== newBehaviorData.FireCooldown)
      this._behaviorData.FireCooldown = newBehaviorData.FireCooldown;
    if (oldBehaviorData.HasJustFired !== newBehaviorData.HasJustFired)
      this._behaviorData.HasJustFired = newBehaviorData.HasJustFired;
    if (oldBehaviorData.FiringArc !== newBehaviorData.FiringArc)
      this._behaviorData.FiringArc = newBehaviorData.FiringArc;
    if (oldBehaviorData.BulletQuantity !== newBehaviorData.BulletQuantity)
      this._behaviorData.BulletQuantity = newBehaviorData.BulletQuantity;
    if (oldBehaviorData.AngleVariance !== newBehaviorData.AngleVariance)
      this._behaviorData.AngleVariance = newBehaviorData.AngleVariance;
    if (oldBehaviorData.RotateBullet !== newBehaviorData.RotateBullet)
      this._behaviorData.RotateBullet = newBehaviorData.RotateBullet;
    if (oldBehaviorData.AmmoQuantity !== newBehaviorData.AmmoQuantity)
      this._behaviorData.AmmoQuantity = newBehaviorData.AmmoQuantity;
    if (oldBehaviorData.ShotsPerReload !== newBehaviorData.ShotsPerReload)
      this._behaviorData.ShotsPerReload = newBehaviorData.ShotsPerReload;
    if (oldBehaviorData.ReloadDuration !== newBehaviorData.ReloadDuration)
      this._behaviorData.ReloadDuration = newBehaviorData.ReloadDuration;
    if (oldBehaviorData.MaxAmmo !== newBehaviorData.MaxAmmo)
      this._behaviorData.MaxAmmo = newBehaviorData.MaxAmmo;
    if (oldBehaviorData.ShotsBeforeNextReload !== newBehaviorData.ShotsBeforeNextReload)
      this._behaviorData.ShotsBeforeNextReload = newBehaviorData.ShotsBeforeNextReload;
    if (oldBehaviorData.TotalShotsFired !== newBehaviorData.TotalShotsFired)
      this._behaviorData.TotalShotsFired = newBehaviorData.TotalShotsFired;
    if (oldBehaviorData.TotalBulletsCreated !== newBehaviorData.TotalBulletsCreated)
      this._behaviorData.TotalBulletsCreated = newBehaviorData.TotalBulletsCreated;
    if (oldBehaviorData.StartingAmmo !== newBehaviorData.StartingAmmo)
      this._behaviorData.StartingAmmo = newBehaviorData.StartingAmmo;
    if (oldBehaviorData.TotalReloadsCompleted !== newBehaviorData.TotalReloadsCompleted)
      this._behaviorData.TotalReloadsCompleted = newBehaviorData.TotalReloadsCompleted;
    if (oldBehaviorData.UnlimitedAmmo !== newBehaviorData.UnlimitedAmmo)
      this._behaviorData.UnlimitedAmmo = newBehaviorData.UnlimitedAmmo;
    if (oldBehaviorData.ReloadInProgress !== newBehaviorData.ReloadInProgress)
      this._behaviorData.ReloadInProgress = newBehaviorData.ReloadInProgress;
    if (oldBehaviorData.HeatIncreasePerShot !== newBehaviorData.HeatIncreasePerShot)
      this._behaviorData.HeatIncreasePerShot = newBehaviorData.HeatIncreasePerShot;
    if (oldBehaviorData.HeatLevel !== newBehaviorData.HeatLevel)
      this._behaviorData.HeatLevel = newBehaviorData.HeatLevel;
    if (oldBehaviorData.AutomaticReloading !== newBehaviorData.AutomaticReloading)
      this._behaviorData.AutomaticReloading = newBehaviorData.AutomaticReloading;
    if (oldBehaviorData.OverheatDuration !== newBehaviorData.OverheatDuration)
      this._behaviorData.OverheatDuration = newBehaviorData.OverheatDuration;
    if (oldBehaviorData.LinearCoolingRate !== newBehaviorData.LinearCoolingRate)
      this._behaviorData.LinearCoolingRate = newBehaviorData.LinearCoolingRate;
    if (oldBehaviorData.ExponentialCoolingRate !== newBehaviorData.ExponentialCoolingRate)
      this._behaviorData.ExponentialCoolingRate = newBehaviorData.ExponentialCoolingRate;

    return true;
  }

  // Properties:
  
  _getFireCooldown() {
    return this._behaviorData.FireCooldown !== undefined ? this._behaviorData.FireCooldown : Number("0.1") || 0;
  }
  _setFireCooldown(newValue) {
    this._behaviorData.FireCooldown = newValue;
  }
  _getHasJustFired() {
    return this._behaviorData.HasJustFired !== undefined ? this._behaviorData.HasJustFired : false;
  }
  _setHasJustFired(newValue) {
    this._behaviorData.HasJustFired = newValue;
  }
  _getFiringArc() {
    return this._behaviorData.FiringArc !== undefined ? this._behaviorData.FiringArc : Number("45") || 0;
  }
  _setFiringArc(newValue) {
    this._behaviorData.FiringArc = newValue;
  }
  _getBulletQuantity() {
    return this._behaviorData.BulletQuantity !== undefined ? this._behaviorData.BulletQuantity : Number("1") || 0;
  }
  _setBulletQuantity(newValue) {
    this._behaviorData.BulletQuantity = newValue;
  }
  _getAngleVariance() {
    return this._behaviorData.AngleVariance !== undefined ? this._behaviorData.AngleVariance : Number("0") || 0;
  }
  _setAngleVariance(newValue) {
    this._behaviorData.AngleVariance = newValue;
  }
  _getRotateBullet() {
    return this._behaviorData.RotateBullet !== undefined ? this._behaviorData.RotateBullet : true;
  }
  _setRotateBullet(newValue) {
    this._behaviorData.RotateBullet = newValue;
  }
  _getAmmoQuantity() {
    return this._behaviorData.AmmoQuantity !== undefined ? this._behaviorData.AmmoQuantity : Number("0") || 0;
  }
  _setAmmoQuantity(newValue) {
    this._behaviorData.AmmoQuantity = newValue;
  }
  _getShotsPerReload() {
    return this._behaviorData.ShotsPerReload !== undefined ? this._behaviorData.ShotsPerReload : Number("0") || 0;
  }
  _setShotsPerReload(newValue) {
    this._behaviorData.ShotsPerReload = newValue;
  }
  _getReloadDuration() {
    return this._behaviorData.ReloadDuration !== undefined ? this._behaviorData.ReloadDuration : Number("1") || 0;
  }
  _setReloadDuration(newValue) {
    this._behaviorData.ReloadDuration = newValue;
  }
  _getMaxAmmo() {
    return this._behaviorData.MaxAmmo !== undefined ? this._behaviorData.MaxAmmo : Number("0") || 0;
  }
  _setMaxAmmo(newValue) {
    this._behaviorData.MaxAmmo = newValue;
  }
  _getShotsBeforeNextReload() {
    return this._behaviorData.ShotsBeforeNextReload !== undefined ? this._behaviorData.ShotsBeforeNextReload : Number("0") || 0;
  }
  _setShotsBeforeNextReload(newValue) {
    this._behaviorData.ShotsBeforeNextReload = newValue;
  }
  _getTotalShotsFired() {
    return this._behaviorData.TotalShotsFired !== undefined ? this._behaviorData.TotalShotsFired : Number("0") || 0;
  }
  _setTotalShotsFired(newValue) {
    this._behaviorData.TotalShotsFired = newValue;
  }
  _getTotalBulletsCreated() {
    return this._behaviorData.TotalBulletsCreated !== undefined ? this._behaviorData.TotalBulletsCreated : Number("0") || 0;
  }
  _setTotalBulletsCreated(newValue) {
    this._behaviorData.TotalBulletsCreated = newValue;
  }
  _getStartingAmmo() {
    return this._behaviorData.StartingAmmo !== undefined ? this._behaviorData.StartingAmmo : Number("0") || 0;
  }
  _setStartingAmmo(newValue) {
    this._behaviorData.StartingAmmo = newValue;
  }
  _getTotalReloadsCompleted() {
    return this._behaviorData.TotalReloadsCompleted !== undefined ? this._behaviorData.TotalReloadsCompleted : Number("0") || 0;
  }
  _setTotalReloadsCompleted(newValue) {
    this._behaviorData.TotalReloadsCompleted = newValue;
  }
  _getUnlimitedAmmo() {
    return this._behaviorData.UnlimitedAmmo !== undefined ? this._behaviorData.UnlimitedAmmo : true;
  }
  _setUnlimitedAmmo(newValue) {
    this._behaviorData.UnlimitedAmmo = newValue;
  }
  _getReloadInProgress() {
    return this._behaviorData.ReloadInProgress !== undefined ? this._behaviorData.ReloadInProgress : false;
  }
  _setReloadInProgress(newValue) {
    this._behaviorData.ReloadInProgress = newValue;
  }
  _getHeatIncreasePerShot() {
    return this._behaviorData.HeatIncreasePerShot !== undefined ? this._behaviorData.HeatIncreasePerShot : Number("0") || 0;
  }
  _setHeatIncreasePerShot(newValue) {
    this._behaviorData.HeatIncreasePerShot = newValue;
  }
  _getHeatLevel() {
    return this._behaviorData.HeatLevel !== undefined ? this._behaviorData.HeatLevel : Number("0") || 0;
  }
  _setHeatLevel(newValue) {
    this._behaviorData.HeatLevel = newValue;
  }
  _getAutomaticReloading() {
    return this._behaviorData.AutomaticReloading !== undefined ? this._behaviorData.AutomaticReloading : true;
  }
  _setAutomaticReloading(newValue) {
    this._behaviorData.AutomaticReloading = newValue;
  }
  _getOverheatDuration() {
    return this._behaviorData.OverheatDuration !== undefined ? this._behaviorData.OverheatDuration : Number("0") || 0;
  }
  _setOverheatDuration(newValue) {
    this._behaviorData.OverheatDuration = newValue;
  }
  _getLinearCoolingRate() {
    return this._behaviorData.LinearCoolingRate !== undefined ? this._behaviorData.LinearCoolingRate : Number("0.1") || 0;
  }
  _setLinearCoolingRate(newValue) {
    this._behaviorData.LinearCoolingRate = newValue;
  }
  _getExponentialCoolingRate() {
    return this._behaviorData.ExponentialCoolingRate !== undefined ? this._behaviorData.ExponentialCoolingRate : Number("0.3") || 0;
  }
  _setExponentialCoolingRate(newValue) {
    this._behaviorData.ExponentialCoolingRate = newValue;
  }
}

/**
 * Shared data generated from Fire bullets
 */
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.SharedData = class FireBulletSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._FireBullet_FireBulletSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._FireBullet_FireBulletSharedData = new gdjs.evtsExt__FireBullet__FireBullet.FireBullet.SharedData(
      initialData
    );
  }
  return instanceContainer._FireBullet_FireBulletSharedData;
}

// Methods:
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("__FireBullet.FiringCooldown");
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartingAmmo()));
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload()));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("__FireBullet.FiringCooldown");
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUnlimitedAmmo()) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity() - (1));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload() > 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsBeforeNextReload() - (1));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutomaticReloading() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadNeeded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadInProgress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
}
if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ReloadAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOverheatDuration() > 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOverheated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("__FireBullet.OverheatDuration");
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatIncreasePerShot() > 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeatLevel(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel() + ((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatIncreasePerShot())));
}
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalShotsFired(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalShotsFired() + (1));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


{
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasJustFired(false);
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasJustFired() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsUnlimitedAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload()));
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsUnlimitedAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload(Math.min((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload()), (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity())));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadInProgress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__FireBullet.ReloadingTimer") >= (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReloadDuration()) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalReloadsCompleted(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalReloadsCompleted() + (1));
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReloadInProgress(false);
}
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExponentialCoolingRate() > 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeatLevel(Math.max(0, (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel()) - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExponentialCoolingRate()) * (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel())));
}
}}

}


{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearCoolingRate() > 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeatLevel(Math.max(0, (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel()) - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearCoolingRate())));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HeatLevel((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) > 0);
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList14(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireTowardPositionContext_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects1});
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Bullet"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Fire((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XPosition")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YPosition")) || 0 : 0), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireTowardPositionContext_46GDBulletObjects1Objects, (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1[i].getAngleToPosition((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetXPosition")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetYPosition")) || 0 : 0))), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPosition = function(XPosition, YPosition, Bullet, TargetXPosition, TargetYPosition, Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bullet": Bullet
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bullet": gdjs.objectsListsToArray(Bullet)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "XPosition") return XPosition;
if (argName === "YPosition") return YPosition;
if (argName === "TargetXPosition") return TargetXPosition;
if (argName === "TargetYPosition") return TargetYPosition;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.GDBulletObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireTowardPositionContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.repeatCount2 = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.repeatIndex2 = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects4= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects3= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects4= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireContext_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2});
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2);


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.conditionTrue_1.val = ((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity()) == 1);
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Bullet"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2);
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FireSingleBullet((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XPosition")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YPosition")) || 0 : 0), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireContext_46GDBulletObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireContext_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2});
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i].getVariables().get("__FireBullet").getChild("CurrentBulletAngle")).add((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFiringArc()) / ((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity()) - 1));
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3[i].getVariables().get("__FireBullet").getChild("BatchOrderID")).add(1);
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1 */

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.repeatCount2 = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity());
for(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.repeatIndex2 = 0;gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.repeatIndex2 < gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.repeatCount2;++gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.repeatIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Bullet"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2);
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2);


if (true)
{
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FireSingleBullet((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XPosition")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YPosition")) || 0 : 0), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireContext_46GDBulletObjects2Objects, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2[i].getVariables().get("__FireBullet").getChild("CurrentBulletAngle"))) + gdjs.randomInRange(-((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleVariance())), (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleVariance())), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents: 
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1 */

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.conditionTrue_1.val = ((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity()) > 1);
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].getVariables().get("__FireBullet").getChild("CurrentBulletAngle")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0) - (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFiringArc()) / 2);
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].getVariables().get("__FireBullet").getChild("BatchOrderID")).setNumber(0);
}
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReadyToShoot((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasJustFired(true);
}
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.Fire = function(XPosition, YPosition, Bullet, Angle, Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bullet": Bullet
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bullet": gdjs.objectsListsToArray(Bullet)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "XPosition") return XPosition;
if (argName === "YPosition") return YPosition;
if (argName === "Angle") return Angle;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects4.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects4= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects4= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireSingleBulletContext_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2});
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3[i].addPolarForce((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0) + gdjs.randomInRange(-((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleVariance())), (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleVariance())), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 1);
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3[i].returnVariable(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3[i].getVariables().get("__FireBullet").getChild("BulletID")).setNumber((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalBulletsCreated()));
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3[i].returnVariable(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3[i].getVariables().get("__FireBullet").getChild("BatchID")).setNumber((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalShotsFired()));
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3[i].returnVariable(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3[i].getVariables().get("__FireBullet").getChild("BatchOrderID")).setNumber(0);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotateBullet() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2[i].setAngle((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireSingleBulletContext_46GDBulletObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XPosition")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YPosition")) || 0 : 0), "");
}
{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalBulletsCreated(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalBulletsCreated() + (1));
}
}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBullet = function(XPosition, YPosition, Bullet, Angle, Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bullet": Bullet
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bullet": gdjs.objectsListsToArray(Bullet)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "XPosition") return XPosition;
if (argName === "YPosition") return YPosition;
if (argName === "Angle") return Angle;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects3.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.GDBulletObjects4.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireSingleBulletContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOutOfAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReloadInProgress(true);
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1[i].resetTimer("__FireBullet.ReloadingTimer");
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmo = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasJustFired() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFired = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotateBullet() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletRotationEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFiringArc((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArc = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetFiringArcContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngleVariance((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVariance = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAngleVarianceContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBulletQuantity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetBulletQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("RotateBullet") : false);
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotateBullet(false);
}
}}

}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("RotateBullet") : false);
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotateBullet(true);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBullet = function(RotateBullet, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "RotateBullet") return RotateBullet;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetRotateBulletContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("UnlimitedAmmo") : false);
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUnlimitedAmmo(false);
}
}}

}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("UnlimitedAmmo") : false);
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUnlimitedAmmo(true);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmo = function(UnlimitedAmmo, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "UnlimitedAmmo") return UnlimitedAmmo;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetUnlimitedAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFireCooldown((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewCooldown")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldown = function(NewCooldown, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewCooldown") return NewCooldown;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetCooldownContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReloadDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDuration = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetReloadDurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOverheatDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDuration = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetOverheatDurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAmmoQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeatIncreasePerShot((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShot = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetHeatPerShotContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxAmmo((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxAmmo() > 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(Math.min((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MaxAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AmmoQuantity((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmo = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetMaxAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalShotsFired(0);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFired = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalShotsFiredContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalBulletsCreated(0);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalBulletsCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTotalReloadsCompleted(0);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompleted = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ResetTotalReloadsCompletedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsPerReload((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsBeforeNextReload() > (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload()) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShotsBeforeNextReload((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload()));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReload = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetShotsPerReloadContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAutomaticReloading(false);
}
}}

}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAutomaticReloading(true);
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReload = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetAutomaticReloadContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLinearCoolingRate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRate = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetLinearCoolingRateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setExponentialCoolingRate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRate = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.SetExponentialCoolingRateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AmmoGained")) || 0 : 0)));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxAmmo() > 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmmoQuantity(Math.min((gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MaxAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AmmoQuantity((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadNeeded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutomaticReloading() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ReloadAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmo = function(AmmoGained, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "AmmoGained") return AmmoGained;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IncreaseAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBulletQuantity()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.BulletQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleVariance()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVariance = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AngleVarianceContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFiringArc()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArc = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FiringArcContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.min(1, (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel())); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevel = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatLevelContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFireCooldown()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.Cooldown = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReloadDuration()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ReloadDurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOverheatDuration()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatDurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatIncreasePerShot()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShot = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HeatIncreasePerShotContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinearCoolingRate()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.LinearCoolingRateContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExponentialCoolingRate()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ExponentialCoolingRateContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxAmmo()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmo = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.MaxAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalShotsFired()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFired = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalShotsFiredContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalBulletsCreated()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalBulletsCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTotalReloadsCompleted()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompleted = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.TotalReloadsCompletedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.AmmoQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsBeforeNextReload()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReload = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsBeforeNextReloadContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload()); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReload = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.ShotsPerReloadContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.max(0, (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Cooldown((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("__FireBullet.FiringCooldown"))); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.CooldownTimeLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__FireBullet.OverheatDuration") > 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.max(0, (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOverheatDuration()) - (( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("__FireBullet.OverheatDuration"))); }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.OverheatTimeLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReloadInProgress() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgress = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadInProgressContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1 */

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOverheated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1 */

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFiringCooldownActive((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1 */

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadNeeded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReloadInProgress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOutOfAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShoot = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReadyToShootContext.eventsList4(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutomaticReloading() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsAutomaticReloadingEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUnlimitedAmmo() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmo = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsUnlimitedAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsUnlimitedAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmmoQuantity() == 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmo = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOutOfAmmoContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsPerReload() > 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShotsBeforeNextReload() == 0 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeeded = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsReloadNeededContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.conditionTrue_2 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition2IsTrue_2 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeatLevel() >= 1 ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.push(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2);
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.conditionTrue_2 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition1IsTrue_1;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.conditionTrue_2.val = ((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).OverheatTimeLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) > 0);
}
if( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final.push(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1_1final, gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsOverheatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1);

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.conditionTrue_1 = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.condition0IsTrue_0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.conditionTrue_1.val = ((( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CooldownTimeLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) > 0);
}
}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActive = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.IsFiringCooldownActiveContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("FireBullet::FireBullet", gdjs.evtsExt__FireBullet__FireBullet.FireBullet);
