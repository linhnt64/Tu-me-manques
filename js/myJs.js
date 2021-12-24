const textConfig = {
    text1: "Bonjour sếp",
    text2: "Có một bất ngờ nhỏ, không biết sếp có nhận không, mà không nhận cũng phải nhận, không cho từ chối đâu (ấn nút OK kìaaa)",
    text3: "Ông già noel tới đâyyy, sếp có muốn nhận quà không nhỉ =)))",
    text4: "Thoát ra là không có quà nha",
    text5: "Cóoooo :333",
    text6: "Ai thèm chứ ???",
    text7: "Thôi không trêu sếp nữa, muốn nhận quà gì thì điền đi để ông già noel tặng",
    text8: "Nút nhận quà :3 (click điii)",
    text9: "Muốn cái ôm từ người gửi link thôiiiii",
    text10: "Joyeux Noël",
    text11: "Biết món quà sếp muốn rồi nha =))) Còn một bất ngờ nhỏ nữa đang chờ sếp, ib '10067' sếp sẽ biết, ib với người gửi link ý nhá, k có ib cho người khác đâu đấy :))",
    text12: "Okii lunn <3",
};

$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $(".spinner").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            overflow: "visible",
        });
    }, 600);

    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#no").html(textConfig.text5);
    $("#yes").html(textConfig.text6);

    function firstQuestion() {
        $(".content").hide();
        Swal.fire({
            title: textConfig.text1,
            text: textConfig.text2,
            imageUrl: "img/cuteCat.jpg",
            imageWidth: 300,
            imageHeight: 300,
            background: '#fff url("img/iput-bg.jpg")',
            imageAlt: "Custom image",
        }).then(function() {
            $(".content").show(200);
        });
    }

    // switch button position
    function switchButton() {
        var audio = new Audio("sound/duck.mp3");
        audio.play();
        var leftNo = $("#no").css("left");
        var topNO = $("#no").css("top");
        var leftY = $("#yes").css("left");
        var topY = $("#yes").css("top");
        $("#no").css("left", leftY);
        $("#no").css("top", topY);
        $("#yes").css("left", leftNo);
        $("#yes").css("top", topNO);
    }
    // move random button póition
    function moveButton() {
        var audio = new Audio("sound/Swish1.mp3");
        audio.play();
        if (screen.width <= 600) {
            var x = Math.random() * 300;
            var y = Math.random() * 500;
        } else {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
        }
        var left = x + "px";
        var top = y + "px";
        $("#no").css("left", left);
        $("#no").css("top", top);
    }

    var n = 0;
    $("#no").mousemove(function() {
        if (n < 1) switchButton();
        if (n > 1) moveButton();
        n++;
    });
    $("#no").click(() => {
        if (screen.width >= 900) switchButton();
    });

    // generate text in input
    function textGenerate() {
        var n = "";
        var text = " " + textConfig.text9;
        var a = Array.from(text);
        var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
        var count = textVal.length;
        if (count > 0) {
            for (let i = 1; i <= count; i++) {
                n = n + a[i];
                if (i == text.length + 1) {
                    $("#txtReason").val("");
                    n = "";
                    break;
                }
            }
        }
        $("#txtReason").val(n);
    }

    // show popup
    $("#yes").click(function() {
        var audio = new Audio("sound/tick.mp3");
        audio.play();
        Swal.fire({
            title: textConfig.text7,
            html: true,
            width: 900,
            padding: "3em",
            html: "<input type='text' class='form-control' id='txtReason'  placeholder='Quà muốn nhậnnn'>",
            background: '#fff url("img/iput-bg.jpg")',
            backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonColor: "#fe8a71",
            cancelButtonColor: "#f6cd61",
            confirmButtonText: textConfig.text8,
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    width: 900,
                    confirmButtonText: textConfig.text12,
                    background: '#fff url("img/iput-bg.jpg")',
                    title: textConfig.text10,
                    text: textConfig.text11,
                    confirmButtonColor: "#83d0c9",
                    onClose: () => {
                        window.location = "http://m.me/monmm642k5";
                    },
                });
            }
        });

        $("#txtReason").focus(function() {
            var handleWriteText = setInterval(function() {
                textGenerate();
            }, 10);
            $("#txtReason").blur(function() {
                clearInterval(handleWriteText);
            });
        });
    });
});