// Määrab navigeerimisribal olevatele nuppudele funktsionaalsuse
// Iga nupp vajutuse korral navigeerib akna vaate oma vahelehele

document.getElementById("index").addEventListener("click", () => {
    //window.location.replace("./index.html");
    window.location.href = "index.html";
});
document.getElementById("about").addEventListener("click", () => {
    //window.location.replace("./index.html");
    window.location.href = "about.html";
});
document.getElementById("locations").addEventListener("click", () => {
    //window.location.replace("./index.html");
    window.location.href = "locations.html";
});
document.getElementById("gallery").addEventListener("click", () => {
    //window.location.replace("./index.html");
    window.location.href = "gallery.html";
});
