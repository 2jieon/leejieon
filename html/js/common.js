// 以�鍮꾩쨷
$(".soon").click(function (event) {
    event.preventDefault();
    generateModalHTML("<span>�쒕퉬�� 以�鍮꾩쨷�낅땲��.</span><br>怨� �ㅽ뵂 �덉젙�대땲 議곌툑留� 湲곕떎�� 二쇱꽭��."); // common.js
});

// pc: header
$(".headerArea .navbar").on("mouseenter", function () {
    if (!isMobileTablet()) {
        $(".headerArea").addClass("active");
        if ($(".headerArea").hasClass("active")) {
            $(".headerArea").removeClass("transparent");
        }
    }
});

$(".headerArea").on("mouseleave", function () {
    if (!isMobileTablet()) {
        $(".headerArea").removeClass("active");
    }
});

// t, mo: header
$(".headerArea .hamburger").on("click", function (e) {
    if (isMobileTablet()) {
        $(this).toggleClass("on");
        $(".headerArea").toggleClass("active");
        $(".headerArea").removeClass("transparent");
        $("body").toggleClass("hidden");

        if ($(".headerArea .navbar > li.current_page_parent")) {
            $(".headerArea .navbar > li.current_page_parent").find(".sub-menu").slideDown();
        }
    }
    e.preventDefault();
});

// t, mo: header >  submenu open
$(".headerArea .navbar > li.menu-item-has-children > a").on("click", function (e) {
    if (isMobileTablet()) {
        if ($(this).parent("li").hasClass("on") == false) {
            $(".headerArea .navbar > li.menu-item-has-children").removeClass("on");
            $(this).parent("li").addClass("on");
            $(".headerArea .navbar > li.menu-item-has-children").find(".sub-menu").slideUp();
            $(this).parent("li").find(".sub-menu").slideDown();
        } else {
            $(this).parent("li").removeClass("on");
            $(this).parent("li").find(".sub-menu").slideUp();
        }

        // current page
        if ($(".headerArea .navbar > li").hasClass("current_page_parent")) {
            $(".headerArea .navbar > li").removeClass("current_page_parent");
        }
        if ($(".headerArea .navbar > li").hasClass("current_page_item")) {
            $(".headerArea .navbar > li").removeClass("current_page_item");
        }
        if ($(".headerArea .sub-menu > li").hasClass("current_page_item")) {
            $(".headerArea .sub-menu > li").removeClass("current_page_item");
        }
    }
    // e.preventDefault();
});

$(".headerArea .navbar > li > a").wrapInner("<span></span>");

// brain 230725
$(".headerArea .navbar > li .disabled").hide();

// header mypage
$(".headerArea .member.pc .txt > a").on("click", function (e) {
    $(".headerArea .member.pc .mypage").toggleClass("on");
    e.preventDefault();
});

// textarea focus
$(".textarea_box textarea").on("focusin", function () {
    $(this).parent().addClass("on");
});

$(".textarea_box textarea").on("focusout", function () {
    $(this).parent().removeClass("on");
});

// btn top
$(".btn_top a").on("click", function (e) {
    $("html, body").stop().animate({ scrollTop: 0 }, 400);
    e.preventDefault();
});

// SUB HEADER
// if(jQuery(".headerArea").hasClass("sub")) {
// 	//jQuery(".headerArea .logo img").attr("src", "/wp-content/themes/lowcarbon/assets/images/logo_color.svg")
// } else {
// 	jQuery(".headerArea .logo img").attr("src", "/wp-content/themes/lowcarbon/assets/images/logo.svg")
// };

// HEADER STICKY
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".headerArea").outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});
setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();

    // console.log("st", st);

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        // $(".headerArea").removeClass("down").addClass("up");
        // $(".headerArea").removeClass("transparent").addClass("up");

        // 紐⑤컮�� 硫붾돱媛� �쇱퀜議뚯쓣 �뚮뒗 �쒖쇅
        if (!$(".headerArea").hasClass("active")) {
            // $(".headerArea").removeClass("transparent").addClass("up");
            $(".headerArea").addClass("up");
            $(".headerArea .member.pc .mypage").removeClass("on");
        }
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            // $(".headerArea").removeClass("up").addClass("down");
            $(".headerArea").removeClass("up").removeClass("transparent");
            // $(".headerArea").removeClass("up");
        }
        if (st <= 5) {
            // $(".headerArea").removeClass("down");
            // $(".headerArea").addClass("transparent");
            // 硫붿씤�섏씠吏��먯꽌留� �щ챸
            if (jQuery(".headerArea").hasClass("main")) {
                if (!$(".headerArea").hasClass("active")) {
                    $(".headerArea").addClass("transparent");
                }
            }
        }
    }

    lastScrollTop = st;
}

jQuery("textarea").change(function () {
    var current_val = jQuery(this).val();

    current_val = current_val.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    current_val = current_val.replace(/'/g, "&quot;").replace(/"/g, "&#39;");
    current_val = current_val.replace(/(<([^>]+)>)/gi, "");
    jQuery(this).val(current_val);
});

//寃뚯떆�� 寃���
jQuery("#keyword").keydown(function (key) {
    if (key.keyCode == 13) {
        jQuery("#keyword_btn").trigger("click");
    }
});
jQuery("#keyword_btn").click(function () {
    if (document.location.hash && document.location.hash != "#1") {
        document.location.hash = "#1";
    }
    jQuery(this).parents("form").submit();
});

//xss 諛⑹�
jQuery("input[type=text],input[type=tel], textarea").on("propertychange change keyup paste input", function () {
    var current_value = jQuery(this).val();
    current_value = current_value.replace(/</gi, "");
    current_value = current_value.replace(/>/gi, "");
    current_value = current_value.replace("'", "");
    current_value = current_value.replace('"', "");
    jQuery(this).val(current_value);
});

// get �뚮━誘명꽣 媛��몄삤湲�
function getUrlParam(name) {
    // �쒓� �뚮━誘명꽣 �몄퐫��
    var search = unescape(encodeURIComponent(location.search));
    search = decodeURIComponent(search);

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// var isEmpty = function (value) {
//     if (value == "false" || value == 0 || value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
//         return true;
//     } else {
//         return false;
//     }
// };

// 諛곗뿴 �� 紐⑤뱺媛� 蹂�寃�
function updateArray(myArray, oldValue, newValue) {
    if (!myArray instanceof Array) return;
    myArray.forEach(function () {
        const index = myArray.indexOf(oldValue);
        if (index !== -1) myArray[index] = newValue;
    });
}

function deleteArray(myArray, value) {
    if (!myArray instanceof Array) return;
    // myArray.forEach(function(element, index, array) { // �뚮씪誘명꽣 : �꾩옱�꾩씠��, �몃뜳��, 諛곗뿴
    //     if(element==value) myArray.splice(index, 1);
    // });
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === value) {
            myArray.splice(i, 1);
            i--; //forEach瑜� �덉벐怨� for瑜� �곕㈃�� i--;瑜� �섎뒗 �댁쑀�� 諛곗뿴 ��젣 �� 湲몄씠媛� -1�� �섍린 �뚮Ц
        }
    }
}

//醫뗭븘�� 踰꾪듉
// jQuery(document).on("click", ".btn_like", function(event) {
//     jQuery(this).addClass("on")
// });
// jQuery(document).on("click", ".btn_like.on", function(event) {
//     jQuery(this).removeClass("on")
// });

//愿��щℓ�� 踰꾪듉
// jQuery(document).on("click", ".bookmark", function(event) {
//     jQuery(this).addClass("on")
// });
// jQuery(document).on("click", ".bookmark.on", function(event) {
//     jQuery(this).removeClass("on")
// });

// �꾩씠�� �뺤떇 泥댄겕
function check_id(user_id) {
    // �곷Ц���뚮Ц��, �レ옄留� �ъ슜媛���
    var reg = /^[a-zA-Z0-9]{4,20}$/;
    if (!reg.test(user_id)) {
        return false;
    } else {
        return true;
    }
}

// �대찓�� �뺤떇 泥댄겕
function check_email(user_email) {
    var reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg.test(user_email)) {
        return false;
    } else {
        return true;
    }
}

// url �뺤떇 泥댄겕
function check_url(url) {
    var reg = /^(https:\/\/|http:\/\/)/;

    if (!reg.test(url)) {
        return false;
    } else {
        var domainReg = /([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i;
        return domainReg.test(url);
    }
}

// 鍮꾨�踰덊샇泥댄겕 8~20 ���뚮Ц��,�レ옄,�뱀닔臾몄옄
function check_password(user_password) {
    var reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/; // 8~20�먮━ �곷Ц �レ옄 議고빀
    // var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/; ��// 8~20 �먮━ �곷Ц ���뚮Ц��, �レ옄, �뱀닔臾몄옄 議고빀
    if (!reg.test(user_password)) {
        return false; // 遺��곸젅�� 議고빀
    } else {
        return true;
    }
}

// �대��곕쾲�� 泥댄겕
function check_phone_cell(phoneNumber) {
    // var regMobile = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // �대��� 踰덊샇 �뺢퇋��
    var regMobile = /^010-?([0-9]{4})-?([0-9]{4})$/; // �대��� 踰덊샇 �뺢퇋��
    var regLandline = /^0([2-7]{1}[0-9]{0,1})-?([0-9]{3,4})-?([0-9]{4})$/; // �좎꽑 �꾪솕踰덊샇 �뺢퇋��

    if (regMobile.test(phoneNumber) || regLandline.test(phoneNumber)) {
        return true; // �щ컮瑜� �뺤떇
    } else {
        return false; // 遺��곸젅�� 議고빀
    }
}
// function check_phone_cell(user_phone_cell) {
//     // var reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // "-"媛� �덈뜕 �녿뜕 臾댁떆
//     var reg = /^010-?([0-9]{4})-?([0-9]{4})$/; // "-"媛� �덈뜕 �녿뜕 臾댁떆
//     if (!reg.test(user_phone_cell)) {
//         return false; // 遺��곸젅�� 議고빀
//     } else {
//         return true;
//     }
// }

// �몄쬆踰덊샇 泥댄겕
function check_email_auth_str(auth_str) {
    // console.log("auth_str", auth_str);
    // var reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // "-"媛� �덈뜕 �녿뜕 臾댁떆
    var reg = /^([0-9]{6})$/;
    if (!reg.test(auth_str)) {
        return false; // 遺��곸젅�� 議고빀
    } else {
        return true;
    }
}

function replace_phone_cell(phone) {
    // �먮쾲吏� �섏씠�덉씠 �쒖떆�섏� �딆쓬
    console.log("phone", phone);
    if (phone) return phone.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, ""); // xxx-xxxx-xxxx
    // if(phone) return phone.replace(/^(\d{0,2})(\d{0,3})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, ""); // xx-xxxx-xxxx
    // return false;
}

function replace_phone(value) {
    if (!value) {
        return "";
    }

    value = value.replace(/[^0-9]/g, "");

    let result = [];
    let restNumber = "";

    // 吏���쾲�몄� �섎㉧吏� 踰덊샇濡� �섎늻湲�
    if (value.startsWith("02")) {
        // �쒖슱 02 吏���쾲��
        result.push(value.substr(0, 2));
        restNumber = value.substring(2);
    } else if (value.startsWith("1")) {
        // 吏��� 踰덊샇媛� �녿뒗 寃쎌슦
        // 1xxx-yyyy
        restNumber = value;
    } else {
        // �섎㉧吏� 3�먮━ 吏���쾲��
        // 0xx-yyyy-zzzz
        result.push(value.substr(0, 3));
        restNumber = value.substring(3);
    }

    if (restNumber.length === 7) {
        // 7�먮━留� �⑥븯�� �뚮뒗 xxx-yyyy
        result.push(restNumber.substring(0, 3));
        result.push(restNumber.substring(3));
    } else {
        result.push(restNumber.substring(0, 4));
        result.push(restNumber.substring(4));
    }

    return result.filter((val) => val).join("-");
}

// �좎쭨泥댄겕
function check_date(date) {
    var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
    if (regex.text(date)) return true;
    return false;
}

function replace_date(date) {
    // �먮쾲吏� �섏씠�덉씠 �쒖떆�섏� �딆쓬
    date = date.replace(/[^0-9]/g, "");
    if (date.length > 8)
        return date
            .substring(0, date.length - 1)
            .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1-$2-$3")
            .replace(/\-{1,2}$/g, "");
    // console.log(date);
    // console.log(date.length);
    // if(date) return date.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, ""); // xxx-xxxx-xxxx
    // if(date) return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    if (date) return date.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, ""); // xx-xxxx-xxxx
    // return false;
}

// 紐⑤컮�쇳솗��
function isMobile() {
    // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // �붾㈃ �ш린濡� �먮떒
    return window.innerWidth <= 768;
}

function isMobileTablet() {
    // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(navigator.userAgent);
    // �붾㈃ �ш린濡� �먮떒
    return window.innerWidth <= 1180;
}

// 諛쏆묠�� �덈뒗 臾몄옄�몄� �뺤씤 �⑥닔
const isSingleCharacter = function (text) {
    var strGa = 44032; // 媛�
    var strHih = 55203; // ��

    var lastStrCode = text.charCodeAt(text.length - 1);

    if (lastStrCode < strGa || lastStrCode > strHih) {
        return false; //�쒓��� �꾨땺 寃쎌슦 false 諛섑솚
    }
    return (lastStrCode - strGa) % 28 == 0;
};

// '濡�' 媛� 遺숈뼱�� �섎뒗吏� '�쇰줈'媛� 遺숈뼱�� �섎뒗吏� 泥댄겕�댁＜�� �⑥닔
const roChecker = function (text) {
    return text + (isSingleCharacter(text) ? "濡�" : "�쇰줈");
};
// '瑜�' �� 遺숈뼱�� �섎뒗吏� '��'�� 遺숈뼱�� �섎뒗吏�瑜� 泥댄겕�댁＜�� �⑥닔
const rulChecker = function (text) {
    return text + (isSingleCharacter(text) ? "瑜�" : "��");
};

const gaChecker = function (text) {
    return text + (isSingleCharacter(text) ? "媛�" : "��");
};

var getCookie = function (name) {
    var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? value[2] : null;
};

var setCookie = function (name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
};

var deleteCookie = function (name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/";
};

// �꾨궡�좎쭨�쒓컙諛섑솚
var getNow = function () {
    var today = new Date();

    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    var dateString = year + "-" + month + "-" + day;

    var hours = ("0" + today.getHours()).slice(-2);
    var minutes = ("0" + today.getMinutes()).slice(-2);
    var seconds = ("0" + today.getSeconds()).slice(-2);
    var timeString = hours + ":" + minutes + ":" + seconds;

    return dateString + " " + timeString;
};

// 3�먮━�� �쇳몴 泥섎━
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// �대찓�� �뺤떇 泥댄겕
function checkEmail(str) {
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(str)) {
        return false;
    } else {
        return true;
    }
}
// if(!checkEmail(obEmail.value))	{
// 	alert("�대찓�� �뺤떇�� �섎せ�섏뿀�듬땲��");
// 	return;
// }

const isEmpty = function (value) {
    if (value == "false" || value == 0 || value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return true;
    } else {
        return false;
    }
};

function XSSCheck(str, level) {
    if (level == undefined || level == 0) {
        str = str.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g, "");
    } else if (level != undefined && level == 1) {
        str = str.replace(/\</g, "&lt;");
        str = str.replace(/\>/g, "&gt;");
    }
    return str;
}

/* �ㅽ넗由ъ� �쒖뼱 �⑥닔 �뺤쓽 */
var handleStorage = {
    // �ㅽ넗由ъ��� �곗씠�� �곌린(�대쫫, 留뚮즺��)
    setStorage: function (name, exp) {
        // 留뚮즺 �쒓컙 援ы븯湲�(exp瑜� ms�⑥쐞濡� 蹂�寃�)
        var date = new Date();
        date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

        // 濡쒖뺄 �ㅽ넗由ъ��� ���ν븯湲� (媛믪쓣 �곕줈 ���ν븯吏� �딄퀬 留뚮즺 �쒓컙�� ����)
        localStorage.setItem(name, date);
    },
    // �ㅽ넗由ъ� �쎌뼱�ㅺ린
    getStorage: function (name) {
        var now = new Date();
        now = now.setTime(now.getTime());
        // �꾩옱 �쒓컖怨� �ㅽ넗由ъ��� ���λ맂 �쒓컖�� 媛곴컖 鍮꾧탳�섏뿬 �쒓컙�� �⑥븘 �덉쑝硫� true, �꾨땲硫� false 由ы꽩
        return parseInt(localStorage.getItem(name)) > now;
    },
};

// asset
window.onload = function () {
    // .scroll_wrap > .txt > a �쒓렇 �대┃ ��
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");
    // �댁쁺�먯궛 �듭빱 �대┃ �� �ㅽ겕濡� �대룞
    var linkElements = document.querySelectorAll(".target_list li a");
    linkElements.forEach(function (linkElement) {
        linkElement.addEventListener("click", function (event) {
            event.preventDefault();
            var target = document.querySelector("#" + linkElement.getAttribute("href"));
            var targetTop = target.offsetTop;
            window.scrollTo({
                top: targetTop - 75,
                behavior: "smooth",
            });
        });
    });

    //
});

// dday
function getDday(eddt) {
    let now = new Date();
    let eddt_date = new Date(eddt);
    let gap = eddt_date.getTime() - now.getTime();
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    // gap = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
    console.log("gep", gap);
    if (gap < 0) {
        return false;
    } else {
        return "D-" + gap;
    }
}

// �덉씠�댄뙘�� �앹꽦
function generateModalHTML(message, action = "default") {
    fetch(modalFilePath)
        .then((response) => response.text())
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            // <p class="txt"> �붿냼�� �댁슜�� 媛��몄샂
            // const txtContent = doc.querySelector("#modal_text").innerHTML;

            // �꾩슂�� �곕씪 �댁슜�� �섏젙
            // const content = '<a href="mailto:contact@jbrix.co.kr">contact@jbrix.co.kr</a>硫붿씪濡�<br>�뚯썝�꾩씠�붿� 鍮꾨�踰덊샇瑜� �몄쬆�� �� �덈뒗 硫붿씪�� 諛쒖넚�섏뿀�듬땲��.';

            // <p class="txt"> �붿냼�� �댁슜�� �섏젙�� �댁슜�쇰줈 蹂�寃�
            doc.querySelector("#modal_text").innerHTML = message;

            // �섏젙�� �댁슜�� �곸슜�� HTML�� 媛��몄샂
            const dynamicHTML = doc.documentElement.innerHTML;

            // �숈쟻�쇰줈 �앹꽦�� HTML�� 而⑦뀒�대꼫 �붿냼�� 異붽�
            const container = document.getElementById("container_layer_alert");
            container.innerHTML = dynamicHTML;
            // document.body.innerHTML += dynamicHTML; // body�� 吏곸젒 異붽�

            // �대뼡 �앹뾽�몄� 援щ텇�섍린 �꾪빐 container �� data-action �띿꽦 異붽�
            document.getElementById("btn_alert_close").setAttribute("data-action", action);

            $(".layer_alert").addClass("on");
            $(".dim").css("display", "block").animate({ opacity: 1 }, 300);
        })
        .catch((error) => console.error("HTML 媛��몄삤湲� �ㅻ쪟:", error));
}

// �덉씠�댄뙘�� �リ린 踰꾪듉 �대깽�� �몃뱾�� /template-parts/popup.html
$(document).on("click", "#btn_alert_close, .dim", function () {
    $(".layer_alert").removeClass("on");
    $(".dim").fadeOut();
    // 0.5珥� �� �앹꽦�� 肄붾뱶 ��젣
    setTimeout(function () {
        const container = document.getElementById("container_layer_alert");
        container.innerHTML = "";
    }, 500);
});

// �좎쭨 �뺤떇 蹂��� (Y-m-d)
function convertDateFormat(date) {
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}