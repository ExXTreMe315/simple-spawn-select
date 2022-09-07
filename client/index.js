"use strict";
/// <reference path="typings/altv-client.d.ts"/>
/// <reference path="typings/natives.d.ts"/>
import * as alt from "alt-client";
import * as game from "natives";

alt.onServer("freeroam:switchInOutPlayer", (in_switch, instant_switch, switch_type) => {
  if (in_switch) {
    game.switchInPlayer(alt.Player.local.scriptID);
  } else {
    game.switchOutPlayer(alt.Player.local.scriptID, instant_switch, switch_type);
  }
});

//////////////////////////////////////---------------------Spawner---------------------//////////////////////////////////////

// Webview aufbauen und abfragen
alt.onServer('Spawnselect', () => {
  const webview = new alt.WebView('http://resource/client/html/index.html');
  webview.focus();

  alt.showCursor(true);
  alt.toggleGameControls(false);
  
  webview.on('spawn', spawnpoint => {
    console.log("Freeroam:Spawnpoint recived("+spawnpoint+")");

    if(spawnpoint == "stadtpark") {
      alt.emitServer('spawn:stadtpark');
    }else if(spawnpoint == "airport") {
      alt.emitServer('spawn:airport');      
    }else if(spawnpoint == "harmony") {
      alt.emitServer('spawn:harmony');      
    }else if(spawnpoint == "paleto") {
      alt.emitServer('spawn:paleto');      
    }else{
      console.error("Ausgewählert Spawnpunkt nicht verfügbar! (./server/index.js:4)");
      console.error("Recived Spawnpoint: "+spawnpoint);
    }

    // Webview ausschalten
    alt.onServer('playerSpawned', () => {
      alt.showCursor(false);
      alt.toggleGameControls(true);
      game.doScreenFadeIn(1000);
      webview.destroy();
    });
  });
});
