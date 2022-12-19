
gdjs.evtsExt__LinearMovement__LinearMovement = gdjs.evtsExt__LinearMovement__LinearMovement || {};

/**
 * Behavior generated from Linear movement
 */
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement = class LinearMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpeedX = behaviorData.SpeedX !== undefined ? behaviorData.SpeedX : Number("0") || 0;
    this._behaviorData.SpeedY = behaviorData.SpeedY !== undefined ? behaviorData.SpeedY : Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SpeedX !== newBehaviorData.SpeedX)
      this._behaviorData.SpeedX = newBehaviorData.SpeedX;
    if (oldBehaviorData.SpeedY !== newBehaviorData.SpeedY)
      this._behaviorData.SpeedY = newBehaviorData.SpeedY;

    return true;
  }

  // Properties:
  
  _getSpeedX() {
    return this._behaviorData.SpeedX !== undefined ? this._behaviorData.SpeedX : Number("0") || 0;
  }
  _setSpeedX(newValue) {
    this._behaviorData.SpeedX = newValue;
  }
  _getSpeedY() {
    return this._behaviorData.SpeedY !== undefined ? this._behaviorData.SpeedY : Number("0") || 0;
  }
  _setSpeedY(newValue) {
    this._behaviorData.SpeedY = newValue;
  }
}

/**
 * Shared data generated from Linear movement
 */
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.SharedData = class LinearMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._LinearMovement_LinearMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._LinearMovement_LinearMovementSharedData = new gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._LinearMovement_LinearMovementSharedData;
}

// Methods:
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce((gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX()), (gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedY()), 0);
}
}}

}


};

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("LinearMovement::LinearMovement", gdjs.evtsExt__LinearMovement__LinearMovement.LinearMovement);
