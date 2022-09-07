var spawnpoint;

function airportSelected () {
    spawnpoint = "airport"
    alt.emit('spawn', spawnpoint);
    console.log("Webview:Airport selected...");
}

function stadtparkSelected () {
    spawnpoint = "stadtpark"
    alt.emit('spawn', spawnpoint);
    console.log("Webview:Stadtpark selected...");
    console.log("SPWV:"+spawnpoint);
}

function harmonySelected () {
    spawnpoint = "harmony"
    alt.emit('spawn', spawnpoint);
    console.log("Webview:Harmony selected...");
}

function paletoSelected () {
    spawnpoint = "paleto"
    alt.emit('spawn', spawnpoint);
    console.log("Webview:Paleto selected...");
}
