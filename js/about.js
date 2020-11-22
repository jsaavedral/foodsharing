let FAQ = {
    tab1 : ["Miks anna on liis?", "Kui anna ei oelks liis siis liis ei oleks annna"],
    tab2 : ["Kuidas dabida?", "Võtad nõõri, seod ühe otsa kuhugi kõrgele ja teise otsa ümber oma kaela ning ootad kuni lil peep tuleb ja õpetab sulle"],
    tab3 : ["What is reverse exorcism?", "When the devil tells the priest to exit the child's body."],
    tab4 : ["Becky", "A stereotypical, basic white girl; obsessed with Starbucks, Ugg boots, and trying to have a bigger butt"],
    tab5 : ["Rolling Stoned", "Under the influence of marijuana and ecstasy"],
    tab6 : ["Rolling Stoned", "Under the influence of marijuana and ecstasy"]
}


window.onload = () => {
    $("#navigation-bar").load("./layouts/navigation-bar.html"); 
    $("#footer").load("./layouts/footer.html");

    $( document ).ready(() => {
        for (let key in FAQ) {
            document.getElementsByClassName("info-tabs-wrapper")[0].innerHTML += 
            `<div class="information-tab">
                <div class="info-heading">${ FAQ[key][0] }</div>
                <div class="info-content">${ FAQ[key][1] }</div>
            </div>`
        }
        let infoTabs = document.getElementsByClassName("information-tab").length;

        for (let i = 0; i < infoTabs; i++) {
            let tab = document.getElementsByClassName("information-tab")[i];
            tab.addEventListener("mouseover", () => {
                $(tab).find(".info-heading").animate({opacity:"0"},100, "linear");
                $(tab).find(".info-content").animate({opacity:"1"},100, "linear");
                /*$(tab).find(".info-heading").css("opacity", "0")
                $(tab).find(".info-content").css("opacity", "1")*/
            });
            tab.addEventListener("mouseout", () => {
                $(tab).find(".info-content").animate({opacity:"0"},100, "linear");
                $(tab).find(".info-heading").animate({opacity:"1"},100, "linear");
                /*$(tab).find(".info-content").css("opacity", "0")
                $(tab).find(".info-heading").css("opacity", "1")*/
            }); 
        }
    });
}