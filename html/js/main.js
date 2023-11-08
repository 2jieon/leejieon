
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
        const radius = 300 * dpr;
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
            visualAnim(295, 418, 255);
            } else if (window.matchMedia("(min-width: 1601px)").matches) {
            visualAnim(283, 390, 363);
            } else if (window.matchMedia("(min-width: 1201px)").matches) {
            visualAnim(283, 390, 363);
            } else if (window.matchMedia("(min-width: 769px)").matches) {
            visualAnim(270, 373, 243);
            } else if (window.matchMedia("(max-width: 768px)").matches) {
            visualAnim(270, 373, 243);
            }
        }

        window.addEventListener("resize", visualAnimResponsive);
        visualAnimResponsive();
        

//WOW
new WOW().init();
    
});
