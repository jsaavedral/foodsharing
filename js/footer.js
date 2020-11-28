// Määrab jaluse nuppudele funktsionaalsuse
// Nupud suunavad kasutajat edasi vastavale sotsiaalmeedia lehele või mailile

document.getElementById("facebook").addEventListener("click", () => {
    //window.location.replace("./index.html");
    window.location.href = "https://www.facebook.com/foodsharingtartu";
});
document.getElementById("instagram").addEventListener("click", () => {
    //window.location.replace("./index.html");
    window.location.href = "https://www.instagram.com/foodsharingtartu/";
});
document.getElementById("twitter").addEventListener("click", () => {
    //window.location.replace("./index.html");
    window.location.href = "mailto:tartutoidujagamine@protonmail.com";
});