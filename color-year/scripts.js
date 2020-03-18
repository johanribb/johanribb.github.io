var assetsPath = "images/";
var imagePath = "images-products/";
var videoPath = "https://marbodal.test.nobiadigital.com/globalassets/fargaret/";

var navigationData = {
    "links": [
        { "title": "Tall", "label": "Grön", "url": getPageUrl("tall"), "image": assetsPath + "color-nav-1.png" },
        { "title": "Sand", "label": "Beige", "url": getPageUrl("sand"), "image": assetsPath + "color-nav-2.png" },
        { "title": "Hav", "label": "Blå", "url": getPageUrl("hav"), "image": assetsPath + "color-nav-3.png" },
        { "title": "Åska", "label": "Mellangrå", "url": getPageUrl("åska"), "image": assetsPath + "color-nav-4.png" },
        { "title": "Lin", "label": "Ljus", "url": getPageUrl("lin"), "image": assetsPath + "color-nav-5.png" },
        { "title": "Bark", "label": "Brun", "url": getPageUrl("bark"), "image": assetsPath + "color-nav-6.png" },
        { "title": "Moln", "label": "Ljusgrå", "url": getPageUrl("moln"), "image": assetsPath + "color-nav-7.png" },
        { "title": "Frost", "label": "Vit", "url": getPageUrl("frost"), "image": assetsPath + "color-nav-8.png" },
        { "title": "Granit", "label": "Mörkgrå", "url": getPageUrl("granit"), "image": assetsPath + "color-nav-9.png" },
        { "title": "Frö", "label": "Ljusbrun", "url": getPageUrl("frö"), "image": assetsPath + "color-nav-10.png" }
    ]
};

var contactUsData = {
    "header": "Prata färg med våra köksexperter!", "preamble": "Boka ett möte med en av våra köksdesigners för att snacka planering, material och färg av våra kök. Vi träffas digitalt, på telefon eller i butik", "link": "Boka ett möte", "url": "#"
};
var pageStartData = { "header": "Jordnära", "preamble": "Vår nya vattenbaserade färgkollektion", "button": "Upplev kollektionen", "url": "page-list.html", "image": imagePath + "marbodal-koks-farger.jpg" };
var pageListData = {
    "video-hero": { "video-url": videoPath + "jordnara.mp4", "header": "10 färger inspirerade av vår Nordiska natur", "preamble": "Vi kallar färgkollektionen Jordnära", "link": "Se alla våra färger" },
    "description": { "header": "Från de grönaste skogarna till de blåaste haven. Från de granitgrå bergen till de vidsträckta sandstränderna.", "preamble": "Från vintermorgonens frost till sommaråskans mullrande framfart. För att finna det vi sökte letade vi där allt en gång började. I vår natur. Här fann vi vår nya färgkollektion. Vi kallar den Jordnära.", "header-color": "#C3A472" },
    "sections": {
        "colors": [
            {
                "header": "Tall",
                "label": "Vår mörkgröna färg",
                "preamble": "Känslan av att kliva ut i en skog är oslagbar.",
                "preamble-mobile": "NCS S 5005-G50Y",
                "image": imagePath + "list-tall.jpg",
                "image-mobile": imagePath + "list-tall-mobile.jpg",
                "cta": "Upplev tall",
                "cta-color": "white",
                "cta-background": "#9A9A8D",
                "url": getPageUrl("tall")
            },
            {
                "header": "Sand",
                "label": "Vår beiga färg",
                "preamble": "Vår färg Sand är inspirerad av våra sandstränder som vi hittar längs vår vackra kust.",
                "preamble-mobile": "NCS S 2005-Y20R",
                "image": imagePath + "list-sand.jpg",
                "image-mobile": imagePath + "list-sand-mobile.jpg",
                "cta": "Upplev sand",
                "cta-color": "white",
                "cta-background": "#AEA798",
                "url": getPageUrl("sand")
            },
            {
                "header": "Bark",
                "label": "Vår bruna färg",
                "preamble": "Alla har vi nog strosat genom en vacker höstskog. Inspirerade av skogens skiftande höstfärger skapade vi färgen Bark.",
                "preamble-mobile": "NCS S 7005-Y20R",
                "image": imagePath + "list-bark.jpg",
                "image-mobile": imagePath + "list-bark-mobile.jpg",
                "cta": "Upplev bark",
                "cta-color": "white",
                "cta-background": "#908777",
                "url": getPageUrl("bark")
            },
            {
                "header": "Hav",
                "label": "Vår blåa färg",
                "preamble": "Likt havets vågor som slår mot en klippa, eller som vandrar upp för en strand, skiftar vår blåa färg Hav i ton och känsla beroende på ljus och övriga färger i rummet.",
                "preamble-mobile": "NCS S 8005-R80B",
                "image": imagePath + "list-hav.jpg",
                "image-mobile": imagePath + "list-hav-mobile.jpg",
                "cta": "Upplev hav",
                "cta-color": "white",
                "cta-background": "#5C656A",
                "url": getPageUrl("hav")
            },
            {
                "header": "Frö",
                "label": "Vår grå-beiga färg",
                "preamble": "Moder jord är underbar. Från ett litet frö kan vi få de mest fantastiska råvarorna.",
                "preamble-mobile": "NCS S4502-Y",
                "image": imagePath + "list-fro.jpg",
                "image-mobile": imagePath + "list-fro-mobile.jpg",
                "cta": "Upplev frö",
                "cta-color": "#715443",
                "cta-background": "#FFFFFF",
                "url": getPageUrl("fro")
            },
            {
                "header": "Granit",
                "label": "Vår mörkgråa färg",
                "preamble": "Stora delar av Sveriges berggrund består av granit.  Denna hårdsten kommer i många skiftande nyanser.",
                "preamble-mobile": "NCS S 7500-N",
                "image": imagePath + "list-granit.jpg",
                "image-mobile": imagePath + "list-granit-mobile.jpg",
                "cta": "Upplev granit",
                "cta-color": "white",
                "cta-background": "#2B2C29",
                "url": getPageUrl("granit")
            },
            {
                "header": "Åska",
                "label": "Vår mellangråa färg",
                "preamble": "När sommaråskan rullar in över våra åkermarker får himlen ett nästan onaturligt ljus.",
                "preamble-mobile": "NCS S 5500-N",
                "image": imagePath + "list-aska.jpg",
                "image-mobile": imagePath + "list-aska-mobile.jpg",
                "cta": "Upplev åska",
                "cta-color": "white",
                "cta-background": "#A4A4A3",
                "url": getPageUrl("aska")
            },
            {
                "header": "Moln",
                "label": "Vår ljusgråa färg",
                "preamble": "De vackra lätta molnen som ligger högt upp i atmosfären under sommarmånaderna inspirerade oss till färgen Moln.",
                "preamble-mobile": "NCS S 2500-N",
                "image": imagePath + "list-moln.jpg",
                "image-mobile": imagePath + "list-moln-mobile.jpg",
                "cta": "Upplev moln",
                "cta-color": "white",
                "cta-background": "#919495",
                "url": getPageUrl("moln")
            },
            {
                "header": "Lin",
                "label": "Vår ljusgröna färg",
                "preamble": "Från en vacker sommaräng hämtade vi vår inspiration till färgen Lin. En tidlös klassiker.",
                "preamble-mobile": "NCS S 2005-G10Y",
                "image": imagePath + "list-lin.jpg",
                "image-mobile": imagePath + "list-lin-mobile.jpg",
                "cta": "Upplev lin",
                "cta-color": "white",
                "cta-background": "#7A7A73",
                "url": getPageUrl("lin")
            },
            {
                "header": "Frost",
                "label": "Vår vita färg",
                "preamble": "Det första tecknet på att vintern är i antågande är det vackra vita skalet av glimrande frost som täcker buskar och grenar.",
                "preamble-mobile": "NCS S 7005-Y20R",
                "image": imagePath + "list-frost.jpg",
                "image-mobile": imagePath + "list-frost-mobile.jpg",
                "cta": "Upplev frost",
                "cta-color": "#715443",
                "cta-background": "#FFFFFF",
                "url": getPageUrl("frost")
            }
        ]
    }
};
var pageDetailsData = {
    "tall": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(129, 131, 116, 0.8)",
            "image": imagePath + "tall-hero.jpg",
            "image-mobile": imagePath + "tall-hero-mobile.jpg",
            "header-key": "Tall", "header":
                "Våra gröna kök i färgen",
            "preamble": "NCS S 5005-G50Y &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "Känslan av att kliva ut i en skog är oslagbar.",
            "preamble": "Luften fyller lungorna med ny kraft. Det stilla suset av vajande trädtoppar. Skogens dofter och ljud. Vår färg Tall är noga balanserad och utvald för att förmedla den känslan.",
            "header-color": "#989A85"
        },
        "video-reveal": {
            "header": "Bjud in naturen",
            "video": videoPath + "tall.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/tall_000"
        },
        "image-text": {
            "header": "Fagerö Tall är senaste tillskottet i familjen gröna kök",
            "preamble": "Fagerö är ett av våra mest uppskattade kök. Köket gör sig fint i en sekelskiftesvåning men kan stylas i både klassisk och lantlig stil.",
            "image": imagePath + "tall-article.jpg",
            "links": [{ "name": "Se alla gröna kök ›", "url": "#" }],
            "facts": "S8005 - R80B<br>Vattenbaserad",
            "swoosh-image": imagePath + "tall-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i tall",
            "products": [
                { "name": "Arkitekt Plus Tall", "description": "Vitmålad ramlucka av MDF. Vitrinlucka med klart eller frostat glas alt krysspröjs.", "url": "#", "padded-image": "true", "image": imagePath + "tall-scroll-1.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "tall-scroll-2.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "tall-scroll-3.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "tall-scroll-4.jpg" }
            ]
        }
    },
    "frost": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(160, 160, 160, 0.8)",
            "image": imagePath + "frost-hero.jpg",
            "image-mobile": imagePath + "frost-hero-mobile.jpg",
            "header-key": "Frost", "header":
                "Våra ljusa kök i färgen",
            "preamble": "NCS S8005 - R80B &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "Känslan av att kliva ut i en skog är oslagbar.",
            "preamble": "Luften fyller lungorna med ny kraft. Det stilla suset av vajande trädtoppar. Skogens dofter och ljud. Vår färg Tall är noga balanserad och utvald för att förmedla den känslan.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Bjud in naturen",
            "video": videoPath + "frost.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/frost_000"
        },
        "image-text": {
            "header": "Lindö Tall är senaste tillskottet i familjen gröna kök",
            "preamble": "Lindö är en klassisk exklusiv spegellucka med brett färgval och många vitrinval. Av alla våra kök är Lindö det som har mest profilerad ram och spegel.",
            "image": imagePath + "frost-article.jpg",
            "links": [{ "name": "Se alla gröna kök ›", "url": "#" }],
            "facts": "S8005 - R80B<br>Vattenbaserad",
            "swoosh-image": imagePath + "frost-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i tall",
            "products": [
                { "name": "Arkitekt Plus Tall", "description": "Vitmålad ramlucka av MDF. Vitrinlucka med klart eller frostat glas alt krysspröjs.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-1.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-2.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-3.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-4.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-5.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-6.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-7.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-8.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-9.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-10.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-11.jpg" },
                { "name": "Lindö tall", "description": "Lucka med klart eller frostat glas alt krysspröjs. Vitmålad ramlucka av MDF Vitrin.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-12.jpg" }
            ]
        }
    }
};

var components = ["base-styles", "header", "product-hero", "product-description", "static-slider", "video-hero", "color-list", "color-navigation", "image-text", "video-reveal", "product-scroll-list", "color-swoosh", "product-contact"];

$.each(components, function (index, value) {
    $.get("components/" + value + ".html", function (template) {
        $.each($("component[data-name='" + value + "']"), function (index, placeholder) {

            var parameters = $(placeholder).find('data').html();

            if (parameters) {

                var json = JSON.parse(parameters);

                Object.keys(json).forEach(function (k) {
                    if (json[k] instanceof Array) {
                        var sections = template.split(new RegExp("<" + k + ">|<\/" + k + ">"));
                        if (sections.length == 3) {
                            var result = "";

                            for (var i = 0; i < json[k].length; i++) {

                                var arrayTemplate = sections[1];

                                Object.keys(json[k][i]).forEach(function (arrayKey) {
                                    arrayTemplate = arrayTemplate.replace(new RegExp("{" + arrayKey + "}", "g"), json[k][i][arrayKey]);
                                });
                                result += arrayTemplate;
                            }

                            template = sections[0] + result + sections[2];
                        }

                    }
                    else {
                        template = template.replace(new RegExp('{' + k + '}', 'g'), json[k]);
                    }
                });
            }
            $(placeholder).replaceWith(template);
        });
    });
});




function getPageUrl(name) {
    return "page-details.html?color=" + name;
}