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

        if (index == components.length - 1) {

            $('.c-color-navigation__link').each(function (index, value) {
                $(value).attr('href', getPageUrl($(value).attr('data-name')));
            });
        }
    });
});


function getPageUrl(name) {
    return "page-details.html?color=" + name;
}