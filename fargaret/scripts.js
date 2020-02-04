var components = ["navigation", "text", "hero", "modal-card"];


$.each(components, function (index, value) {
    $.get("/components/" + value + ".html", function (data) {
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
    $('.modal-card').click(function (e) {
        e.preventDefault();

        $(this).closest('.modal-cards').toggleClass('modal-cards--expanded');

        $(this).addClass('modal-card--expanded');



        // $(this).css('transition', 'transform 1s ease');
        $(this).css('transform', 'translateY(-251px) scaleX(1.3) scaleY(2.5)');
    });
}