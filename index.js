// alert(window.innerWidth);

const thirty_sec = document.getElementById("30_sec");
const sixty_sec = document.getElementById("60_sec");
const ninty_sec = document.getElementById("90_sec");
const one_twenty_sec = document.getElementById("120_sec");
const one_fifty_sec = document.getElementById("150_sec");

const save_changes_button = document.getElementById("save_changes_button");
const disable_button = document.getElementById("disable_button");

const poilo = document.getElementById("poilo");
const second_card = document.getElementById("second_card");
const third_card = document.getElementById("third_card");
const fourth_card = document.getElementById("fourth_card");
const fifth_card = document.getElementById("fifth_card");

let x1 = poilo.offsetLeft;
let y1 = poilo.offsetTop;

let x2 = second_card.offsetLeft;
let y2 = second_card.offsetTop;

let x3 = third_card.offsetLeft;
let y3 = third_card.offsetTop;

let x4 = fourth_card.offsetLeft;
let y4 = fourth_card.offsetTop;

let x5 = fifth_card.offsetLeft;
let y5 = fifth_card.offsetTop;

let count = 0;
let buttons = [thirty_sec, sixty_sec, ninty_sec, one_twenty_sec, one_fifty_sec];

disable_button.onclick = function () {
    count++;

    if (count % 2 == 0) {
        disable_button.innerText = "Disable Auto Scrolling";

        for (let button of buttons) {
            button.disabled = false;
        }
    }

    else {

        disable_button.innerText = "Enable Auto Scrolling";

        for (let button of buttons) {
            button.disabled = true;
        }

    }

}
const icon = document.getElementById("icon");


if(window.innerWidth < 640){
icon.style.opacity = '0.2';

}

else{
    icon.style.right = "10%";
}

const body = document.body;
const alert_id = document.getElementById("alert_id");

thirty_sec.onclick = function () {
    save_changes_button.onclick = function () {

alert("Your page will automatically scroll each section after 30 sec");

        setTimeout(function () {
            window.scrollTo(x1, y1);
            setTimeout(function () {
                window.scrollTo(x2, y2);
                setTimeout(function () {
                    window.scrollTo(x3, y3);
                    setTimeout(function () {
                        window.scrollTo(x4, y4);
                        setTimeout(function () {
                            window.scrollTo(x5, y5);
                        }, 30000);
                    }, 30000);
                }, 30000);
            }, 30000);
        }, 30000);

    }

}


sixty_sec.onclick = function () {
    save_changes_button.onclick = function () {
        alert("Your page will automatically scroll each section after 60 sec");
        setTimeout(function () {
            window.scrollTo(x1, y1);
            setTimeout(function () {
                window.scrollTo(x2, y2);
                setTimeout(function () {
                    window.scrollTo(x3, y3);
                    setTimeout(function () {
                        window.scrollTo(x4, y4);
                        setTimeout(function () {
                            window.scrollTo(x5, y5);
                        }, 60000);
                    }, 60000);
                }, 60000);
            }, 60000);
        }, 60000);

    }

}

ninty_sec.onclick = function () {
    save_changes_button.onclick = function () {
        alert("Your page will automatically scroll each section after 90 sec");

        setTimeout(function () {
            window.scrollTo(x1, y1);
            setTimeout(function () {
                window.scrollTo(x2, y2);
                setTimeout(function () {
                    window.scrollTo(x3, y3);
                    setTimeout(function () {
                        window.scrollTo(x4, y4);
                        setTimeout(function () {
                            window.scrollTo(x5, y5);
                        }, 90000);
                    }, 90000);
                }, 90000);
            }, 90000);
        }, 90000);

    }

}

one_twenty_sec.onclick = function () {
    save_changes_button.onclick = function () {

        alert("Your page will automatically scroll each section after 120 sec");
        setTimeout(function () {
            window.scrollTo(x1, y1);
            setTimeout(function () {
                window.scrollTo(x2, y2);
                setTimeout(function () {
                    window.scrollTo(x3, y3);
                    setTimeout(function () {
                        window.scrollTo(x4, y4);
                        setTimeout(function () {
                            window.scrollTo(x5, y5);
                        }, 120000);
                    }, 120000);
                }, 120000);
            }, 120000);
        }, 120000);

    }

}

one_fifty_sec.onclick = function () {
    save_changes_button.onclick = function () {

        alert("Your page will automatically scroll each section after 150 sec");
    
        setTimeout(function () {
            window.scrollTo(x1, y1);
            setTimeout(function () {
                window.scrollTo(x2, y2);
                setTimeout(function () {
                    window.scrollTo(x3, y3);
                    setTimeout(function () {
                        window.scrollTo(x4, y4);
                        setTimeout(function () {
                            window.scrollTo(x5, y5);
                        }, 150000);
                    }, 150000);
                }, 150000);
            }, 150000);
        }, 150000);

    }

}
















