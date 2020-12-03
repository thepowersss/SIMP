function setNotePitch(myNote) {
    window.pitch = myNote;
    document.getElementById("note").innerHTML = window.pitch + window.octave;
}
function setNoteOctave(myNote) {
    window.octave = myNote;
    document.getElementById("note").innerHTML = window.pitch + window.octave;
}
function setNoteDuration(myDuration) {
    window.duration = myDuration;
    if (myDuration == "1") {
        document.getElementById("duration").innerHTML = "sixteenth";
    } else if (myDuration == "2") {
        document.getElementById("duration").innerHTML = "eighth";
    } else if (myDuration == "4") {
        document.getElementById("duration").innerHTML = "quarter";
    } else if (myDuration == "8") {
        document.getElementById("duration").innerHTML = "half";
    } else if (myDuration == "16") {
        document.getElementById("duration").innerHTML = "whole";
    } else {
        document.getElementById("duration").innerHTML = "error";
    }
}
function setStaff(myStaff) {
    window.staff = myStaff;
    document.getElementById("staff").innerHTML = window.staff;
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
function insertNote(myPitch, myOctave, myStaff, myDuration) {
    var superpitch = myPitch + myOctave;
    axios.post("/insert", {
        superpitch: superpitch,
        staff: staff,
        duration: duration
    })
    .then(function(data) {
        console.log(data);
    });
}
function toggleText() {
  var text = document.getElementById("download");
  if (text.style.display === "none") {
    text.style.display = "block";
  }
}