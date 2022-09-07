# alt:V Simple Spawn Select

Simple spawn seclect for Alt:V using a WebView (html)

## Features

- Spawn on 4 Diffrent Locations
- Optional Respawn point at Pillbox Hill Medical
- Configure spawn points in "/server/index.js:4" by edit the coordinates.

    ```
    const spawns = [
    { x: 200.664,   y: -935.288,  z: 30.75 },
    { x: -1037.867, y: -2738.032, z: 20.25 },
    { x: 1181.500,  y: 2651.500,  z: 37.90 },
    { x: 107.197,   y: 6606.668,  z: 31.85 }
    ];
    ```
- Change the title and thename of the spawn points in "client/html/index.html:16".
    ```
    <p>Spawnpunkt wählen</p>
    <button type="button" class="spawn" onclick="paletoSelected()">Paleto Bay</button><br>
    <button type="button" class="spawn" onclick="harmonySelected()">Harmony</button><br>
    <button type="button" class="spawn" onclick="stadtparkSelected()">Stadtpark</button><br>
    <button type="button" class="spawn" onclick="airportSelected()">Flughafen</button>
    ```

## Installation

1. drag and drop the resource into your resource folder

2. add the resource to your "server.cfg"

3. disable your old spawn system

#### Optional

4. Enable the Pillbox Hill respawnpoint by remove the commit around "/server/index.js:71-90"