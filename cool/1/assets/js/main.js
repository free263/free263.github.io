$(document).ready(function () {
    getHitokoto();
    $(".loading").hide();
});

function getHitokoto() {
    $.ajax({
        url: "https://v1.hitokoto.cn/",
        dataType: "json",
        success: function (result) {
            $('#hitokoto').html(result.hitokoto + " — " + result.from);
        },
        error: function () {
            $('#hitokoto').html("Error...");
        }
    });
}

//异步加载背景
// function blobToDataURI(blob, callback) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//         callback(e.target.result);
//     }
//     reader.readAsDataURL(blob);
// }
// var url = "assets/img/bg.jpg";
// var xhr = new XMLHttpRequest();
// xhr.open('GET', url, true);
// xhr.responseType = "blob";
// xhr.onload = function () {
//     if (this.status == 200) {
//         var blob = this.response;
//         blobToDataURI(blob, function (t) {
//             $("body").css("background-image", "url('" + t + "')");
//             $("#background-small").addClass("smallBg");
//             $("#background-small").css("opacity", "0");
//         });
//     }
// }
// xhr.send();