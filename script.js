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
        "sabtu";

    const hariUltah =
        "hari spesial";


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

        }, 3000);


    } else if (day === hariUltah) {

        message.innerText =
            "DIH GR BANGET SIH LU WOH!!!";

    } else {

        message.innerText =
            "BENERAN NI BOCAH EMG OON!!!";
    }
}



function openGift() {

    document
        .getElementById("birthdayPage")
        .classList.add("hidden");

    document
        .getElementById("countdownPage")
        .classList.remove("hidden");

    let count = 10;

    const countdown =
        document.getElementById("countdown");

    countdown.innerText = count;


    const timer = setInterval(function() {

        count--;

        countdown.innerText = count;


        if (count <= 0) {

            clearInterval(timer);

            document
                .getElementById("countdownPage")
                .classList.add("hidden");

            document
                .getElementById("giftPage")
                .classList.remove("hidden");

            return;
        }

    }, 1000);
}



/* =========================
   DAFTAR HADIAH
========================= */

function daftarHadiah() {

    alert(
        "Daftar hadiah:\n" +
        "1. Kado spesial dari aku\n" +
        "2. Ucapan selamat ulang tahun dari aku\n" +
        "3. Momen-momen indah kita bersama\n" +
        "4. Dan masih banyak lagi kejutan lainnya! 🎁🎉"
    );

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

    if (dots[currentStory]) {
        dots[currentStory]
            .classList.remove("active");
    }


    currentStory += direction;


    if (currentStory >= slides.length) {
        currentStory = 0;
    }


    if (currentStory < 0) {
        currentStory = slides.length - 1;
    }


    slides[currentStory]
        .classList.add("active");

    if (dots[currentStory]) {
        dots[currentStory]
            .classList.add("active");
    }
}



/* =========================
   FLOATING HEARTS
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const hearts =
        document.querySelectorAll(".floating-hearts span");


    hearts.forEach(heart => {

        const randomLeft =
            Math.random() * 100;

        const randomSize =
            15 + Math.random() * 40;

        const randomDuration =
            6 + Math.random() * 8;

        const randomDelay =
            Math.random() * 6;


        heart.style.left =
            randomLeft + "%";

        heart.style.fontSize =
            randomSize + "px";

        heart.style.animationDuration =
            randomDuration + "s";

        heart.style.animationDelay =
            randomDelay + "s";

    });

});



/* =========================
   ZOOM FOTO
========================= */

const storyPhotos =
    document.querySelectorAll(".story-slide img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");


storyPhotos.forEach(function(photo) {

    photo.addEventListener("click", function() {

        lightboxImage.src =
            photo.src;

        lightbox.classList.add("active");

    });

});


if (lightbox) {

    lightbox.addEventListener("click", function() {

        lightbox.classList.remove("active");

    });

}


/* =========================================
   TRUE 3D GALAXY
========================================= */

let galaxyStarted = false;
let galaxyScene;
let galaxyCamera;
let galaxyRenderer;
let galaxyWords = [];
let galaxyRaycaster;
let galaxyMouse;

let galaxyGroup;

const romanticWords = [
    "sayang",
    "cinta",
    "rindu",
    "bahagia",
    "senyum",
    "peluk",
    "bersama",
    "selamanya",
    "kamu",
    "aku",
    "kita",
    "kasih",
    "indah",
    "manis",
    "rumah",
    "cerita",
    "mimpi",
    "harapan",
    "kenangan",
    "senja",
    "bahagia",
    "favorite",
    "my love",
    "my person",
    "always",
    "forever",
    "you",
    "us",
    "love",
    "happiness"
];


/* =========================
   BUKA GALAXY
========================= */

function openGalaxy() {

    document.getElementById("giftPage").classList.add("hidden");

    const galaxyPage = document.getElementById("galaxyPage");

    galaxyPage.style.display = "block";

    if (!galaxyStarted) {
        galaxyStarted = true;
        start3DGalaxy();
    }
}


/* =========================
   START 3D GALAXY
========================= */

function start3DGalaxy() {

    const container = document.getElementById("galaxySpace");

    /* SCENE */

    galaxyScene = new THREE.Scene();

    galaxyScene.background = new THREE.Color(0x020007);


    /* CAMERA */

    galaxyCamera = new THREE.PerspectiveCamera(
        65,
        window.innerWidth / window.innerHeight,
        0.1,
        3000
    );

    galaxyCamera.position.z = 18;


    /* RENDERER */

    galaxyRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false
    });

    galaxyRenderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    galaxyRenderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    galaxyRenderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(galaxyRenderer.domElement);


    /* GROUP */

    galaxyGroup = new THREE.Group();

    galaxyScene.add(galaxyGroup);


    /* RAYCASTER */

    galaxyRaycaster = new THREE.Raycaster();

    galaxyMouse = new THREE.Vector2();


    /* STARS */

    createStars();


    /* ROMANTIC WORDS */

    createGalaxyWords();


    /* PHOTO */

    createCenterPhoto();


    /* EVENTS */

    galaxyRenderer.domElement.addEventListener(
        "pointerdown",
        galaxyPointerDown
    );

    galaxyRenderer.domElement.addEventListener(
        "pointermove",
        galaxyPointerMove
    );

    galaxyRenderer.domElement.addEventListener(
        "pointerup",
        galaxyPointerUp
    );

    galaxyRenderer.domElement.addEventListener(
        "click",
        galaxyClick
    );

    galaxyRenderer.domElement.addEventListener(
    "touchstart",
    galaxyTouchStart,
    { passive: false }
);

galaxyRenderer.domElement.addEventListener(
    "touchmove",
    galaxyTouchMove,
    { passive: false }
);

galaxyRenderer.domElement.addEventListener(
    "touchend",
    galaxyTouchEnd,
    { passive: false }
);

    galaxyRenderer.domElement.addEventListener(
        "wheel",
        galaxyZoom,
        { passive: false }
    );


    window.addEventListener(
        "resize",
        resizeGalaxy
    );


    animateGalaxy();
}


/* =========================
   STARS
========================= */

function createStars() {

    const geometry = new THREE.BufferGeometry();

    const positions = [];

    for (let i = 0; i < 3500; i++) {

        const x = (Math.random() - .5) * 250;
        const y = (Math.random() - .5) * 250;
        const z = (Math.random() - .5) * 250;

        positions.push(x, y, z);
    }

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            positions,
            3
        )
    );

    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: .12,
        transparent: true,
        opacity: .8
    });

    const stars = new THREE.Points(
        geometry,
        material
    );

    galaxyScene.add(stars);
}


/* =========================
   TEXTURE KATA
========================= */

function createWordTexture(text) {

    const canvas = document.createElement("canvas");

    canvas.width = 512;
    canvas.height = 128;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.font = "bold 42px Dancing Script, cursive";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.shadowColor = "#ff65d5";
    ctx.shadowBlur = 18;

    ctx.fillStyle = "rgba(255,220,250,.95)";

    ctx.fillText(
        text,
        canvas.width / 2,
        canvas.height / 2
    );

    const texture = new THREE.CanvasTexture(canvas);

    texture.colorSpace = THREE.SRGBColorSpace;

    return texture;
}


/* =========================
   WORDS 3D
========================= */

function createGalaxyWords() {

    const total = 700;

    const radius = 12;

    for (let i = 0; i < total; i++) {

        const text =
            romanticWords[
                Math.floor(
                    Math.random() *
                    romanticWords.length
                )
            ];

        const texture =
            createWordTexture(text);

        const material =
            new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                depthTest: true,
                depthWrite: false
            });

        const sprite =
            new THREE.Sprite(material);


        /* RANDOM 3D SPHERE */

        const theta =
            Math.random() *
            Math.PI * 2;

        const phi =
            Math.acos(
                2 * Math.random() - 1
            );

        const r =
            3 +
            Math.pow(Math.random(), .55) *
            radius;


        const x =
            r *
            Math.sin(phi) *
            Math.cos(theta);

        const y =
            r *
            Math.cos(phi);

        const z =
            r *
            Math.sin(phi) *
            Math.sin(theta);


        sprite.position.set(
            x,
            y,
            z
        );


        const scale =
            .25 +
            Math.random() * .45;

        sprite.scale.set(
            scale * 2.8,
            scale,
            1
        );


        sprite.userData.message =
            getRandomLoveMessage(text);


        galaxyWords.push(sprite);

        galaxyGroup.add(sprite);
    }
}


/* =========================
   MESSAGE
========================= */

function getRandomLoveMessage(word) {

    const messages = [
        "Di antara jutaan kata, tetap kamu yang paling berarti. ❤️",

        "Kalau semua tempat adalah ruang, kamu tetap tempat pulangku.",

        "Ada banyak hal indah di dunia, tapi kamu salah satu yang paling aku syukuri.",

        "Kalau waktu bisa berhenti, aku ingin berhenti di momen bersama kamu.",

        "Dari sekian banyak kemungkinan, aku senang kita dipertemukan.",

        "Kamu adalah bagian favorit dari ceritaku.",

        "Semoga cerita kita terus punya halaman baru.",

        "Aku ingin mengingat sebanyak mungkin momen kecil bersama kamu."
    ];

    return messages[
        Math.floor(
            Math.random() *
            messages.length
        )
    ];
}


/* =========================
   FOTO TENGAH
========================= */

function createCenterPhoto() {

    const loader =
        new THREE.TextureLoader();

    loader.load(
        "imutku.jpg",
        function(texture) {

            texture.colorSpace =
                THREE.SRGBColorSpace;


            const geometry =
                new THREE.CircleGeometry(
                    2,
                    64
                );


            const material =
                new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    depthTest: true,
                    depthWrite: true
                });


            const photo =
                new THREE.Mesh(
                    geometry,
                    material
                );

            photo.position.set(
                0,
                0,
                0
            );


            galaxyGroup.add(photo);


            /* GLOW */

            const glowGeometry =
                new THREE.CircleGeometry(
                    2.7,
                    64
                );

            const glowMaterial =
                new THREE.MeshBasicMaterial({
                    color: 0xff55cc,
                    transparent: true,
                    opacity: .12,
                    depthWrite: false
                });

            const glow =
                new THREE.Mesh(
                    glowGeometry,
                    glowMaterial
                );

            glow.position.z = -.15;

            galaxyGroup.add(glow);
        }
    );
}


/* =========================
   DRAG CAMERA
========================= */

let dragging = false;
let previousX = 0;
let previousY = 0;

let lastPinchDistance = null;

function getPinchDistance(e) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;

    return Math.sqrt(dx * dx + dy * dy);
}

function galaxyTouchStart(e) {

    if (e.touches.length === 2) {
        lastPinchDistance = getPinchDistance(e);
    }
}

function galaxyTouchMove(e) {

    if (e.touches.length !== 2) return;

    e.preventDefault();

    const currentDistance = getPinchDistance(e);

    if (lastPinchDistance !== null) {

        const difference =
            currentDistance - lastPinchDistance;

        // Jari menjauh = zoom IN
        // Jari mendekat = zoom OUT
        targetCameraZ -= difference * 0.025;

        targetCameraZ = Math.max(
            3,
            Math.min(40, targetCameraZ)
        );
    }

    lastPinchDistance = currentDistance;
}

function galaxyTouchEnd(e) {

    if (e.touches.length < 2) {
        lastPinchDistance = null;
    }
}

let rotationX = 0;
let rotationY = 0;

let targetCameraZ = 18;

function galaxyZoom(e) {
    e.preventDefault();

    targetCameraZ += e.deltaY * 0.02;

    targetCameraZ = Math.max(
        4,
        Math.min(40, targetCameraZ)
    );
}

function galaxyPointerDown(e) {

    dragging = true;

    previousX = e.clientX;
    previousY = e.clientY;
}

function galaxyPointerMove(e) {

    if (!dragging) return;

    const dx =
        e.clientX - previousX;

    const dy =
        e.clientY - previousY;

    rotationY += dx * .004;
    rotationX += dy * .004;

    previousX = e.clientX;
    previousY = e.clientY;
}

function galaxyPointerUp() {

    dragging = false;
}


/* =========================
   CLICK WORD
========================= */

function galaxyClick(e) {

    const rect =
        galaxyRenderer.domElement.getBoundingClientRect();

    galaxyMouse.x =
        ((e.clientX - rect.left) /
            rect.width) * 2 - 1;

    galaxyMouse.y =
        -((e.clientY - rect.top) /
            rect.height) * 2 + 1;


    galaxyRaycaster.setFromCamera(
        galaxyMouse,
        galaxyCamera
    );


    const hits =
        galaxyRaycaster.intersectObjects(
            galaxyWords
        );


    if (hits.length > 0) {

        const word =
            hits[0].object;

        document.getElementById(
            "messageText"
        ).innerText =
            word.userData.message;

        document.getElementById(
            "loveMessage"
        ).classList.add("show");
    }
}


/* =========================
   CLOSE MESSAGE
========================= */

document
    .getElementById("closeMessage")
    ?.addEventListener(
        "click",
        function() {

            document
                .getElementById("loveMessage")
                .classList.remove("show");
        }
    );


/* =========================
   ANIMATION
========================= */

function animateGalaxy() {

    requestAnimationFrame(animateGalaxy);
    if (!dragging) {
        rotationY += .0007;
    }

    galaxyGroup.rotation.y = rotationY;
    galaxyGroup.rotation.x = rotationX;

    galaxyCamera.position.z +=
        (targetCameraZ - galaxyCamera.position.z) * 0.08;

    galaxyRenderer.render(
        galaxyScene,
        galaxyCamera
    );
}

/* =========================
   RESIZE
========================= */

function resizeGalaxy() {

    if (!galaxyRenderer) return;

    galaxyCamera.aspect =
        window.innerWidth /
        window.innerHeight;

    galaxyCamera.updateProjectionMatrix();

    galaxyRenderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
}