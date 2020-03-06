var components = ["base-styles", "header", "product-hero", "text", "static-slider", "video-hero", "color-list", "color-navigation", "image-text", "video-reveal", "product-scroll-list", "color-swoosh", "product-contact"];


$.each(components, function (index, value) {
    $.get("components/" + value + ".html", function (data) {
        $.each($("component[data-name='" + value + "']"), function (index, existing) {
            var json = $(existing).attr('data-parameters');
            if (json) {
                var parameterized = data;
                json = JSON.parse(json);
                Object.keys(json).forEach(function (k) {
                    parameterized = parameterized.replace("{" + k + "}", json[k]);
                });
                $(existing).replaceWith(parameterized)
            } else {
                $(existing).replaceWith(data);
            }
        });

        if (index == components.length - 1) {
            setupComponents();
        }
    });
});


function setupComponents() {
}