var assetsPath = "images/";
var imagePath = "images-products/";
var videoPath = "https://marbodal.test.nobiadigital.com/globalassets/fargaret/";

var navigationData = {
    "links": [
        { "title": "Tall", "label": "Grön", "url": getPageUrl("tall"), "image": assetsPath + "color-nav-1.png" },
        { "title": "Sand", "label": "Beige", "url": getPageUrl("sand"), "image": assetsPath + "color-nav-2.png" },
        { "title": "Hav", "label": "Blå", "url": getPageUrl("hav"), "image": assetsPath + "color-nav-3.png" },
        { "title": "Åska", "label": "Mellangrå", "url": getPageUrl("aska"), "image": assetsPath + "color-nav-4.png" },
        { "title": "Lin", "label": "Ljus", "url": getPageUrl("lin"), "image": assetsPath + "color-nav-5.png" },
        { "title": "Bark", "label": "Brun", "url": getPageUrl("bark"), "image": assetsPath + "color-nav-6.png" },
        { "title": "Moln", "label": "Ljusgrå", "url": getPageUrl("moln"), "image": assetsPath + "color-nav-7.png" },
        { "title": "Frost", "label": "Vit", "url": getPageUrl("frost"), "image": assetsPath + "color-nav-8.png" },
        { "title": "Granit", "label": "Mörkgrå", "url": getPageUrl("granit"), "image": assetsPath + "color-nav-9.png" },
        { "title": "Frö", "label": "Ljusbrun", "url": getPageUrl("fro"), "image": assetsPath + "color-nav-10.png" }
    ]
};

var contactUsData = {
    "header": "Prata färg med våra köksdesigners!", "preamble": "Boka ett möte med en av våra köksdesigners. Vi går igenom dina behov, köksdrömmar, stilar och lösningar. Vi träffas digitalt, på telefon eller i butik", "link": "Boka möte nu", "url": "#"
};

var pageStartData = { "header": "Jordnära", "preamble": "Vår nya vattenbaserade färgkollektion", "button": "Upplev kollektionen", "url": "page-list.html", "image": imagePath + "marbodal-koks-farger.jpg" };
var pageListData = {
    "video-hero": { "video-url": videoPath + "jordnara.mp4", "header": "Jordnära", "preamble": "10 färger inspirerade av vår Nordiska natur", "link": "Se alla våra färger" },
    "description": { "header": "Från de grönaste skogarna till de blåaste haven. Från de granitgrå bergen till de vidsträckta sandstränderna.", "preamble": "Från vintermorgonens frost till sommaråskans mullrande framfart. För att finna det vi sökte letade vi där allt en gång började. I vår natur. Här fann vi vår nya färgkollektion. Vi kallar den Jordnära.", "header-color": "#C3A472" },
    "sections": {
        "colors": [
            {
                "header": "Tall",
                "label": "Vår gröna färg",
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
            "facts": "NCS S 5005-G50Y<br>Vattenbaserad",
            "swoosh-image": imagePath + "tall-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Tall",
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
            "preamble": "Den här kristallklara och rena känslan inspirerade oss till vår färg Frost. Det är en ljus och energirik färg som får våra flöden att gå snabbare. Den hjälper rummet att upplevas större och drar mot en modern och ren känsla.",
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
            "preamble": "Frost är en ljus och energirik färg som får våra flöden att gå snabbare. Den hjälper rummet att upplevas större och drar mot en modern och ren känsla.  Se Frost som en tom målarduk som du kan välja att forma  åt vilket håll du vill. Matcha med vitt för en minimalistisk känsla",
            "image": imagePath + "frost-article.jpg",
            "links": [{ "name": "Se alla vita kök ›", "url": "#" }],
            "facts": "NCS: S 0500-N<br>Vattenbaserad",
            "swoosh-image": imagePath + "frost-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Frost",
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
    },
    "moln": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(160, 160, 160, 0.8)",
            "image": imagePath + "moln-hero.jpg",
            "image-mobile": imagePath + "moln-hero-mobile.jpg",
            "header-key": "Moln", "header":
                "Våra ljusgrå kök i färgen",
            "preamble": "NCS S 2500-N &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "De vackra lätta molnen som ligger högt upp i atmosfären under sommarmånaderna inspirerade oss till färgen Moln",
            "preamble": "En färg som i sin ljusgråa nyans ger köket ett moget och sofistikerat uttryck. Kulören är kompromissernas färg, en brobyggare mellan vitt och svart. Den ger en ombonad känsla utan att minska på ljusflödet och energierna.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Moln",
            "video": videoPath + "moln.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/moln_000"
        },
        "image-text": {
            "header": "Moln",
            "preamble": "Moln är en färg som, beroende på val av lucka, passar lika bra i strama moderna kök som i  vackert lantliga.Den ljusgråa färgen är en perfekt fond för dig att skapa en plats så som du vill ha det.",
            "image": imagePath + "moln-article.jpg",
            "links": [{ "name": "Se alla ljusgrå kök ›", "url": "#" }],
            "facts": "NCS S 2500-N<br>Vattenbaserad",
            "swoosh-image": imagePath + "moln-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Moln",
            "products": [
                { "name": "Arkitekt Plus Moln", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "moln-scroll-1.jpg" },
                { "name": "Lindö Moln", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "moln-scroll-2.jpg" },
                { "name": "Form Moln", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "moln-scroll-3.jpg" },
                { "name": "Fagerö Moln", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "moln-scroll-4.jpg" }
            ]
        }
    },
    "aska": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(160, 160, 160, 0.8)",
            "image": imagePath + "aska-hero.jpg",
            "image-mobile": imagePath + "aska-hero-mobile.jpg",
            "header-key": "Åska", "header":
                "Våra mellangrå kök i färgen",
            "preamble": "NCS S 5500-N &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "När sommaråskan rullar in över våra åkermarker får himlen ett nästan onaturligt ljus.",
            "preamble": "Där solens strålar försöker tränga igenom det mullrande molntäcket bildas det ett himlaljus som inspirerade oss till färgen Åska. En mellangrå kulör som känns helt rätt för dig som drömmer om ett tidlöst grått kök i perfekt nyans.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Åska",
            "video": videoPath + "aska.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/aska_000"
        },
        "image-text": {
            "header": "Åska",
            "preamble": "Åska är en kulör som ger intensitet men som samtidigt upplevs pulsnedsänkande och trivsam. En färg som uppmuntrar till vila.",
            "image": imagePath + "aska-article.jpg",
            "links": [{ "name": "Se alla mellangrå kök ›", "url": "#" }],
            "facts": "NCS S 5500-N<br>Vattenbaserad",
            "swoosh-image": imagePath + "aska-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Åska",
            "products": [
                { "name": "Arkitekt Plus Åska", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "aska-scroll-1.jpg" },
                { "name": "Lindö Åska", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "aska-scroll-2.jpg" },
                { "name": "Form Åska", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "aska-scroll-3.jpg" },
                { "name": "Fagerö Åska", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "aska-scroll-4.jpg" }
            ]
        }
    },
    "granit": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(160, 160, 160, 0.8)",
            "image": imagePath + "granit-hero.jpg",
            "image-mobile": imagePath + "granit-hero-mobile.jpg",
            "header-key": "Granit", "header":
                "Våra mörkgrå kök i färgen",
            "preamble": "NCS S 7500-N &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "Stora delar av Sveriges berggrund består av granit.  Denna hårdsten kommer i många skiftande nyanser.",
            "preamble": "Vi hämtade vår inspiration till färgen Granit från den lite mörkare gråa graniten som är vanligt förekommande i  vårt land. Granit ger ett mjukare och sofistikerat intryck och är perfekt för den som vill ha en kraftfull inredning. Den är kontrastrik utan att det blir hårt och kallt.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Granit",
            "video": videoPath + "granit.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/granit_000"
        },
        "image-text": {
            "header": "Granit",
            "preamble": "Granit är en neutral-färg som passar till de flesta kulörer och köksstilar. Skapa ett stilsäkert kök genom att välja tillbehör från den mörkare skalan.",
            "image": imagePath + "granit-article.jpg",
            "links": [{ "name": "Se alla mörkgrå kök ›", "url": "#" }],
            "facts": "NCS S 7500-N<br>Vattenbaserad",
            "swoosh-image": imagePath + "granit-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Granit",
            "products": [
                { "name": "Arkitekt Plus Granit", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "granit-scroll-1.jpg" },
                { "name": "Lindö Granit", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "granit-scroll-2.jpg" },
                { "name": "Form Granit", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "granit-scroll-3.jpg" },
                { "name": "Fagerö Granit", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "granit-scroll-4.jpg" }
            ]
        }
    },
    "fro": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(160, 160, 160, 0.8)",
            "image": imagePath + "fro-hero.jpg",
            "image-mobile": imagePath + "fro-hero-mobile.jpg",
            "header-key": "Frö", "header":
                "Våra greige kök i färgen",
            "preamble": "NCS S 4502-Y &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "Moder jord är underbar. Från ett litet frö kan vi få de mest fantastiska råvarorna.",
            "preamble": "Färgen Frö tar sin inspiration från den lite mörkare beige tonen, där vi valt att addera lite gråa nyanser för att skapa en färg som ligger rätt i tiden. En färg för dig som vill ligga i det gråa spannet, men vill addera en gnutta värme.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Frö",
            "video": videoPath + "fro.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/frö_000"
        },
        "image-text": {
            "header": "Frö",
            "preamble": "Frö är en behaglig, omhuldande och dertagande färg som anpassar sig fint till alla färger du väljer att lägga till.",
            "image": imagePath + "fro-article.jpg",
            "links": [{ "name": "Se alla greige kök ›", "url": "#" }],
            "facts": "NCS S 4502-Y<br>Vattenbaserad",
            "swoosh-image": imagePath + "fro-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Frö",
            "products": [
                { "name": "Arkitekt Plus Frö", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "fro-scroll-1.jpg" },
                { "name": "Lindö Frö", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "fro-scroll-2.jpg" },
                { "name": "Form Frö", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "fro-scroll-3.jpg" },
                { "name": "Fagerö Frö", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "fro-scroll-4.jpg" }
            ]
        }
    },
    "sand": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(160, 160, 160, 0.8)",
            "image": imagePath + "sand-hero.jpg",
            "image-mobile": imagePath + "sand-hero-mobile.jpg",
            "header-key": "Sand", "header":
                "Våra beigea kök i färgen",
            "preamble": "NCS S 2005-Y20R &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "Få saker säger sommar så mycket som sandiga fötter.  Värmen, känslan och friheten.",
            "preamble": "Vår färg Sand är inspirerad av våra sandstränder som vi hittar längs vår vackra kust.  En beige nyans som växlar mot ljusgrått men som behåller sin värme, precis som en sandstrand i skymningen.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Sand",
            "video": videoPath + "sand.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/sand_000"
        },
        "image-text": {
            "header": "Sand",
            "preamble": "Sand är en jordad och rofylld kulör som har mer vitalitet i sig än exempelvis Bark, och som skapar en ombonad, ljus och sofistikerad känsla i köket.",
            "image": imagePath + "sand-article.jpg",
            "links": [{ "name": "Se alla beigea kök ›", "url": "#" }],
            "facts": "NCS S 2005-Y20R<br>Vattenbaserad",
            "swoosh-image": imagePath + "sand-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Sand",
            "products": [
                { "name": "Arkitekt Plus Sand", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "sand-scroll-1.jpg" },
                { "name": "Lindö Sand", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "sand-scroll-2.jpg" },
                { "name": "Form Sand", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "sand-scroll-3.jpg" },
                { "name": "Fagerö Sand", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "sand-scroll-4.jpg" }
            ]
        }
    },
    "lin": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(160, 160, 160, 0.8)",
            "image": imagePath + "lin-hero.jpg",
            "image-mobile": imagePath + "lin-hero-mobile.jpg",
            "header-key": "Lin", "header":
                "Våra ljusgröna kök i färgen",
            "preamble": "NCS S 2005-G10Y &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "Från en vacker sommaräng hämtade vi vår inspiration till färgen Lin.",
            "preamble": "En tidlös klassiker. Den lätta tonen i vår ljus- gröna färg Lin skapar en öppen och inbjudande känsla som lämnar dig med ett leende på läpparna. Det är en färg som andas nystart och som med sin gröna ton inspi- rerar till växtlighet och bidrar med livskraft och energi.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Lin",
            "video": videoPath + "lin.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/lin_000"
        },
        "image-text": {
            "header": "Lin",
            "preamble": "Vår Lin drar mer åt pastell i sin karaktär än Tall. I lantliga kök kan färgen med fördel matchas med varma metaller som mässing och koppar, samt bänkskivor av natursten",
            "image": imagePath + "lin-article.jpg",
            "links": [{ "name": "Se alla ljusgröna kök ›", "url": "#" }],
            "facts": "NCS S 2005-G10Y<br>Vattenbaserad",
            "swoosh-image": imagePath + "lin-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Lin",
            "products": [
                { "name": "Arkitekt Plus Lin", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "lin-scroll-1.jpg" },
                { "name": "Lindö Lin", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "lin-scroll-2.jpg" },
                { "name": "Form Lin", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "lin-scroll-3.jpg" },
                { "name": "Fagerö Lin", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "lin-scroll-4.jpg" }
            ]
        }
    },
    "bark": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(160, 160, 160, 0.8)",
            "image": imagePath + "bark-hero.jpg",
            "image-mobile": imagePath + "bark-hero-mobile.jpg",
            "header-key": "Bark", "header":
                "Våra bruna kök i färgen",
            "preamble": "NCS S 7005-Y20R &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "Alla har vi nog strosat genom en vacker höstskog.",
            "preamble": "När ljuset ligger lågt och andetagen hänger kvar i den krispiga luften. Inspirerade av skogens skiftande höstfärger skapade vi färgen Bark. Det är en varm, neutral och mörk kulör där energierna går långsamt. En färg som jordar oss, minskar stress och får oss att luta oss tillbaka. Likt barken på ett träd skiftar nyansen beroende på ljuset i rummet och materialen du väljer att matcha den med.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Bark",
            "video": videoPath + "bark.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/bark_000"
        },
        "image-text": {
            "header": "Bark",
            "preamble": " Färgen ger en varm och ombonad känsla. Den kan passa dig som gillar mörkgråa toner men vill ha en varmare känsla i köket.",
            "image": imagePath + "bark-article.jpg",
            "links": [{ "name": "Se alla bruna kök ›", "url": "#" }],
            "facts": "NCS S 7005-Y20R<br>Vattenbaserad",
            "swoosh-image": imagePath + "bark-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Bark",
            "products": [
                { "name": "Arkitekt Plus Bark", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "bark-scroll-1.jpg" },
                { "name": "Lindö Bark", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "bark-scroll-2.jpg" },
                { "name": "Form Bark", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "bark-scroll-3.jpg" },
                { "name": "Fagerö Bark", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "bark-scroll-4.jpg" }
            ]
        }
    },
    "hav": {
        "product-hero": {
            "products":
                [{ "label": "Handtag", "name": "Grimlund 2A Vit", "url": "#" },
                { "label": "Handtag", "name": "Grimlund 7B Vit", "url": "#" },
                { "label": "Lucka", "name": "Lindö", "url": "#" }],
            "expander-color": "rgba(160, 160, 160, 0.8)",
            "image": imagePath + "hav-hero.jpg",
            "image-mobile": imagePath + "hav-hero-mobile.jpg",
            "header-key": "Hav", "header":
                "Våra blåa kök i färgen",
            "preamble": "NCS S 8005-R80B &middot; Vattenbaserad"
        },
        "product-description": {
            "header": "Likt havets vågor som slår mot en klippa, eller som vandrar upp för en strand, skiftar vår blåa färg Hav i ton och känsla beroende på ljus och övriga färger i rummet.",
            "preamble": "Det är en trygg och pålitlig kulör som tillhör den avkopplade färgskalan. Med dess trygghet och mörker kan du skapa ett lugnare kök med en känsla av stillhet.",
            "header-color": "#a7a7a7"
        },
        "video-reveal": {
            "header": "Hav",
            "video": videoPath + "hav.mp4",
            "image-count": "20",
            "image-name": imagePath + "animations/hav_000"
        },
        "image-text": {
            "header": "Hav",
            "preamble": "Hav kan få ta mycket plats, eller spela en mer tillbakadragen roll beroende på hur du väljer att använda den. Matcha med mässing, och andra varma metaller, samt skinn och du får en lite lyxigare känsla. ",
            "image": imagePath + "hav-article.jpg",
            "links": [{ "name": "Se alla blåa kök ›", "url": "#" }],
            "facts": "NCS S 8005-R80B<br>Vattenbaserad",
            "swoosh-image": imagePath + "hav-swoosh.jpg"
        },

        "product-scroll-list": {
            "header": "Våra luckor i Hav",
            "products": [
                { "name": "Arkitekt Plus Hav", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "hav-scroll-1.jpg" },
                { "name": "Lindö Hav", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "hav-scroll-2.jpg" },
                { "name": "Form Hav", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "hav-scroll-3.jpg" },
                { "name": "Fagerö Hav", "description": "", "url": "#", "padded-image": "true", "image": imagePath + "hav-scroll-4.jpg" }
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