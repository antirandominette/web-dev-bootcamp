//Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on X to delete a todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//Enter key create todo
$('input[type = "text"]').keypress(function(event) {
    let todoTitle = "";

    if(event.which === 13) {
        todoTitle = $(this).val();
        $(this).val("");

        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoTitle}</li>`);
    }
});

//Click on plus to toggle text input
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})