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