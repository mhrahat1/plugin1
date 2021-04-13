$(document).ready(function(){
	// counter plugin
	$('.counter').counterUp({
    delay: 10,
    time: 1000
    });
    // curve text
    var bezier = function (t)
    {
        var px = [100.0, 350.0, 500.0, 900.0],
            py = [400.0,  50.0, 500.0, 200.0],
            ax = [px[0], 3.0 * (px[1] - px[0]), 3.0 * (px[2] - 2.0 * px[1] + px[0]), px[3] - 3.0 * px[2] + 3.0 * px[1] - px[0]],
            ay = [py[0], 3.0 * (py[1] - py[0]), 3.0 * (py[2] - 2.0 * py[1] + py[0]), py[3] - 3.0 * py[2] + 3.0 * py[1] - py[0]],
            cx = ax[0] + ax[1] * t + ax[2] * t * t + ax[3] * t * t * t,
            cy = ay[0] + ay[1] * t + ay[2] * t * t + ay[3] * t * t * t;

        return {
            x: cx,
            y: cy
        };
    };

    $('#text3').curvedText({
        curve:    bezier,
        domain:   [0.0, 1.0],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 }
    });

    // nice scroll
    $("body").niceScroll({
    	cursorcolor: "#275252",
    	cursorwidth: "10px",
    	cursorborder: "none",
    	scrollspeed: 80,
        mousescrollstep: 40,
    });
    // pageloader
     window.FakeLoader.init({
     	auto_hide:true
     });

});
    
    // wow js
    wow = new WOW({
        mobile:false,
        })
    wow.init();