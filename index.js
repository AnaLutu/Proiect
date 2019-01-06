function showSidebar() {
    document.getElementById("sidebar").style.width = "300px";
}
function hideSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

$("#indexMainImg").on("click", function () {
    console.log("1");
});

$("#form-input").on("click", function () {
    var deClonat = $("#deClonat"),
        input = $("#input-text").val();
    clona = deClonat.clone();
    clona.find(".paragraf")[0].innerText = input;
    clona.find(".cancel")[0].innerText = 'x';
    $(".cancel").on("click", function () {
        $("#deClonat").remove();
    });
    //clona[0].appendChild(p);
    clona.appendTo($("#lista"));
});
