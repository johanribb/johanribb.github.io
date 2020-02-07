var components = [];


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