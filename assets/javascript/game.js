const oneshots = document.querySelector("#teamone-shoot-button");
oneshots.addEventListener("click", function Random() {
    document.getElementById("teamone-numshots").innerHTML++;
    if (Math.floor(Math.random() * 2 ) > 0 ) {
        document.getElementById("teamone-numgoals").innerHTML++;

    }
})

const twoshots = document.querySelector("#teamtwo-shoot-button");
twoshots.addEventListener("click", function random() {
    console.log ("team two shot taken");
    document.getElementById("teamtwo-numshots").innerHTML++;
    if (Math.floor(Math.random() * 2 ) > 0) {
        document.getElementById("teamtwo-numgoals").innerHTML++;

    }
})

const resets = document.querySelector("#reset-button");
resets.addEventListener("click", function() {
    console.log ("game reset");
    document.getElementById("num-resets").innerHTML++;
    document.getElementById("teamone-numshots").innerHTML = 0;
    document.getElementById("teamone-numgoals").innerHTML = 0;
    document.getElementById("teamtwo-numshots").innerHTML = 0;
    document.getElementById("teamtwo-numgoals").innerHTML = 0;
})