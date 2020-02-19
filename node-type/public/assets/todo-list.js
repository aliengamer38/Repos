$(document).ready(function() {
    console.log("Ready");
    $("form").on("submit", function() {
        let item = $("form input");
        let todo = { item: item.val() };
        console.log("Ajax call");
        $.ajax({
            type: "POST",
            url: "/todo",
            data: todo,
            success: function(data) {
                console.log(this.type);
                location.reload();
            }
        });
        return false;
    });
    $("li").on("click", function() {
        console.log("deletejson");
        let item = $(this)
            .text()
            .replace(/ /g, "-");
        console.log(item);
        $.ajax({
            type: "DELETE",
            url: "/todo/" + item,
            success: function(data) {
                console.log("success");
                location.reload();
            }
        });
    });
});
