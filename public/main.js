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

function calcSuperpitch(myPitch, myOctave) {
    return myPitch + myOctave;
}

function onExport() {
    axios.post("/export").then(function(data) {
        console.log(data);
    });
    toggleText(); // makes download link appear
}
function changeNote() {
    axios.post("/update").then(function(data) {
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
function toggleText() {
  var text = document.getElementById("download");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}


//superpitch = "E2";

//module.exports = {superpitch, pitch, octave};
//module.exports.superpitch = superpitch;

module.exports = { 
    calcSuperpitch
}