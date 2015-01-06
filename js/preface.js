$(".caption").append('<a href="#" class="btn btn-primary btn-xs">详细介绍</a>');
$(".caption").on("click", "a", function () {
    var title = $(this).prevAll("h4").html();
    var content = $(this).prev().html();
    $("#modal .modal-title").html(title);
    $("#modal .modal-body").html(content);
    $("#modal").modal('show');
    return false;
});
var mql = window.matchMedia("(min-width: 768px)");
flowpic(mql);
console.log(mql.matches);
function flowpic(mql) {
    if (mql.matches) {
        var col1 = $('<div class="col-sm-3"></div>');
        var col2 = $('<div class="col-sm-3"></div>');
        var col3 = $('<div class="col-sm-3"></div>');
        var col4 = $('<div class="col-sm-3"></div>');
        var items = $("div.col-sm-3");
        items.each(function (index) {
            $(this).removeClass("col-xs-12");
            $(this).removeClass("col-sm-3");
            if (index % 4 === 1) {
                col1.append($(this));
            } else if (index % 4 === 2) {
                col2.append($(this));
            } else if (index % 4 === 3) {
                col3.append($(this));
            } else if (index % 4 === 0) {
                col4.append($(this));
            }
        });
        var items = $("#items");
        items.empty();
        items.append(col1);
        items.append(col2);
        items.append(col3);
        items.append(col4);
    }
}

