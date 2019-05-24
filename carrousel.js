let slideOne = document.getElementById("slideOne");
let slideTwo = document.getElementById("slideTwo");
let slideThree = document.getElementById("slideThree");
let slideFour = document.getElementById("slideFour");
let slideFive = document.getElementById("slideFive");
let slideSix = document.getElementById("slideSix");
let slideSeven = document.getElementById("slideSeven");
let slideHeight = document.getElementById("slideHeight");

xOne = 0;
xTwo = 25;
xThree = 50;
xFour = 75;
xFive = 100;
xSix = -25;
xSeven = -50;
xHeight = 125;

setInterval( function() {
    setTimeout(function() {
        
        xOne = xOne + 25;
        slideOne.style.left = xOne + "%";

        if (xOne > 125) {
            slideOne.style.visibility = 'hidden';
            xOne = -50;
        };

        if (xOne >= 0) {
            slideOne.style.visibility = 'visible';
        };

        // ============================================

        xTwo = xTwo + 25;
        slideTwo.style.left = xTwo + "%";

        if (xTwo > 125) {
            slideTwo.style.visibility = 'hidden';
            xTwo = -50;
        };

        if (xTwo >= 0) {
            slideTwo.style.visibility = 'visible';
        };

        // ============================================

        xThree = xThree + 25;
        slideThree.style.left = xThree + "%";

        if (xThree > 125) {
            slideThree.style.visibility = 'hidden';
            xThree = -50;
        };

        if (xThree >= 0) {
            slideThree.style.visibility = 'visible';
        };

        // ============================================

        xFour = xFour + 25;
        slideFour.style.left = xFour + "%";

        if (xFour > 125) {
            slideFour.style.visibility = 'hidden';
            xFour = -50;
        };

        if (xFour >= 0) {
            slideFour.style.visibility = 'visible';
        };

        // ============================================

        xFive = xFive + 25;
        slideFive.style.left = xFive + "%";

        if (xFive > 125) {
            slideFive.style.visibility = 'hidden';
            xFive = -50;
        };

        if (xFive >= 0) {
            slideFive.style.visibility = 'visible';
        };

        // ============================================

        xSix = xSix + 25;
        slideSix.style.left = xSix + "%";

        if (xSix > 125) {
            slideSix.style.visibility = 'hidden';
            xSix = -50;
        };

        if (xSix >= 0) {
            slideSix.style.visibility = 'visible';
        };

        // ============================================

        xSeven = xSeven + 25;
        slideSeven.style.left = xSeven + "%";

        if (xSeven > 125) {
            slideSeven.style.visibility = 'hidden';
            xSeven = -50;
        };

        if (xSeven >= 0) {
            slideSeven.style.visibility = 'visible';
        };

        // ============================================

        xHeight = xHeight + 25;
        slideHeight.style.left = xHeight + "%";

        if (xHeight > 125) {
            slideHeight.style.visibility = 'hidden';
            xHeight = -50;
        };

        if (xHeight >= 0) {
            slideHeight.style.visibility = 'visible';
        };

    }, 3000);
},  4000 )