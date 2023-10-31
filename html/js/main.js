
$(document).ready(function(){
    
    //팝업
    $('.popBg,.popBox').hide();
    $('.popBtn').click(function(){
        $('.popBg,.popBox').fadeIn();
        
        $('.popBg,.close').click(function(){
        $('.popBg,.popBox').fadeOut();
        })
    })
    
    //패널메뉴창
    $('.panelBg,.panelBox').hide();
    $('.panelBtn').click(function(){
        $('.panelBg,.panelBox').fadeIn();
        
        $('.panelBg,.panelclose').click(function(){
        $('.panelBg,.panelBox').fadeOut();
        })
    })


    //반응형헤더
    $(function() {
        AOS.init({
           //disable: false,
           //offset: 300,
           duration: 800,
           easing: 'ease',
           once: true,
           //delay: 200,
        });
        // 모바일에서 플로팅 메뉴 숨김
        if(isMobileTablet()) {
            $('.btn_support_box').hide();
        }

        $(window).on('scroll', function() {

            // 플로팅 접기
            if($(window).scrollTop() > 300) {
                $('.btn_support_box').removeClass('open');
            }


            if($(window).scrollTop() > 5) {
                $('.btn_top').addClass('on');
                // 0728 플로팅 메뉴 추가
                $('.btn_support').addClass('on');
                $('.btn_support_center').addClass('on');
                // $('.btn_support_box').removeClass('open');

            } else {
                $('.btn_top').removeClass('on');
                // 0728 플로팅 메뉴 추가
                $('.btn_support').removeClass('on');
                $('.btn_support_center').removeClass('on');
            }

            if($(window).scrollTop() >= $(document).height() - $(window).height()) { 
                $('.btn_top').addClass('default');
                $('.btn_top').removeClass('on');
                // 0728 플로팅 메뉴 추가
                $('.btn_support').addClass('default');
                $('.btn_support').removeClass('on');
                $('.btn_support_center').addClass('default');
                $('.btn_support_center').removeClass('on');
            } else {
                $('.btn_top').removeClass('default');
                // 0728 플로팅 메뉴 추가
                $('.btn_support').removeClass('default');
                $('.btn_support_center').removeClass('default');
            }

            if(isMobile()){
                if($(window).scrollTop() >= $('.footer h2').offset().top - $(window).height()) {
                    $('.btn_top').addClass('default');
                    $('.btn_top').removeClass('on');
                    // 0728 플로팅 메뉴 추가
                    $('.btn_support').addClass('default');
                    $('.btn_support').removeClass('on');
                    $('.btn_support_center').addClass('default');
                    $('.btn_support_center').removeClass('on');
                } else {
                    $('.btn_top').removeClass('default');
                    // 0728 플로팅 메뉴 추가
                    $('.btn_support').removeClass('default');
                    $('.btn_support_center').removeClass('default');
                }
            }
        })
    })


    /* 스크롤효과 */
    // 준비중
    $(".soon").click(function (event) {
        event.preventDefault();
        generateModalHTML("<span>서비스 준비중입니다.</span><br>곧 오픈 예정이니 조금만 기다려 주세요."); // common.js
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

            // 모바일 메뉴가 펼쳐졌을 때는 제외
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
                // 메인페이지에서만 투명
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

    //게시판 검색
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

    //xss 방지
    jQuery("input[type=text],input[type=tel], textarea").on("propertychange change keyup paste input", function () {
        var current_value = jQuery(this).val();
        current_value = current_value.replace(/</gi, "");
        current_value = current_value.replace(/>/gi, "");
        current_value = current_value.replace("'", "");
        current_value = current_value.replace('"', "");
        jQuery(this).val(current_value);
    });

    // get 파리미터 가져오기
    function getUrlParam(name) {
        // 한글 파리미터 인코딩
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

    // 배열 내 모든값 변경
    function updateArray(myArray, oldValue, newValue) {
        if (!myArray instanceof Array) return;
        myArray.forEach(function () {
            const index = myArray.indexOf(oldValue);
            if (index !== -1) myArray[index] = newValue;
        });
    }

    function deleteArray(myArray, value) {
        if (!myArray instanceof Array) return;
        // myArray.forEach(function(element, index, array) { // 파라미터 : 현재아이템, 인덱스, 배열
        //     if(element==value) myArray.splice(index, 1);
        // });
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] === value) {
                myArray.splice(i, 1);
                i--; //forEach를 안쓰고 for를 쓰면서 i--;를 하는 이유는 배열 삭제 후 길이가 -1이 되기 때문
            }
        }
    }

    //좋아요 버튼
    // jQuery(document).on("click", ".btn_like", function(event) {
    //     jQuery(this).addClass("on")
    // });
    // jQuery(document).on("click", ".btn_like.on", function(event) {
    //     jQuery(this).removeClass("on")
    // });

    //관심매장 버튼
    // jQuery(document).on("click", ".bookmark", function(event) {
    //     jQuery(this).addClass("on")
    // });
    // jQuery(document).on("click", ".bookmark.on", function(event) {
    //     jQuery(this).removeClass("on")
    // });

    // 아이디 형식 체크
    function check_id(user_id) {
        // 영문대소문자, 숫자만 사용가능
        var reg = /^[a-zA-Z0-9]{4,20}$/;
        if (!reg.test(user_id)) {
            return false;
        } else {
            return true;
        }
    }

    // 이메일 형식 체크
    function check_email(user_email) {
        var reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if (!reg.test(user_email)) {
            return false;
        } else {
            return true;
        }
    }

    // url 형식 체크
    function check_url(url) {
        var reg = /^(https:\/\/|http:\/\/)/;

        if (!reg.test(url)) {
            return false;
        } else {
            var domainReg = /([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i;
            return domainReg.test(url);
        }
    }

    // 비밀번호체크 8~20 대소문자,숫자,특수문자
    function check_password(user_password) {
        var reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/; // 8~20자리 영문 숫자 조합
        // var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/; ㅜ// 8~20 자리 영문 대소문자, 숫자, 특수문자 조합
        if (!reg.test(user_password)) {
            return false; // 부적절한 조합
        } else {
            return true;
        }
    }

    // 휴대폰번호 체크
    function check_phone_cell(phoneNumber) {
        // var regMobile = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // 휴대폰 번호 정규식
        var regMobile = /^010-?([0-9]{4})-?([0-9]{4})$/; // 휴대폰 번호 정규식
        var regLandline = /^0([2-7]{1}[0-9]{0,1})-?([0-9]{3,4})-?([0-9]{4})$/; // 유선 전화번호 정규식

        if (regMobile.test(phoneNumber) || regLandline.test(phoneNumber)) {
            return true; // 올바른 형식
        } else {
            return false; // 부적절한 조합
        }
    }
    // function check_phone_cell(user_phone_cell) {
    //     // var reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // "-"가 있던 없던 무시
    //     var reg = /^010-?([0-9]{4})-?([0-9]{4})$/; // "-"가 있던 없던 무시
    //     if (!reg.test(user_phone_cell)) {
    //         return false; // 부적절한 조합
    //     } else {
    //         return true;
    //     }
    // }

    // 인증번호 체크
    function check_email_auth_str(auth_str) {
        // console.log("auth_str", auth_str);
        // var reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // "-"가 있던 없던 무시
        var reg = /^([0-9]{6})$/;
        if (!reg.test(auth_str)) {
            return false; // 부적절한 조합
        } else {
            return true;
        }
    }

    function replace_phone_cell(phone) {
        // 두번째 하이픈이 표시되지 않음
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

        // 지역번호와 나머지 번호로 나누기
        if (value.startsWith("02")) {
            // 서울 02 지역번호
            result.push(value.substr(0, 2));
            restNumber = value.substring(2);
        } else if (value.startsWith("1")) {
            // 지역 번호가 없는 경우
            // 1xxx-yyyy
            restNumber = value;
        } else {
            // 나머지 3자리 지역번호
            // 0xx-yyyy-zzzz
            result.push(value.substr(0, 3));
            restNumber = value.substring(3);
        }

        if (restNumber.length === 7) {
            // 7자리만 남았을 때는 xxx-yyyy
            result.push(restNumber.substring(0, 3));
            result.push(restNumber.substring(3));
        } else {
            result.push(restNumber.substring(0, 4));
            result.push(restNumber.substring(4));
        }

        return result.filter((val) => val).join("-");
    }

    // 날짜체크
    function check_date(date) {
        var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
        if (regex.text(date)) return true;
        return false;
    }

    function replace_date(date) {
        // 두번째 하이픈이 표시되지 않음
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

    // 모바일확인
    function isMobile() {
        // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        // 화면 크기로 판단
        return window.innerWidth <= 768;
    }

    function isMobileTablet() {
        // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(navigator.userAgent);
        // 화면 크기로 판단
        return window.innerWidth <= 1180;
    }

    // 받침이 있는 문자인지 확인 함수
    const isSingleCharacter = function (text) {
        var strGa = 44032; // 가
        var strHih = 55203; // 힣

        var lastStrCode = text.charCodeAt(text.length - 1);

        if (lastStrCode < strGa || lastStrCode > strHih) {
            return false; //한글이 아닐 경우 false 반환
        }
        return (lastStrCode - strGa) % 28 == 0;
    };

    // '로' 가 붙어야 하는지 '으로'가 붙어야 하는지 체크해주는 함수
    const roChecker = function (text) {
        return text + (isSingleCharacter(text) ? "로" : "으로");
    };
    // '를' 이 붙어야 하는지 '을'이 붙어야 하는지를 체크해주는 함수
    const rulChecker = function (text) {
        return text + (isSingleCharacter(text) ? "를" : "을");
    };

    const gaChecker = function (text) {
        return text + (isSingleCharacter(text) ? "가" : "이");
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

    // 현내날짜시간반환
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

    // 3자리수 쉼표 처리
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 이메일 형식 체크
    function checkEmail(str) {
        var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if (!reg_email.test(str)) {
            return false;
        } else {
            return true;
        }
    }
    // if(!checkEmail(obEmail.value))	{
    // 	alert("이메일 형식이 잘못되었습니다");
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

    /* 스토리지 제어 함수 정의 */
    var handleStorage = {
        // 스토리지에 데이터 쓰기(이름, 만료일)
        setStorage: function (name, exp) {
            // 만료 시간 구하기(exp를 ms단위로 변경)
            var date = new Date();
            date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

            // 로컬 스토리지에 저장하기 (값을 따로 저장하지 않고 만료 시간을 저장)
            localStorage.setItem(name, date);
        },
        // 스토리지 읽어오기
        getStorage: function (name) {
            var now = new Date();
            now = now.setTime(now.getTime());
            // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여 시간이 남아 있으면 true, 아니면 false 리턴
            return parseInt(localStorage.getItem(name)) > now;
        },
    };

    // asset
    // window.onload = function () {
    //     // .scroll_wrap > .txt > a 태그 클릭 시
    // };

    document.addEventListener("DOMContentLoaded", function () {
        console.log("DOMContentLoaded");
        // 운영자산 앵커 클릭 시 스크롤 이동
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

    // 레이어팝업 생성
    function generateModalHTML(message, action = "default") {
        fetch(modalFilePath)
            .then((response) => response.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                // <p class="txt"> 요소의 내용을 가져옴
                // const txtContent = doc.querySelector("#modal_text").innerHTML;

                // 필요에 따라 내용을 수정
                // const content = '<a href="mailto:contact@jbrix.co.kr">contact@jbrix.co.kr</a>메일로<br>회원아이디와 비밀번호를 인증할 수 있는 메일이 발송되었습니다.';

                // <p class="txt"> 요소의 내용을 수정된 내용으로 변경
                doc.querySelector("#modal_text").innerHTML = message;

                // 수정된 내용이 적용된 HTML을 가져옴
                const dynamicHTML = doc.documentElement.innerHTML;

                // 동적으로 생성된 HTML을 컨테이너 요소에 추가
                const container = document.getElementById("container_layer_alert");
                container.innerHTML = dynamicHTML;
                // document.body.innerHTML += dynamicHTML; // body에 직접 추가

                // 어떤 팝업인지 구분하기 위해 container 에 data-action 속성 추가
                document.getElementById("btn_alert_close").setAttribute("data-action", action);

                $(".layer_alert").addClass("on");
                $(".dim").css("display", "block").animate({ opacity: 1 }, 300);
            })
            .catch((error) => console.error("HTML 가져오기 오류:", error));
    }

    // 레이어팝업 닫기 버튼 이벤트 핸들러 /template-parts/popup.html
    $(document).on("click", "#btn_alert_close, .dim", function () {
        $(".layer_alert").removeClass("on");
        $(".dim").fadeOut();
        // 0.5초 후 생성한 코드 삭제
        setTimeout(function () {
            const container = document.getElementById("container_layer_alert");
            container.innerHTML = "";
        }, 500);
    });

    // 날짜 형식 변환 (Y-m-d)
    function convertDateFormat(date) {
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        return year + "-" + month + "-" + day;
    }



    /* 슬라이더1 */
    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        centerMode: false,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 766,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
            }
        ]
        });


        // 원 모양의 div 요소를 마우스 커서 위치로 이동하는 부분
        const cursor = document.querySelector(".circle");
        window.addEventListener("mousemove", e => {
            //GSAP
            gsap.to(cursor, {duration: 4, left: e.pageX -450, top: e.pageY -450});
        });
        

        // 스윙 애니메이션을 그리는 부분
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const pi = Math.PI;
        const points = 12;
        const radius = 350 * dpr;
        const h = 800 * dpr;
        const w = 800 * dpr;
        const center = {
            x: w / 2 * dpr,
            y: h / 2 * dpr
        };
        const circles = [];
        const rangeMin = 1;
        const rangeMax = 30;

        let mouseY = 0;
        let tick = 0;

        var easing = 0.1; // 이동 속도 조절
        
        // 그라디언트 스타일을 설정
        const gradient1 = ctx.createLinearGradient(0, 0, w, 0);
        gradient1.addColorStop(0, '#CAD8F9');
        gradient1.addColorStop(1, '#CAD8F9');
        const gradients = [gradient1];

        // 캔버스 크기와 디바이스 픽셀 비율 설정
        ctx.scale(dpr, dpr);
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';

        // 스윙 애니메이션을 그리기 위한 초기 포인트 설정
        for (var idx = 0; idx <= gradients.length - 1; idx++) {
            let swingpoints = [];
            let radian = 0;

            for (var i = 0; i < points; i++) {
                radian = pi * 2 / points * i;
                var ptX = center.x + radius * Math.cos(radian);
                var ptY = center.y + radius * Math.sin(radian);

                swingpoints.push({
                    x: ptX,
                    y: ptY,
                    radian: radian,
                    range: random(rangeMin, rangeMax),
                    phase: 0
                });
            }

            circles.push(swingpoints);
        }

        // 스윙 애니메이션을 그리는 함수
        function swingCircle() {
            ctx.clearRect(0, 0, w * dpr, h * dpr);
            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = 'screen';

            for (let k = 0; k < circles.length; k++) {
                let swingpoints = circles[k];

                for (var i = 0; i < swingpoints.length; i++) {
                    swingpoints[i].phase += random(1, 10) * -0.01;

                    let phase = 4 * Math.sin(tick / 65);

                    if (mouseY !== 0) {
                        phase = mouseY / 200 + 1;
                    }

                    var r = radius + (swingpoints[i].range * phase * Math.sin(swingpoints[i].phase)) - rangeMax;
                    swingpoints[i].radian += pi / 360;
                    var ptX = center.x + r * Math.cos(swingpoints[i].radian);
                    var ptY = center.y + r * Math.sin(swingpoints[i].radian);

                    swingpoints[i] = {
                        x: ptX,
                        y: ptY,
                        radian: swingpoints[i].radian,
                        range: swingpoints[i].range,
                        phase: swingpoints[i].phase,
                    };
                }

                const fill = gradients[k];
                drawCurve(swingpoints, fill);
            }

            tick++;
            requestAnimationFrame(swingCircle);
        }

        // 블러 그리고 곡선 그리기 함수
        function drawCurve(pts, fillStyle) {
            ctx.filter = "blur(70px)";
            ctx.fillStyle = fillStyle;
            ctx.beginPath();
            ctx.moveTo(
                (pts[cycle(-1, points)].x + pts[0].x) / 2,
                (pts[cycle(-1, points)].y + pts[0].y) / 2
            );
            for (var i = 0; i < pts.length; i++) {
                ctx.quadraticCurveTo(
                    pts[i].x,
                    pts[i].y,
                    (pts[i].x + pts[cycle(i + 1, points)].x) / 2,
                    (pts[i].y + pts[cycle(i + 1, points)].y) / 2
                );
            }
            ctx.closePath();
            ctx.fill();
        }


        // 인덱스 순환 함수
        function cycle(num1, num2) {
            return (num1 % num2 + num2) % num2;
        }

        // 랜덤 정수 생성 함수
        function random(num1, num2) {
            var max = Math.max(num1, num2);
            var min = Math.min(num1, num2);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        requestAnimationFrame(swingCircle);

        //객체 회전 함수
        function rotate(x, y, angle, center) {
            var radians = (Math.PI / 180) * angle,
                cos = Math.cos(radians),
                sin = Math.sin(radians),
                nx = (cos * (x - center.x)) - (sin * (y - center.y)) + center.x,
                ny = (sin * (x - center.x)) + (cos * (y - center.y)) + center.y;
            return { x: nx, y: ny };
        }

        // visual section 애니메이션
        var mainLead = document.querySelectorAll(".lead_change > div");
        var mainLeadBox = document.querySelector(".lead_change");
        var animTimeouts = [];
        var animIntervals = [];

        function visualAnim(a, b, c) {
            animTimeouts.push(
            setTimeout(() => {
                animTimeouts.push(
                setTimeout(() => {
                    mainLead[0].classList.add("on");
                    mainLead[1].classList.remove("on");
                    mainLead[2].classList.remove("on");
                    mainLeadBox.style.width = a + "px";
                }, 0)
                );
                animTimeouts.push(
                setTimeout(() => {
                    mainLead[0].classList.remove("on");
                    mainLeadBox.style.width = b + "px";
                    mainLead[1].classList.add("on");
                }, 3000)
                );
                animTimeouts.push(
                setTimeout(() => {
                    mainLead[1].classList.remove("on");
                    mainLeadBox.style.width = c + "px";
                    mainLead[2].classList.add("on");
                }, 6000)
                );
                animIntervals.push(
                setInterval(() => {
                    animTimeouts.push(
                    setTimeout(() => {
                        mainLead[0].classList.add("on");
                        mainLead[1].classList.remove("on");
                        mainLead[2].classList.remove("on");
                        mainLeadBox.style.width = a + "px";
                    }, 0)
                    );
                    animTimeouts.push(
                    setTimeout(() => {
                        mainLead[0].classList.remove("on");
                        mainLeadBox.style.width = b + "px";
                        mainLead[1].classList.add("on");
                    }, 3000)
                    );
                    animTimeouts.push(
                    setTimeout(() => {
                        mainLead[1].classList.remove("on");
                        mainLeadBox.style.width = c + "px";
                        mainLead[2].classList.add("on");
                    }, 6000)
                    );
                }, 9000)
                );
            }, 1200)
            );
        }

        // 화면크기에 따른 폰트사이즈 변경
        function visualAnimResponsive() {
            animTimeouts.forEach((timeout) => clearTimeout(timeout));
            animIntervals.forEach((interval) => clearInterval(interval));
            animTimeouts = [];
            animIntervals = [];
            if (window.matchMedia("(min-width: 1800px)").matches) {
            visualAnim(293, 420, 393);
            } else if (window.matchMedia("(min-width: 1601px)").matches) {
            visualAnim(263, 370, 343);
            } else if (window.matchMedia("(min-width: 1201px)").matches) {
            visualAnim(263, 363, 235);
            } else if (window.matchMedia("(min-width: 769px)").matches) {
            visualAnim(250, 353, 223);
            } else if (window.matchMedia("(max-width: 768px)").matches) {
            visualAnim(250, 353, 223);
            }
        }

        window.addEventListener("resize", visualAnimResponsive);
        visualAnimResponsive();
        

//WOW
new WOW().init();
    
});