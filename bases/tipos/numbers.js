"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villans = 20;
    if (avengers < villans) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
