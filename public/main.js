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
    axios.post("/export").then(function(data) {
        console.log(data);
    });
    toggleText(); // makes download link appear
}
function changeNote(myPitch, myOctave) {
    var superpitch = myPitch + myOctave;
    //console.log("mypitch + myoctave: " + myPitch + ", " + myOctave);
    axios.post("/update", {
        superpitch: superpitch
    })
    .then(function(data) {
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
  }
}