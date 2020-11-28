// Tihti küsitud küsimused ja nende vastused
let FAQ = {
    tab1: ["Mis on Tartu Toidujagamine (TT)?", "Tartu Toidujagamine on liikumine, mis päästab ja jagab järele jäänud toitu Tartus, tehes koostööd üksikisikute, jaemüüjate, ettevõtete ja toidu tootjatega."],
    tab2: ["Kust meie idee pärineb?", "Idee pärineb Saksamaalt, kus on suur toidupäästmispunktide võrgustik, mida haldavad ja arendavad tuhanded vabatahtlikud. Sellise võrgustiku arendamine on võimalik vaid tänu aktiivsetele inimestele ja toidujäätmete tekkimise vastastele seadustele. Toidujagamispunktid kantakse kaardile, mille kohta jagatakse infot leheküljel karrot.world ning millega korraldatakse regulaarne toidu ülejääkide vastuvõtmine ettevõtetelt ja poekettidelt."],
    tab3: ["Millega me tegeleme?", "<ol><li>aitame üle jäävat toitu laiali jagada;</li><li>loome ja hooldame toidujagamispunkte;</li><li>tegeleme teavitustööga sotsiaalmeedias ja koolides;</li><li>otsime pidevalt uusi koostööpartnereid</li></ol>"],
    tab4: ["Kes tegelevad?", "Tartu Toidujagamine funktsioneerib ainult tänu vabatahtlikule tööle ning inimestele, kes annetavad vajalikke ressursse teavitustöö ja toidujagamispunktide jaoks."],
    tab5: ["Miks me seda teeme?", "Toidu tootmisega kaasneb ressursside nagu vee, maapinna, energia, kütuse ja raha kulu, rääkimata toidu transpordi ja toidujäätmete valesti käitlemisega tekkivatest kasvuhoonegaasidest. <br> Meie eesmärk on vähendada keskkonnakahju ja kasutada maksimaalselt ära kulunud ressursse, samuti vähendada vastuolu, et igal aastal visatakse prügisse miljoneid tonne toitu, samal ajal kui pea miljard inimest maailmas kannatavad alatoitumuse käes."],
    tab6: ["Mis on toidujagamispunktid (TJP)?", `Toidujagamispunktid on avalikes ruumides asuvad kapid, kuhu saab järele jäävat toitu viia või sealt võtta. Mõni punkt on siseruumides, mõni väljas, mõni on varustatud külmkapiga. Kappide kasutamisel pole piiranguid, neid võivad kasutada kõik ning on 24/7 avatud. Kappe korrastavad TT vabatahtlikud ning nende täitmise kohta leiab ajakohast infot Facebooki grupist Foodsharing Tartu. <br> Loe TJP-de kasutusreeglite ja asukohtade kohta <a href="#" id="scroll-to-loc-page-bottom">siit</a>.`],
    tab7: ["Kuidas saaksin vabatahtlikuks hakata?", `Oma soovist võid kirjutada <a href="https://www.facebook.com/foodsharingtartu">Facebooki</a> või saata meil <a href="tartutoidujagamine@protonmail.com">tartutoidujagamine@protonmail.com</a>.`],
    tab8: [`On sul küsimus? Probleem? Ettepanek? Koostöösoov?`, `Kirjuta meile <a href="https://www.facebook.com/foodsharingtartu">Facebooki</a> või saada meil <a href="tartutoidujagamine@protonmail.com">tartutoidujagamine@protonmail.com</a>.`]
}


window.onload = () => {
    // Lisab lehele navigeerimisriba ja jaluse
    $("#navigation-bar").load("./layouts/navigation-bar.html");
    $("#footer").load("./layouts/footer.html");

    // Kui leht on ära laadinud
    $(document).ready(() => {
        // Itereerib läbi FAQ ja lisab info lehele
        for (let key in FAQ) {
            document.getElementsByClassName("info-tabs-wrapper")[0].innerHTML +=
                `<div class="information-tab">
                <div class="info-heading"><p>${FAQ[key][0]}</p></div>
                <div class="info-content"><p>${FAQ[key][1]}</p></div>
            </div>`
        }

        // Leiab mitu FAQ info lehte lisati
        let infoTabs = document.getElementsByClassName("information-tab").length;

        // Lisab kõikidele FAQ info lehtedele funktsionaalsuse
        // Kui külastaja hõljub hiirega info lehe peal, siis küsimuse asemele ilmub vastus
        for (let i = 0; i < infoTabs; i++) {
            let tab = document.getElementsByClassName("information-tab")[i];
            tab.addEventListener("mouseover", () => {
                $(tab).find(".info-heading").animate({ opacity: "0" }, 0, "linear");
                $(tab).find(".info-content").animate({ opacity: "1" }, 0, "linear");
                /*$(tab).find(".info-heading").css("opacity", "0")
                $(tab).find(".info-content").css("opacity", "1")*/
            });
            tab.addEventListener("mouseout", () => {
                $(tab).find(".info-content").animate({ opacity: "0" }, 0, "linear");
                $(tab).find(".info-heading").animate({ opacity: "1" }, 0, "linear");
                /*$(tab).find(".info-content").css("opacity", "0")
                $(tab).find(".info-heading").css("opacity", "1")*/
            });
        }

        // Lisab kuuenda info lehe tekstile funktsionaalsuse, mis suunab külastaja edasi kasutusreeglite juurde
        document.getElementById("scroll-to-loc-page-bottom").addEventListener("click", () => {
            window.location.href = "locations.html#footer";
        });
    });
}