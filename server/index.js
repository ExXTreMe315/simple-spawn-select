import * as alt from "alt-server";
import * as chat from "chat";

const spawns = [
  { x: 200.664,   y: -935.288,  z: 30.75 }, // Stadtpark
  { x: -1037.867, y: -2738.032, z: 20.25 }, // Airport
  { x: 1181.500,  y: 2651.500,  z: 37.90 }, // Harmony
  { x: 107.197,   y: 6606.668,  z: 31.85 } // Paleto Bay
];

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

alt.on("playerConnect", (player) => {

  alt.emitClient(player, "freeroam:switchInOutPlayer", false, 0, 2);

  alt.emitClient(null, "Spawnselect");
});

// Spawn player at selected

// >>>>>Stadtpark
alt.onClient('spawn:stadtpark', player => {
    let spawnName = "stadtpark"
    let spawn = spawns[0];
    player.spawn(spawn.x, spawn.y, spawn.z, 0);
    alt.emitClient(null, 'playerSpawned');
    console.log(player.name+" spawned at: "+spawnName);
    alt.emitClient(player, "freeroam:switchInOutPlayer", true);
});

// >>>>>Airport
alt.onClient('spawn:airport', player => {
  let spawnName = "airport"
  let spawn = spawns[1];
  player.spawn(spawn.x, spawn.y, spawn.z, 0);
  alt.emitClient(null, 'playerSpawned');
  console.log(player.name+" spawned at: "+spawnName);
  alt.emitClient(player, "freeroam:switchInOutPlayer", true);
});

// >>>>>Harmony
alt.onClient('spawn:harmony', player => {
  let spawnName = "harmony"
  let spawn = spawns[2];
  player.spawn(spawn.x, spawn.y, spawn.z, 0);
  alt.emitClient(null, 'playerSpawned');
  console.log(player.name+" spawned at: "+spawnName);
  alt.emitClient(player, "freeroam:switchInOutPlayer", true);
});

// >>>>>Paleto
alt.onClient('spawn:paleto', player => {
  let spawnName = "paleto"
  let spawn = spawns[3];
  player.spawn(spawn.x, spawn.y, spawn.z, 0);
  alt.emitClient(null, 'playerSpawned');
  console.log(player.name+" spawned at: "+spawnName);
  alt.emitClient(player, "freeroam:switchInOutPlayer", true);
});

// Handle Player death

/*
  Activate the part below to anable the respawn at the Pillbox Hill Medical Department
    In order to use this you need to deactivate the Respawn in other resources like"freeroam" wich comes with Alt:V ()
*/

/*
alt.on("playerDeath", (player, killer, weapon) => {
  const spawn = respawns[randomNumber(0, spawns.length - 1)];
  alt.emitClient(player, "freeroam:switchInOutPlayer", false, 0, 2);
  let playerDeathTimeout = alt.setTimeout(() => {
    if (player && player.valid) {
      player.spawn(spawn.x, spawn.y, spawn.z, 0);
      alt.emitClient(player, "freeroam:switchInOutPlayer", true);
      player.clearBloodDamage();
    }
    alt.clearTimeout(playerDeathTimeout);
  }, 3000);
  if (killer) {
    alt.log(`${killer.name} gave ${player.name} the rest!`);
    SendNotificationToAllPlayer(`~r~<C>${killer.name}</C> ~s~killed ~b~<C>${player.name}</C>`);
  } else {
    alt.log(`${player.name} died!`);
    SendNotificationToAllPlayer(`~s~Suicide ~b~<C>${player.name}</C>`);
  }
});*/

