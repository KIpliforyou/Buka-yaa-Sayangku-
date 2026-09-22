function checkPassword() {

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("error");

    const correctPassword =
        "0";


    if (password === correctPassword) {

        error.innerText = "";

        document
            .getElementById("passwordPage")
            .classList.add("hidden");

        document
            .getElementById("questionPage")
            .classList.remove("hidden");

    } else {

        error.style.color = "#ffb8b8";

        error.innerText =
            "Passwordnya salah, coba lagi yaa...😢";
    }
}



function checkDay(day) {

    const message =
        document.getElementById("dayMessage");

    const correctDay =
        "senin";


    if (day === correctDay) {

        message.innerText =
            "Benar! Kamu hebat banget, aku bangga sama kamu. 😍";


        setTimeout(() => {

            document
                .getElementById("questionPage")
                .classList.add("hidden");

            document
                .getElementById("birthdayPage")
                .classList.remove("hidden");

        }, 1000);


    } else {

        message.innerText =
            "Emang oon ya kamu hmmm😣";
    }
}



function openGift() {

    document
        .getElementById("birthdayPage")
        .classList.add("hidden");

    document
        .getElementById("giftPage")
        .classList.remove("hidden");
}



/* =========================
   ALBUM SLIDER
========================= */

let currentStory = 0;


function changeStory(direction) {

    const slides =
        document.querySelectorAll(".story-slide");

    const dots =
        document.querySelectorAll(".dot");


    if (slides.length === 0) {
        return;
    }


    slides[currentStory]
        .classList.remove("active");

    dots[currentStory]
        .classList.remove("active");


    currentStory += direction;


    if (currentStory >= slides.length) {

        currentStory = 0;

    }


    if (currentStory < 0) {

        currentStory =
            slides.length - 1;

    }


    slides[currentStory]
        .classList.add("active");

    dots[currentStory]
        .classList.add("active");
}