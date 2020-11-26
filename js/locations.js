var locationInfo = {
    loc1: [
        "Aloha",
        "Siia läheb asukohta täpsustav tekst",
        "https://picsum.photos/900/400",
        "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
    ],
    loc2: [
        "Nupu tekst",
        "Siia läheb asukohta täpsustav soba",
        "https://picsum.photos/900/400",
        "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kaupmehe%2012,%20Tallinn+(loc1)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
    ],
    loc3: [
        "Nupu tekst",
        "Siia läheb asukohta täpsustav boba",
        "https://picsum.photos/900/400",
        "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kaupmehe%2012,%20Tallinn+(loc1)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
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
