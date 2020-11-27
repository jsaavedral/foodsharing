var locationInfo = {
    loc1: [
        "Karlova",
        "Toidujagamispunkt asub Barlova pubi seinal, Tähe ja Eha tänava ristis.",
        "../images/Kapid/bar3.jpg", // peaks olema "../images/Kapid/bar3.jpg", but it fucks up the page
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130.77564108932086!2d26.7275828856067!3d58.36961773765994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb3726d713aee3%3A0xbb79df2565748733!2sBarlova!5e0!3m2!1set!2see!4v1606432430036!5m2!1set!2see",
    ],
    loc2: [
        "Genialistide klubi",
        "Toidujagamispunkt asub Genialistide klubi hoovis, terrassi ja piirava kiviseinaga nurgas. Punkt on varustatud külmkapiga.",
        "../images/Kapid/gen1.jpg", // peaks olema "../images/Kapid/gen1.jpg", but it fucks up the page
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.5884783146926!2d26.719775216125452!3d58.3834767935366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36e66175a873%3A0x89839544dc0cfc11!2sGenialistide%20Klubi!5e0!3m2!1set!2see!4v1606432911984!5m2!1set!2see",
    ],
    loc3: [
        "Aparaaditehas",
        "Toidujagamispunkt asub Aparaaditehase number 2 ukse fuajees, Paranduskeldri ukse ees. Punkt on varustatud külmkapiga.",
        "../images/Kapid/apa3.jpg", // peaks olema "../images/Kapid/apa3.jpg", but it fucks up the page
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.3760015103608!2d26.713955116124986!3d58.370195494591115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb3705d03131dd%3A0xb28bf28f4478e20e!2sAparaaditehas!5e0!3m2!1set!2see!4v1606432956273!5m2!1set!2see",
    ],
};



/* https://www.maps.ie/create-google-map/ */

$("#navigation-bar").load("./layouts/navigation-bar.html");
$("#footer").load("./layouts/footer.html");

let locationSelectionButtons = document.getElementsByClassName(
    "location-select-button"
);

for (let index = 0; index < Object.keys(locationInfo).length; index++) {
    let button = locationSelectionButtons[index];
    let locationData = locationInfo[Object.keys(locationInfo)[index]];
    button.value = locationData[0];

    function addLocationContent() {
        document.getElementsByClassName("location-info")[0].innerHTML =
            locationData[1];
        document.getElementById("food-closet-img").src = locationData[2];
        document.getElementsByClassName("google-maps-view")[0].innerHTML = `
            <iframe src="${locationData[3]}">
            </iframe>`;
    }

    if (index == 0) {
        addLocationContent();
    }
    
    button.addEventListener("click", () => {
        addLocationContent();
    });
}
