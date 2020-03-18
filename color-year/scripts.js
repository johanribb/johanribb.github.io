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
    "video-hero": { "video-url": videoPath + "jordnara.mp4", "header": "Jordnära", "preamble": "10 färger inspirerade av vår Nordiska natur", "link": "Se alla våra färger" },
    "description": { "header": "Från de grönaste skogarna till de blåaste haven. Från de granitgrå bergen till de vidsträckta sandstränderna.", "preamble": "Från vintermorgonens frost till sommaråskans mullrande framfart. För att finna det vi sökte letade vi där allt en gång började. I vår natur. Här fann vi vår nya färgkollektion. Vi kallar den Jordnära.", "header-color": "#C3A472" },
    "sections": {
        "colors": [
            {
                "header": "Tall",
                "label": "Vår mörkgröna färg",
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
            "header": "Tall",
            "video": videoPath + "tall.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/tall_000"
        },
        "image-text": {
            "header": "Våra gröna kök",
            "preamble": "Tall är en grön nyans som håller över tid och som går att kombinera med olika material på bänkskivor och tillbehör.",
            "image": imagePath + "tall-article.jpg",
            "links": [{ "name": "Se alla gröna kök ›", "url": "#" }],
            "facts": "S8005 - R80B<br>Vattenbaserad",
            "swoosh-image": imagePath + "tall-swoosh.jpg"
        },
        "product-scroll-list": {
            "header": "Våra luckor i tall",
            "products": [
                { "name": "Arkitekt Plus Tall", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "tall-scroll-1.jpg" },
                { "name": "Lindö Tall", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "tall-scroll-2.jpg" },
                { "name": "Form Tall", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "tall-scroll-3.jpg" },
                { "name": "Fagerö tall", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "tall-scroll-4.jpg" }
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
                "Våra vita kök i färgen",
            "preamble": "NCS S 0500-N &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "Det första tecknet på att vintern är i antågande är det vackra vita skalet av glimrande frost som täcker buskar och grenar",
            "preamble": " Den här kristallklara och rena känslan inspirerade oss till vår färg Frost. Det är en ljus och energirik färg som får våra flöden att gå snabbare. Den hjälper rummet att upplevas större och drar mot en modern och ren känsla.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Frost",
            "video": videoPath + "frost.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/frost_000"
        },
        "image-text": {
            "header": "Frost",
            "preamble": "Är en ljus och energirik färg som får våra flöden att gå snabbare. Den hjälper rummet att upplevas större och drar mot en modern och ren känsla.  Se Frost som en tom målarduk som du kan välja att forma  åt vilket håll du vill. Matcha med vitt för en minimalistisk känsla",
            "image": imagePath + "frost-article.jpg",
            "links": [{ "name": "Se alla vita kök ›", "url": "#" }],
            "facts": "S 0500-N<br>Vattenbaserad",
            "swoosh-image": imagePath + "frost-swoosh.jpg"
        },
        "product-scroll-list": {
            "header": "Våra luckor i tall",
            "products": [
                { "name": "Arkitekt Plus Frost", "description": "Vitmålad ramlucka av MDF. Vitrinlucka med klart eller frostat glas alt krysspröjs.", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-1.jpg" },
                { "name": "Öland Frost", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-2.jpg" },
                { "name": "Aspekt Frost", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-3.jpg" },
                { "name": "Torö Frost", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-4.jpg" },
                { "name": "Viken Frost", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-5.jpg" },
                { "name": "Vollo Frost", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-6.jpg" },
                { "name": "Lindö Frost", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-7.jpg" },
                { "name": "Form Frost", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-8.jpg" },
                { "name": "Fagerö Frost", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-9.jpg" },
                { "name": "Ekerö tall", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-10.jpg" },
                { "name": "Vinga tall", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-11.jpg" },
                { "name": "Arkitekt tall", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "frost-scroll-12.jpg" }
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