gdjs.MenuCode = {};
gdjs.MenuCode.GDtitleObjects1= [];
gdjs.MenuCode.GDtitleObjects2= [];
gdjs.MenuCode.GDNewParticlesEmitterObjects1= [];
gdjs.MenuCode.GDNewParticlesEmitterObjects2= [];
gdjs.MenuCode.GDNewBBTextObjects1= [];
gdjs.MenuCode.GDNewBBTextObjects2= [];
gdjs.MenuCode.GDNewBBText2Objects1= [];
gdjs.MenuCode.GDNewBBText2Objects2= [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "johnmain.ogg", true, 100, 1);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDtitleObjects1.length = 0;
gdjs.MenuCode.GDtitleObjects2.length = 0;
gdjs.MenuCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.MenuCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.MenuCode.GDNewBBTextObjects1.length = 0;
gdjs.MenuCode.GDNewBBTextObjects2.length = 0;
gdjs.MenuCode.GDNewBBText2Objects1.length = 0;
gdjs.MenuCode.GDNewBBText2Objects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
