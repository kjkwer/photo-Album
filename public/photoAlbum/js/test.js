$(function () {

    $('#music')[0].play();

    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8',
            'page9', 'page10'
        ],
        menu: '#menu',
        afterLoad: aa,
        onLeave: bb,
    });
    function bb(a, b, c) {
        if(b==10){
            $('.jiantou').removeClass('updown');
        }else{
            let ddd = $('.jiantou').hasClass('updown');
            if(!ddd){
                $('.jiantou').addClass('updown')
            }
        }
        zhixing(b);
    }
    
    function aa(a, b) {
        console.log(a, b)
    }

    var c = $('#menu li').index($('#menu li.active'))
    c = parseInt(c) + 1;
    zhixing(c);
    $('.music').click(function () {
        var music = $('#music')[0];
        if (music.paused) {
            music.play();
            $('.music').addClass('xuanzhuan');
        } else {
            music.pause();
            $('.music').removeClass('xuanzhuan');
        }
    })


    // document.onclick = function(){
    //     var c = $('#menu li').index($('#menu li.active'))
    //     c = parseInt(c) + 1;
    //     $('#dowebok').fullpage.moveTo(c);
    // }
    // var ddd = 0;
    // $('input').blur(function(){
    //     gogo();
    // })
    // $('textarea').blur(function(){
    //     gogo();
    // })
    // $('input').focus(function(){
    //     let c = $('#dowebok').css('transform');
    //     c = c.split(',');
    //     c = c[(c.length-1)];
    //     c = c.replace(')','');
    //     c = parseInt(c);
    //     ddd = c;
    //     console.log(c)
    // })
    // function gogo(){
    //     $('#dowebok').css('transform','translate3d(0px,'+ddd+'px,0px)');
    // }

    var target = null;
    $('.Shuru').click(function(){
        $('.tanchu input').show();
        $('.tanchu textarea').hide();
        $('.zhezhao').show();
        $('.tanchu').show();
        target = $(this);
        // $('.tanchu input').val(target.text());
    })
    $('.s3_s3').click(function(){
        $('.tanchu input').hide();
        $('.tanchu textarea').show();
        $('.zhezhao').show();
        $('.tanchu').show();
        target = $(this);
    })
    $('.zhezhao').click(function(){
        $('.zhezhao').hide();
        $('.tanchu').hide();
        $('.tanchu input').val('');
        $('.tanchu textarea').val('');
    })

    $('.tanchu .but1').click(function(){
        var c = $('.tanchu input').val();
        var d = $('.tanchu textarea').val();
        if(c!=''){
            target.text(c);
        }else{
            d = d.replace(/[\n\r]/g,'<br>');
            target.html(d);
        }
        $('.zhezhao').hide();
        $('.tanchu').hide();
        $('.tanchu input').val('');
        $('.tanchu textarea').val('');

    })
})

function zhixing(a) {
    eval('page'+a+"()");
}

function page1() {
    var item = [
        {
            a:'#section1 .img1',
            b:'fadeInLeft animated animated1',
        },
        {
            a:'#section1 .img2',
            b:'fadeInRight animated animated1',
        },
        {
            a:'#section1 .img4',
            b:'fadeInLeft animated animated2',
        },
        {
            a:'#section1 .img7',
            b:'fadeInDown animated animated1',
        },
        {
            a:'#section1 .img8',
            b:'fadeInDown animated animated1',
        },
    ];
    addClass(item[0]);
    addClass(item[1]);
    setTimeout(function(){
        addClass(item[2]);
        addClass(item[3]);
        addClass(item[4]);
    },500)

    setTimeout(function(){
        removeClass(item);
    },3000)
}

function page2() {
    var item = [
        {
            a:'#section2 .img13',
            b:'fadeInLeft animated animated1',
        },
        {
            a:'#section2 .img12',
            b:'fadeInDown animated ',
        },
        {
            a:'#section2 .img10',
            b:'fadeInDown animated animated1',
        },
        {
            a:'#section2 .img14',
            b:'fadeInRight animated animated1',
        },
        {
            a:'#section2 .img15',
            b:'slideInDown animated animated1',
        },
    ]
    addClass(item[0]);
    addClass(item[1]);
    addClass(item[2]);
    addClass(item[3]);
    setTimeout(function(){
        removeClass(item);
    },3000)
}
function page3() {
    var item = [
        {
            a:'#section3 .s3_h1',
            b:'fadeInLeft animated ',
        },
        {
            a:'#section3 .s3_s3',
            b:'fadeInDown animated ',
        },
    ]
    addClass(item[0]);
    addClass(item[1]);
    setTimeout(function(){
        removeClass(item);
    },3000)
}
function page4() {
    $('#section4  .s4_t1').css({'right':'-100vw','opacity':'0'});
    $('#section4  .s4_t2').css({'left':'-100vw','opacity':'0'});
    $('#section4  .s4_t3').css({'right':'-100vw','opacity':'0'});
    let item = [
        {
            a:'#section4 .img16',
            b:'fadeInRight animated'
        },
        {
            a:'#section4 .s4_h1',
            b:'fadeInLeft animated'
        },
        {
            a:'#section4 .img17',
            b:'fadeInLeft animated'
        },
        {
            a:'#section4 .s4_p',
            b:'fadeInLeft animated'
        },
        {
            a:'#section4 .img18',
            b:'fadeInLeft animated'
        },
    ]
    $('#section4  .s4_t1').animate({
        right:'3vw',
        opacity:1,
    },2000)
    $('#section4  .s4_t2').animate({
        left:'3vw',
        opacity:1,
    },2200)
    $('#section4  .s4_t3').animate({
        right:'-9vw',
        opacity:1,
    },2300)
    setTimeout(function(){
        addClass(item[0]);
        addClass(item[1]);
        setTimeout(function(){
            addClass(item[2]);
            setTimeout(function(){
                addClass(item[3]);
                addClass(item[4]);
            },100)
        },100)
    },500)

    setTimeout(function(){
        removeClass(item);
    },3000)
}
function page5() {
    let item = [
        {
            a:'#section5 .s5_t2',
            b:'fadeInRight animated1'
        },
        {
            a:'#section5 .s5_t1',
            b:'fadeInLeft animated1'
        },
        {
            a:'#section5 .s5_t3',
            b:'fadeInDown animated2'
        },
        {
            a:'#section5 .img20',
            b:'fadeInRight animated1'
        },
        {
            a:'#section5 .img21',
            b:'fadeInRight animated1'
        },
        {
            a:'#section5 .s5_h1',
            b:'fadeInUp animated1'
        },
    ]
    addClass(item[0]);
    addClass(item[1]);
    addClass(item[2]);
    setTimeout(function(){
        addClass(item[3]);
        addClass(item[4]);
        addClass(item[5]);
    },500)
    setTimeout(function(){
        removeClass(item);
    },3000)
}
function page6() {
    let item = [
        {   
            a:'#section6 .img23',
            b:'fadeInRight animated1'
        },
        {   
            a:'#section6 .s6_h1',
            b:'fadeInDown animated1'
        },
        {   
            a:'#section6 .img24',
            b:'fadeInLeft animated1'
        },
        {   
            a:'#section6 .img25',
            b:'fadeInLeft animated1'
        },
    ]
    addClass(item[0]);
    addClass(item[1]);
    setTimeout(function(){
        addClass(item[2]);
        addClass(item[3]); 
    },200)
    setTimeout(function(){
        removeClass(item);
    },3000)
}
function page7() {
    $('#section7  .s7_t1').css({'right':'-100vw','opacity':'0'});
    let item = [
        {
            a:'#section7 .s7_t2',
            b:'fadeInLeft animatedY1'
        },
        {
            a:'#section7 .img26',
            b:'fadeInRight animatedY1'
        },
    ]

    $('#section7  .s7_t1').animate({
        right:'0vw',
        opacity:1
    },1300)

    addClass(item[0]);
    addClass(item[1]);

    setTimeout(function(){
        removeClass(item);
    },3000)
}
function page8() {
    let item = [
        {
            a:'#section8 .s6_h1',
            b:'fadeInLeft animated1'
        },
        {
            a:'#section8 .img27',
            b:'fadeInRight animated1'
        },
        {
            a:'#section8 .s8_t1',
            b:'fadeInLeft animated2'
        },
        {
            a:'#section8 .img28',
            b:'fadeInUp animatedY1'
        },
    ]
    addClass(item[0]);
    addClass(item[1]);
    setTimeout(function(){
        addClass(item[2]);
        addClass(item[3]);
    },400)
    setTimeout(function(){
        removeClass(item);
    },3000)
}
function page9() {
    var item = [
        {
            a:'#section9 .img13',
            b:'fadeInLeft animated animated1',
        },
        {
            a:'#section9 .img12',
            b:'fadeInDown animated ',
        },
        {
            a:'#section9 .img10',
            b:'fadeInDown animated animated1',
        },
        {
            a:'#section9 .img14',
            b:'fadeInRight animated animated1',
        },
        {
            a:'#section9 .img15',
            b:'slideInDown animated animated1',
        },
    ]
    addClass(item[0]);
    addClass(item[1]);
    addClass(item[2]);
    addClass(item[3]);
    setTimeout(function(){
        removeClass(item);
    },3000)
}
function page10() {}









function addClass(item){
    $(item.a).addClass(item.b);
}
function removeClass(item){
    for(let i=0;i<item.length;i++){
        $(item[i].a).removeClass(item[i].b);
    }
}



