var superpitch;

function setNotePitch(note) {
    window.pitch = note;
    document.getElementById("note").innerHTML = pitch + octave;
}
function setNoteDuration(note) {
    document.getElementById("noteDuration").innerHTML = note;
}
function setStaff(staff) {
    document.getElementById("staff").innerHTML = staff;
}
function setNoteOctave(note) {
    window.octave = note;
    document.getElementById("note").innerHTML = pitch + octave;
}

function onExport() {
    axios.post("/save").then(function(data) {
        console.log(data);
    });
}
function changeNote(myPitch, myOctave) {
    superpitch = myPitch + myOctave;
    axios.post("/update").then(function(data) {
        console.log("my pitch and my octave passed")
        console.log(data);
    });
}
function removeNote() {
    axios.post("/remove").then(function(data) {
        console.log(data);
    });
}
function insertNote() {
    axios.post("/insert").then(function(data) {
        console.log(data);
    });
}

//superpitch = "E2";

//module.exports = {superpitch, pitch, octave};
module.exports.superpitch = superpitch;