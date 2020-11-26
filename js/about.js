let FAQ = {
    tab1 : ["Mis on Tartu Toidujagamine (TT)", "Tartu Toidujagamine on liikumine, mis päästab ja jagab ülejäänud toitu Tartus, tehes koostööd üksikisikute, jaemüüjate, ettevõtete ja toidu tootjatega."],
    tab2 : ["Kust meie idee pärineb?", "Idee pärineb Saksamaalt, kus on suur toidupäästmispunktide võrgustik, mida haldavad ja arendavad tuhanded vabatahtlikud. Sellise võrgustiku arendamine on võimalik vaid tänu aktiivsetele inimestele ja toidujäätmete tekkimise vastastele seadustele. Toidujagamispunktid kantakse kaardile, mille kohta jagatakse infot leheküljel karrot.world ning millega korraldatakse regulaarne toidu ülejääkide vastuvõtmine ettevõtetelt ja poekettidelt."],
    tab3 : ["Millega me tegeleme?", "<ol><li>aitame ülejäävat toitu laiali jagada;</li><li>loome ja hooldame toidujagamispunkte;</li><li>tegeleme teavitustööga sotsiaalmeedias ja koolides;</li><li>otsime pidevalt uusi koostööpartnereid</li></ol>"],
    tab4 : ["Kes tegelevad?", "Tartu Toidujagamine funktsioneerib ainult tänu vabatahtlikule tööle ning inimestele, kes annetavad vajalikke ressursse teavitustöö ja toidujagamispunktide jaoks."],
    tab5 : ["Miks me seda teeme?", "Toidu tootmisega kaasneb ressursside nagu vee, maapinna, energia, nafta ja raha kulu, rääkimata veel toidu transpordi ja toidujäätmete valesti käitlemisega tekkivatest kasvuhoonegaasidest. <br> Meie eesmärk on vähendada keskkonnakahju ja kasutada maksimaalselt ära kulunud ressursse, samuti vähendada vastuolu, et igal aastal visatakse prügisse miljoneid tonne toitu, samal ajal kui pea miljard inimest maailmas kannatavad alatoitumuse käes."],
    tab6 : ["Mis on toidujagamispunktid (TJP)?", "Toidujagamispunktid on avalikes ruumides asuvad kapid, kuhu saab ülejäävat toitu viia või sealt võtta. Mõni punkt on siseruumides, mõni väljas, mõni on varustatud külmkapiga. Kappide kasutamisel pole piiranguid, neid võivad kasutada kõik ning on 24/7 avatud. Kappe korrastavad TT vabatahtlikud ning nende täitmise kohta leiab ajakohast infot Facebooki grupist Foodsharing Tartu. <br> Loe TJP-de kasutusreeglite ja asukohtade kohta siit (link TJP vahelehele)."],
    tab7 : ["Kuidas saaksin vabatahtlikuks hakata?", "Oma soovist võid kirjutada Facebooki (https://www.facebook.com/foodsharingtartu) või saata meil tartutoidujagamine@protonmail.com."],
    tab8 : ["On sul küsimus? Probleem? Ettepanek? Koostöösoov?", "Kirjuta meile Facebooki (https://www.facebook.com/foodsharingtartu) või saada meil tartutoidujagamine@protonmail.com."]
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