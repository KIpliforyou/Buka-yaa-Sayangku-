/* =========================================================
   PASSWORD PAGE
========================================================= */

function checkPassword() {
    const passwordInput = document.getElementById("password");
    const error = document.getElementById("error");

    if (!passwordInput || !error) return;

    const password = passwordInput.value.trim();

    const correctPassword = "12/12/2023";

    if (password === correctPassword) {
        error.innerText = "";

        document.getElementById("passwordPage")?.classList.add("hidden");
        document.getElementById("questionPage")?.classList.remove("hidden");
    } else {
        error.style.color = "#ffb8b8";
        error.innerText =
            "Coba lagi ya sayang, kayaknya ada yang salah kamu ngetiknya 😅";
    }
}


/* =========================================================
   QUESTION PAGE
========================================================= */

function checkDay(day) {
    const message = document.getElementById("dayMessage");

    if (!message) return;

    const correctDay = "sabtu";
    const hariUltah = "hari spesial";

    if (day === correctDay) {
        message.innerText =
            "Yahaha bisa ternyata kamu sayang😍";

        setTimeout(() => {
            document.getElementById("questionPage")?.classList.add("hidden");
            document.getElementById("birthdayPage")?.classList.remove("hidden");
        }, 3000);

    } else if (day === hariUltah) {
        message.innerText =
            "Iya sayang aku juga tau kalo hari ini kamu Ulang tahun😒";

    } else {
        message.innerText =
            "Coba cek HP deh ini hari apa,,,";
    }
}


/* =========================================================
   GIFT / COUNTDOWN
========================================================= */

function openGift() {
    document.getElementById("birthdayPage")?.classList.add("hidden");
    document.getElementById("countdownPage")?.classList.remove("hidden");

    let count = 10;
    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    countdown.innerText = count;

    const timer = setInterval(() => {
        count--;

        countdown.innerText = count;

        if (count <= 0) {
            clearInterval(timer);

            document.getElementById("countdownPage")?.classList.add("hidden");
            document.getElementById("giftPage")?.classList.remove("hidden");
        }
    }, 1000);
}


/* =========================================================
   GIFT MESSAGE
========================================================= */

function daftarHadiah() {
    alert(
        "kalau kamu tahu ini sebelum kukasih tahu, hadiah itu melambangkan rasa sayang kita yang tidak ada batasnya dalam hal apapun😊. dan juga warna kesukaanmu hehehe maaf kalo salah:)"
    );
}


/* =========================================================
   STORY ALBUM
========================================================= */

let currentStory = 0;

function changeStory(direction) {
    const slides = document.querySelectorAll(".story-slide");
    const dots = document.querySelectorAll(".dot");

    if (!slides.length) return;

    slides[currentStory]?.classList.remove("active");
    dots[currentStory]?.classList.remove("active");

    currentStory += direction;

    if (currentStory >= slides.length) {
        currentStory = 0;
    }

    if (currentStory < 0) {
        currentStory = slides.length - 1;
    }

    slides[currentStory]?.classList.add("active");
    dots[currentStory]?.classList.add("active");
}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function initFloatingHearts() {
    const hearts = document.querySelectorAll(".floating-hearts span");

    hearts.forEach((heart) => {
        const randomLeft = Math.random() * 100;
        const randomSize = 15 + Math.random() * 40;
        const randomDuration = 6 + Math.random() * 8;
        const randomDelay = Math.random() * 6;

        heart.style.left = `${randomLeft}%`;
        heart.style.fontSize = `${randomSize}px`;
        heart.style.animationDuration = `${randomDuration}s`;
        heart.style.animationDelay = `${randomDelay}s`;
    });
}


/* =========================================================
   LIGHTBOX ALBUM
========================================================= */

function initLightbox() {
    const storyPhotos = document.querySelectorAll(".story-slide img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    if (!lightbox || !lightboxImage) return;

    storyPhotos.forEach((photo) => {
        photo.addEventListener("click", () => {
            lightboxImage.src = photo.src;
            lightbox.classList.add("active");
        });
    });

    lightbox.addEventListener("click", (event) => {
        if (
            event.target === lightbox ||
            event.target === lightboxImage
        ) {
            lightbox.classList.remove("active");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }
    });
}


/* =========================================================
   GALAXY VARIABLES
========================================================= */

let galaxyStarted = false;

let galaxyScene;
let galaxyCamera;
let galaxyRenderer;

let galaxyWords = [];
let galaxyRaycaster;
let galaxyMouse;
let galaxyGroup;

let galaxyStars;
let milkyWayStars;
let galaxyNebula;

let centerPhotoGroup = null;
let photoFront = null;
let photoBack = null;
let photoFlipped = false;
let currentPhotoRotation = 0;
let targetPhotoRotation = 0;

let photoRing = null;
let photoOuterRing = null;
let photoParticles = [];

let galaxyDragging = false;
let galaxyMoved = false;

let galaxyPreviousPointer = {
    x: 0,
    y: 0
};

let galaxyRotationVelocity = {
    x: 0,
    y: 0
};

let galaxyTargetRotation = {
    x: 0,
    y: 0
};

let galaxyCurrentRotation = {
    x: 0,
    y: 0
};

let galaxyZoomTarget = 18;
let galaxyZoomCurrent = 18;


/* =========================================================
   ROMANTIC WORDS
========================================================= */

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
    "romantis",
    "setia",
    "nyaman",
    "hangat",
    "mesra",
    "lembut",
    "perhatian",
    "kesayangan",
    "pujaan",
    "kekasih",
    "jodoh",
    "teman hidup",
    "belahan jiwa",
    "satu hati",
    "satu tujuan",
    "teman cerita",
    "tempat pulang",
    "pelipur hati",
    "penenang hati",
    "pemilik hati",
    "seumur hidup",
    "tak terganti",
    "selalu kamu",
    "hanya kamu",
    "untukmu",
    "darimu",
    "denganmu",
    "tentangmu",
    "menunggumu",
    "merindukanmu",
    "memikirkanmu",
    "menyayangimu",
    "mencintaimu",
    "memilihmu",
    "menjagamu",
    "memelukmu",
    "menemanimu",
    "tersenyum bersamamu",
    "tumbuh bersamamu",
    "berjalan bersamamu",
    "menua bersamamu",
    "selalu ada",
    "selalu pulang",
    "selalu dekat",
    "selalu di hati",
    "selalu bersama",
    "tak pernah sendiri",
    "my love",
    "my person",
    "my favorite",
    "my home",
    "my happiness",
    "my safe place",
    "my forever",
    "my everything",
    "my one and only",
    "my soulmate",
    "true love",
    "pure love",
    "sweet love",
    "endless love",
    "first love",
    "last love",
    "forever yours",
    "always yours",
    "only you",
    "just us",
    "you & me",
    "you are home",
    "you are enough",
    "you are special",
    "you are my world",
    "with you",
    "for you",
    "about you",
    "love you",
    "miss you"
];


/* =========================================================
   LOVE MESSAGES
========================================================= */

const loveMessages = [
    "Di antara jutaan kata, tetap kamu yang paling berarti. ❤️",
    "Kalau semua tempat adalah ruang, kamu tetap tempat pulangku. ❤️",
    "Ada banyak hal indah di dunia, tapi kamu salah satu yang paling aku syukuri. ✨",
    "Kalau waktu bisa berhenti, aku ingin berhenti di momen bersama kamu. ⏳❤️",
    "Dari sekian banyak kemungkinan, aku senang kita dipertemukan. 🥰",
    "Kamu adalah bagian favorit dari ceritaku. 📖❤️",
    "Semoga cerita kita terus punya halaman baru. 📖✨",
    "Aku ingin mengingat sebanyak mungkin momen kecil bersama kamu. 📸❤️",
    "Senyummu selalu punya cara sederhana untuk membuat hariku lebih indah. 😊❤️",
    "Kalau bahagia punya nama, mungkin namanya adalah kamu. 🥰❤️",
    "Aku tidak butuh hari yang sempurna, cukup ada kamu di dalamnya. ❤️✨",
    "Di antara semua cerita yang pernah ada, aku ingin cerita kita menjadi yang paling panjang. 📖❤️",
    "Kamu membuat hal sederhana terasa begitu istimewa. 🥹✨",
    "Aku suka caramu hadir tanpa banyak kata, tapi selalu berhasil membuatku nyaman. 🤍",
    "Kalau aku boleh memilih satu tempat untuk selalu kembali, aku akan memilih kamu. 🏡❤️",
    "Bersamamu, waktu terasa berjalan terlalu cepat. ⏳🥰",
    "Aku tidak tahu bagaimana akhir cerita kita, tapi aku ingin terus menulisnya bersamamu. 📖❤️",
    "Kamu adalah alasan kecil di balik banyak senyumku. 😊❤️",
    "Ada rasa nyaman yang sulit dijelaskan setiap kali aku bersamamu. 🥹🤍",
    "Aku ingin menjadi seseorang yang selalu bisa kamu cari ketika dunia terasa melelahkan. 🤗❤️",
    "Tidak perlu sesuatu yang mewah, kebersamaan sederhana denganmu sudah cukup. 🌷❤️",
    "Aku suka ketika namamu tiba-tiba muncul di pikiranku tanpa alasan. 💭❤️",
    "Kalau rindu bisa menjadi pesan, mungkin setiap hari aku akan mengirimkannya kepadamu. 💌",
    "Kamu datang seperti kebetulan, tapi terasa seperti sesuatu yang sudah lama aku tunggu. ✨❤️",
    "Aku ingin menghabiskan lebih banyak hari dengan cerita-cerita kecil bersamamu. 🌤️🥰",
    "Dunia terasa sedikit lebih hangat ketika kamu ada di dekatku. ☀️❤️",
    "Aku tidak mencari seseorang yang sempurna, aku hanya ingin seseorang yang terasa tepat sepertimu. 🥰🤍",
    "Kalau setiap kenangan punya warna, kenangan bersamamu pasti penuh warna indah. 🌈❤️",
    "Aku senang pernah menemukan seseorang yang membuat hati terasa begitu tenang. 🥹🤍",
    "Bersamamu, diam pun terasa seperti percakapan yang menyenangkan. 🤍🌙",
    "Aku ingin melihat lebih banyak matahari terbit dan terbenam bersamamu. 🌅❤️",
    "Kamu adalah salah satu alasan mengapa aku percaya bahwa pertemuan bisa menjadi sesuatu yang indah. ✨🥰",
    "Aku tidak perlu banyak alasan untuk menyukaimu, karena kehadiranmu sendiri sudah cukup. ❤️",
    "Semoga setiap langkah yang kita ambil membawa kita semakin dekat pada cerita yang indah. 🥰✨",
    "Aku ingin menjadi bagian dari hari-harimu, bahkan dalam hal-hal kecil. 🤍🌷",
    "Ada sesuatu tentang dirimu yang selalu berhasil membuatku ingin tinggal lebih lama. 🥹❤️",
    "Kalau hidup adalah perjalanan, aku senang pernah berjalan di jalan yang sama denganmu. 🛤️❤️",
    "Aku berharap suatu hari nanti kita bisa tersenyum sambil mengingat semua perjalanan yang pernah kita lalui. 😊❤️",
    "Kamu membuat hari biasa terasa seperti kenangan yang ingin aku simpan. 📸❤️",
    "Aku suka caramu membuat dunia terasa lebih sederhana hanya dengan berada di dekatku. 🤍✨",
    "Semoga kita selalu punya alasan untuk saling tersenyum. 😊❤️",
    "Aku ingin mengenalmu lebih jauh, bukan hanya hari ini, tapi juga di hari-hari yang akan datang. 🥰🌷",
    "Tidak semua hal indah harus besar, terkadang cukup sebuah percakapan kecil denganmu. 💬❤️",
    "Aku bersyukur untuk setiap kesempatan yang membuatku bisa mengenalmu. 🙏❤️",
    "Kalau aku bisa menyimpan satu hal dari hari ini, aku ingin menyimpan momen bersamamu. 🥹📸",
    "Kamu bukan sekadar bagian dari hariku, kamu adalah bagian yang selalu ingin aku tunggu. ⏳❤️",
    "Aku ingin terus menemukan alasan baru untuk menghargai keberadaanmu. 🌷🤍",
    "Semoga jarak, waktu, dan kesibukan tidak pernah membuat kita lupa betapa berartinya kebersamaan. 🥺❤️",
    "Ada banyak tempat yang ingin aku kunjungi, tapi semuanya terasa lebih menarik kalau bersamamu. 🌎❤️",
    "Aku ingin mengumpulkan kenangan bersamamu sebanyak mungkin, satu hari demi satu hari. 📸🥰",
    "Kamu membuatku mengerti bahwa rasa nyaman bisa ditemukan dalam diri seseorang. 🤍🥹",
    "Aku tidak tahu apa yang akan terjadi besok, tapi aku berharap kamu masih ada dalam ceritaku. 🌙❤️",
    "Kadang aku hanya ingin duduk bersamamu dan menikmati waktu tanpa perlu mengatakan apa-apa. 🥹🤍",
    "Setiap kali mengingatmu, selalu ada alasan kecil untuk tersenyum. 😊💭",
    "Aku berharap kita selalu bisa saling menjadi alasan untuk tetap percaya pada hal-hal baik. ✨❤️",
    "Kalau ada satu hal yang ingin aku ulang berkali-kali, mungkin itu adalah waktu yang pernah kita habiskan bersama. 🔁❤️",
    "Terima kasih sudah menjadi bagian dari cerita yang membuat hari-hariku terasa lebih berarti. 🥹❤️",
    "Dari semua hal yang bisa datang dan pergi, aku berharap kebersamaan kita tetap tinggal. 🤍🌙"
];


/* =========================================================
   OPEN GALAXY
========================================================= */

function openGalaxy() {
    document.getElementById("giftPage")?.classList.add("hidden");

    const galaxyPage =
        document.getElementById("galaxyPage");

    if (!galaxyPage) return;

    galaxyPage.classList.remove("hidden");
    galaxyPage.style.display = "block";

    if (!galaxyStarted) {
        galaxyStarted = true;
        start3DGalaxy();
    }
}


/* =========================================================
   START GALAXY
========================================================= */

function start3DGalaxy() {

    const container =
        document.getElementById("galaxySpace");

    if (
        !container ||
        typeof THREE === "undefined"
    ) {
        console.error(
            "Three.js atau #galaxySpace tidak ditemukan."
        );

        return;
    }


    /* =========================
       SCENE
    ========================= */

    galaxyScene =
        new THREE.Scene();

    galaxyScene.background =
        new THREE.Color(0x010006);


    /* =========================
       CAMERA
    ========================= */

    galaxyCamera =
        new THREE.PerspectiveCamera(
            65,
            window.innerWidth /
            window.innerHeight,
            0.1,
            3000
        );

    galaxyCamera.position.set(
        0,
        0,
        galaxyZoomCurrent
    );


    /* =========================
       RENDERER
    ========================= */

    galaxyRenderer =
        new THREE.WebGLRenderer({
            antialias: true,
            alpha: false
        });

    galaxyRenderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio || 1,
            2
        )
    );

    galaxyRenderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    galaxyRenderer.outputColorSpace =
        THREE.SRGBColorSpace;

    container.appendChild(
        galaxyRenderer.domElement
    );


    /* =========================
       MAIN GALAXY GROUP
    ========================= */

    galaxyGroup =
        new THREE.Group();

    galaxyScene.add(
        galaxyGroup
    );


    /* =========================
       RAYCASTER
    ========================= */

    galaxyRaycaster =
        new THREE.Raycaster();

    galaxyMouse =
        new THREE.Vector2();


    /* =========================
       CREATE EVERYTHING
    ========================= */

    createStars();
    createMilkyWay();

    // Tidak memakai SphereGeometry
    // di tengah karena foto adalah
    // pusat utama galaxy.
    createNebula();

    createGalaxyWords();

    createCenterPhoto();


    /* =========================
       EVENTS
    ========================= */

    const canvas =
        galaxyRenderer.domElement;

    canvas.addEventListener(
        "pointerdown",
        galaxyPointerDown
    );

    canvas.addEventListener(
        "pointermove",
        galaxyPointerMove
    );

    canvas.addEventListener(
        "pointerup",
        galaxyPointerUp
    );

    canvas.addEventListener(
        "pointercancel",
        galaxyPointerUp
    );

    canvas.addEventListener(
        "wheel",
        galaxyZoom,
        {
            passive: false
        }
    );

    canvas.addEventListener(
        "click",
        galaxyClick
    );


    window.addEventListener(
        "resize",
        resizeGalaxy
    );


    /* =========================
       POPUP CLOSE
    ========================= */

    const closeMessage =
        document.getElementById(
            "closeMessage"
        );

    if (closeMessage) {

        closeMessage.addEventListener(
            "click",
            closeLoveMessage
        );
    }


    /* =========================
       TOUCH SUPPORT
    ========================= */

    canvas.addEventListener(
        "touchstart",
        galaxyTouchStart,
        {
            passive: false
        }
    );

    canvas.addEventListener(
        "touchmove",
        galaxyTouchMove,
        {
            passive: false
        }
    );

    canvas.addEventListener(
        "touchend",
        galaxyTouchEnd,
        {
            passive: false
        }
    );


    /* =========================
       START ANIMATION
    ========================= */

    animateGalaxy();
}


/* =========================================================
   NORMAL STARS
========================================================= */

function createStars() {

    const geometry =
        new THREE.BufferGeometry();

    const positions = [];

    const sizes = [];

    for (let i = 0; i < 4200; i++) {

        const x =
            (Math.random() - 0.5) * 260;

        const y =
            (Math.random() - 0.5) * 260;

        const z =
            (Math.random() - 0.5) * 260;

        positions.push(
            x,
            y,
            z
        );

        sizes.push(
            0.5 +
            Math.random() * 1.5
        );
    }

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            positions,
            3
        )
    );

    const material =
        new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.13,
            transparent: true,
            opacity: 0.82,
            depthWrite: false
        });

    galaxyStars =
        new THREE.Points(
            geometry,
            material
        );

    galaxyScene.add(
        galaxyStars
    );
}


/* =========================================================
   MILKY WAY
========================================================= */

function createMilkyWay() {

    const geometry =
        new THREE.BufferGeometry();

    const positions = [];

    const totalStars = 7000;

    for (
        let i = 0;
        i < totalStars;
        i++
    ) {

        const radius =
            Math.pow(
                Math.random(),
                0.55
            ) * 17 + 0.5;

        const arm =
            Math.floor(
                Math.random() * 5
            );

        const baseAngle =
            (arm / 5) *
            Math.PI *
            2;

        const spiralAngle =
            baseAngle +
            radius * 0.48;

        const randomAngle =
            spiralAngle +
            (
                Math.random() - 0.5
            ) *
            (
                0.45 +
                radius * 0.025
            );

        const thickness =
            Math.pow(
                Math.random(),
                1.8
            ) * 1.7;

        const x =
            Math.cos(randomAngle) *
            radius;

        const z =
            Math.sin(randomAngle) *
            radius;

        const y =
            (
                Math.random() - 0.5
            ) *
            thickness;

        positions.push(
            x,
            y,
            z
        );
    }

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            positions,
            3
        )
    );

    const material =
        new THREE.PointsMaterial({
            color: 0xffd9f5,
            size: 0.055,
            transparent: true,
            opacity: 0.78,
            depthWrite: false,
            blending:
                THREE.AdditiveBlending
        });

    milkyWayStars =
        new THREE.Points(
            geometry,
            material
        );

    galaxyGroup.add(
        milkyWayStars
    );
}


/* =========================================================
   NEBULA
========================================================= */

function createNebula() {

    const geometry =
        new THREE.BufferGeometry();

    const positions = [];

    for (
        let i = 0;
        i < 1200;
        i++
    ) {

        const angle =
            Math.random() *
            Math.PI *
            2;

        const radius =
            3 +
            Math.random() * 15;

        const x =
            Math.cos(angle) *
            radius;

        const z =
            Math.sin(angle) *
            radius;

        const y =
            (
                Math.random() - 0.5
            ) * 2.5;

        positions.push(
            x,
            y,
            z
        );
    }

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            positions,
            3
        )
    );

    const material =
        new THREE.PointsMaterial({
            color: 0xb86cff,
            size: 0.18,
            transparent: true,
            opacity: 0.035,
            depthWrite: false,
            blending:
                THREE.AdditiveBlending
        });

    galaxyNebula =
        new THREE.Points(
            geometry,
            material
        );

    galaxyGroup.add(
        galaxyNebula
    );
}


/* =========================================================
   WORD TEXTURE
========================================================= */

function createWordTexture(text) {

    const canvas =
        document.createElement(
            "canvas"
        );

    canvas.width = 512;
    canvas.height = 128;

    const ctx =
        canvas.getContext("2d");

    if (!ctx) return null;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.font =
        "bold 48px Dancing Script, cursive";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.shadowColor =
        "#c026ff";

    ctx.shadowBlur = 25;

    ctx.fillStyle =
        "rgba(255,220,250,.95)";

    ctx.fillText(
        text,
        canvas.width / 2,
        canvas.height / 2
    );

    const texture =
        new THREE.CanvasTexture(
            canvas
        );

    texture.colorSpace =
        THREE.SRGBColorSpace;

    return texture;
}


/* =========================================================
   GALAXY WORDS
========================================================= */

function createGalaxyWords() {

    const total = 650;
    const radius = 15;

    for (
        let i = 0;
        i < total;
        i++
    ) {

        const text =
            romanticWords[
                Math.floor(
                    Math.random() *
                    romanticWords.length
                )
            ];

        const texture =
            createWordTexture(text);

        if (!texture) continue;

        const material =
            new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                depthTest: true,
                depthWrite: false,
                opacity:
                    0.45 +
                    Math.random() * 0.45
            });

        const sprite =
            new THREE.Sprite(
                material
            );


        /* RANDOM 3D POSITION */

        const theta =
            Math.random() *
            Math.PI *
            2;

        const phi =
            Math.acos(
                2 *
                Math.random() -
                1
            );

        const r =
            4 +
            Math.pow(
                Math.random(),
                0.6
            ) * radius;

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


        /* RANDOM SCALE */

        const scale =
            0.22 +
            Math.random() *
            0.48;

        sprite.scale.set(
            scale * 4.2,
            scale * 1.4,
            1
        );


        /* CUSTOM DATA */

        sprite.userData.message =
            getRandomLoveMessage();

        sprite.userData.baseScale =
            scale;

        sprite.userData.floatOffset =
            Math.random() *
            Math.PI *
            2;

        sprite.userData.floatSpeed =
            0.3 +
            Math.random() *
            0.8;

        galaxyWords.push(
            sprite
        );

        galaxyGroup.add(
            sprite
        );
    }
}


/* =========================================================
   RANDOM LOVE MESSAGE
========================================================= */

function getRandomLoveMessage() {

    return loveMessages[
        Math.floor(
            Math.random() *
            loveMessages.length
        )
    ];
}


/* =========================================================
   CENTER PHOTO
========================================================= */

function createCenterPhoto() {

    const loader = new THREE.TextureLoader();

    const frontPath = "imutku.jpg";
    const backPath = "imutku-belakang.jpg";

    centerPhotoGroup = new THREE.Group();
    centerPhotoGroup.position.set(0, 0, 0);

    galaxyGroup.add(centerPhotoGroup);


    // =========================
    // ✨ RING UTAMA
    // =========================

    const ringGeometry = new THREE.RingGeometry(
        2.12,
        2.17,
        128
    );

    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xffb8ff,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
        depthTest: false,
        depthWrite: false
    });

    photoRing = new THREE.Mesh(
        ringGeometry,
        ringMaterial
    );

    photoRing.position.z = 0.28;
    photoRing.renderOrder = 101;

    centerPhotoGroup.add(photoRing);


    // =========================
    // 💜 RING LUAR
    // =========================

    const outerRingGeometry = new THREE.RingGeometry(
        2.25,
        2.265,
        128
    );

    const outerRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xd9a7ff,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
        depthTest: false,
        depthWrite: false
    });

    photoOuterRing = new THREE.Mesh(
        outerRingGeometry,
        outerRingMaterial
    );

    photoOuterRing.position.z = 0.27;
    photoOuterRing.renderOrder = 100;

    centerPhotoGroup.add(photoOuterRing);


    // =========================
    // 🌟 PARTIKEL ORBIT
    // =========================

    const particleGeometry =
        new THREE.SphereGeometry(0.025, 8, 8);

    for (let i = 0; i < 20; i++) {

        const particleMaterial =
            new THREE.MeshBasicMaterial({
                color:
                    i % 3 === 0
                        ? 0xffffff
                        : 0xffb8ff,
                transparent: true,
                opacity: 0.8,
                depthTest: false,
                depthWrite: false
            });

        const particle = new THREE.Mesh(
            particleGeometry,
            particleMaterial
        );

        particle.userData.angle =
            (Math.PI * 2 / 20) * i;

        particle.userData.radius =
            2.28 + Math.random() * 0.22;

        particle.userData.speed =
            0.18 + Math.random() * 0.3;

        particle.userData.offset =
            Math.random() * Math.PI * 2;

        particle.renderOrder = 102;

        centerPhotoGroup.add(particle);

        photoParticles.push(particle);
    }


    // =========================
    // 📸 FOTO DEPAN
    // =========================

    loader.load(
        frontPath,
        (texture) => {

            texture.colorSpace =
                THREE.SRGBColorSpace;

            const geometry =
                new THREE.CircleGeometry(
                    2.05,
                    128
                );

            const material =
                new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    side: THREE.DoubleSide,
                    depthTest: false,
                    depthWrite: false
                });

            photoFront =
                new THREE.Mesh(
                    geometry,
                    material
                );

            photoFront.position.z = 0.2;

            photoFront.renderOrder = 110;

            photoFront.userData.isCenterPhoto = true;

            centerPhotoGroup.add(photoFront);
        },
        undefined,
        (error) => {
            console.error(
                "Gagal memuat imutku.jpg",
                error
            );
        }
    );


    // =========================
    // 📸 FOTO BELAKANG
    // =========================

    loader.load(
        backPath,
        (texture) => {

            texture.colorSpace =
                THREE.SRGBColorSpace;

            const geometry =
                new THREE.CircleGeometry(
                    2.05,
                    128
                );

            const material =
                new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    side: THREE.DoubleSide,
                    depthTest: false,
                    depthWrite: false
                });

            photoBack =
                new THREE.Mesh(
                    geometry,
                    material
                );

            photoBack.position.z = -0.2;

            photoBack.rotation.y =
                Math.PI;

            photoBack.renderOrder = 109;

            photoBack.userData.isCenterPhoto = true;

            centerPhotoGroup.add(photoBack);
        },
        undefined,
        (error) => {
            console.error(
                "Gagal memuat imutku-belakang.jpg",
                error
            );
        }
    );
}


/* =========================================================
   FLIP CENTER PHOTO
========================================================= */

function flipCenterPhoto() {

    if (!centerPhotoGroup) return;

    photoFlipped =
        !photoFlipped;

    targetPhotoRotation =
        photoFlipped
            ? Math.PI
            : 0;
}


/* =========================================================
   ANIMATE CENTER PHOTO
========================================================= */

function animateCenterPhoto() {

    if (!centerPhotoGroup) return;

    const time =
        performance.now() * 0.001;


    // =========================
    // 🔄 FLIP 180°
    // =========================

    currentPhotoRotation =
        THREE.MathUtils.lerp(
            currentPhotoRotation,
            targetPhotoRotation,
            0.075
        );

    centerPhotoGroup.rotation.y =
        currentPhotoRotation;


    // =========================
    // 💫 FLOATING
    // =========================

    centerPhotoGroup.position.y =
        Math.sin(time * 1.15) * 0.07;

    centerPhotoGroup.position.x =
        Math.cos(time * 0.8) * 0.035;


    // =========================
    // ✨ RING BERPUTAR
    // =========================

    if (photoRing) {

        photoRing.rotation.z =
            time * 0.18;

        const pulse =
            1 +
            Math.sin(time * 2.2) * 0.018;

        photoRing.scale.set(
            pulse,
            pulse,
            pulse
        );

        photoRing.material.opacity =
            0.62 +
            Math.sin(time * 2.5) * 0.12;
    }


    // =========================
    // 💜 RING LUAR
    // =========================

    if (photoOuterRing) {

        photoOuterRing.rotation.z =
            -time * 0.12;

        photoOuterRing.material.opacity =
            0.25 +
            Math.sin(time * 1.5) * 0.12;
    }


    // =========================
    // 🌟 ORBIT PARTICLES
    // =========================

    photoParticles.forEach(
        (particle) => {

            const angle =
                particle.userData.angle +
                time *
                particle.userData.speed;

            const radius =
                particle.userData.radius +
                Math.sin(
                    time * 1.4 +
                    particle.userData.offset
                ) * 0.06;

            particle.position.x =
                Math.cos(angle) * radius;

            particle.position.y =
                Math.sin(angle) * radius;

            particle.position.z =
                Math.sin(
                    time * 1.2 +
                    particle.userData.offset
                ) * 0.12;

            particle.material.opacity =
                0.45 +
                Math.sin(
                    time * 3 +
                    particle.userData.offset
                ) * 0.35;
        }
    );
}


/* =========================================================
   GALAXY POINTER DOWN
========================================================= */

function galaxyPointerDown(event) {

    galaxyDragging = true;

    galaxyMoved = false;

    galaxyPreviousPointer.x =
        event.clientX;

    galaxyPreviousPointer.y =
        event.clientY;

    galaxyRotationVelocity.x = 0;

    galaxyRotationVelocity.y = 0;

    if (
        galaxyRenderer
            ?.domElement
            ?.setPointerCapture
    ) {

        try {

            galaxyRenderer
                .domElement
                .setPointerCapture(
                    event.pointerId
                );

        } catch (error) {
            /* ignore */
        }
    }
}


/* =========================================================
   GALAXY POINTER MOVE
========================================================= */

function galaxyPointerMove(event) {

    if (!galaxyDragging) return;

    const deltaX =
        event.clientX -
        galaxyPreviousPointer.x;

    const deltaY =
        event.clientY -
        galaxyPreviousPointer.y;

    if (
        Math.abs(deltaX) > 2 ||
        Math.abs(deltaY) > 2
    ) {
        galaxyMoved = true;
    }

    galaxyPreviousPointer.x =
        event.clientX;

    galaxyPreviousPointer.y =
        event.clientY;


    galaxyTargetRotation.y +=
        deltaX * 0.004;

    galaxyTargetRotation.x +=
        deltaY * 0.003;

    galaxyTargetRotation.x =
        THREE.MathUtils.clamp(
            galaxyTargetRotation.x,
            -1.3,
            1.3
        );

    galaxyRotationVelocity.y =
        deltaX * 0.0015;

    galaxyRotationVelocity.x =
        deltaY * 0.001;
}


/* =========================================================
   GALAXY POINTER UP
========================================================= */

function galaxyPointerUp(event) {

    galaxyDragging = false;

    if (
        galaxyRenderer
            ?.domElement
            ?.releasePointerCapture
    ) {

        try {

            galaxyRenderer
                .domElement
                .releasePointerCapture(
                    event.pointerId
                );

        } catch (error) {
            /* ignore */
        }
    }
}


/* =========================================================
   GALAXY ZOOM
========================================================= */

function galaxyZoom(event) {

    event.preventDefault();

    const zoomAmount =
        event.deltaY * 0.012;

    galaxyZoomTarget +=
        zoomAmount;

    galaxyZoomTarget =
        THREE.MathUtils.clamp(
            galaxyZoomTarget,
            7,
            45
        );
}


/* =========================================================
   GALAXY CLICK
========================================================= */

function galaxyClick(event) {

    if (galaxyMoved) {

        galaxyMoved = false;

        return;
    }

    if (!galaxyRenderer) return;


    const rect =
        galaxyRenderer
            .domElement
            .getBoundingClientRect();

    galaxyMouse.x =
        (
            (
                event.clientX -
                rect.left
            ) /
            rect.width
        ) * 2 - 1;

    galaxyMouse.y =
        -(
            (
                event.clientY -
                rect.top
            ) /
            rect.height
        ) * 2 + 1;


    galaxyRaycaster.setFromCamera(
        galaxyMouse,
        galaxyCamera
    );


    /* =========================
       CENTER PHOTO PRIORITY
    ========================= */

    const photoObjects = [];

    if (photoFront) {
        photoObjects.push(
            photoFront
        );
    }

    if (photoBack) {
        photoObjects.push(
            photoBack
        );
    }

    const photoHits =
        galaxyRaycaster.intersectObjects(
            photoObjects,
            false
        );

    if (photoHits.length > 0) {

        flipCenterPhoto();

        return;
    }


    /* =========================
       WORD CLICK
    ========================= */

    const wordHits =
        galaxyRaycaster.intersectObjects(
            galaxyWords,
            false
        );

    if (wordHits.length > 0) {

        const selectedWord =
            wordHits[0].object;

        showLoveMessage(
            selectedWord.userData.message
        );
    }
}


/* =========================================================
   SHOW LOVE MESSAGE
========================================================= */

function showLoveMessage(message) {

    const box =
        document.getElementById(
            "loveMessage"
        );

    const text =
        document.getElementById(
            "messageText"
        );

    if (!box || !text) return;

    text.innerText =
        message;

    box.classList.add(
        "show"
    );
}


/* =========================================================
   CLOSE LOVE MESSAGE
========================================================= */

function closeLoveMessage() {

    const box =
        document.getElementById(
            "loveMessage"
        );

    if (!box) return;

    box.classList.remove(
        "show"
    );
}


/* =========================================================
   TOUCH START
========================================================= */

let touchStartX = 0;
let touchStartY = 0;

let lastTouchX = 0;
let lastTouchY = 0;

let lastPinchDistance = 0;

let isTouching = false;


// =========================
// 📱 TOUCH START
// =========================

function galaxyTouchStart(e) {

    e.preventDefault();

    isTouching = true;

    // 🤏 Dua jari = mulai pinch zoom
    if (e.touches.length === 2) {

        lastPinchDistance =
            getPinchDistance(e.touches);

        return;
    }

    // 👆 Satu jari = rotate galaxy
    if (e.touches.length === 1) {

        touchStartX =
            e.touches[0].clientX;

        touchStartY =
            e.touches[0].clientY;

        lastTouchX =
            touchStartX;

        lastTouchY =
            touchStartY;
    }
}


// =========================
// 📱 TOUCH MOVE
// =========================

function galaxyTouchMove(e) {

    e.preventDefault();

    // =========================
    // 🤏 PINCH ZOOM
    // =========================

    if (e.touches.length === 2) {

        const currentDistance =
            getPinchDistance(e);

        if (lastPinchDistance > 0) {

            const difference =
                currentDistance -
                lastPinchDistance;

            // Jari menjauh = zoom in
            // Jari mendekat = zoom out
            galaxyCamera.position.z -=
    difference * 0.025;

            // Batas zoom
           galaxyCamera.position.z =
    THREE.MathUtils.clamp(
        galaxyCamera.position.z,
        5,
        80
    );
        }

        lastPinchDistance =
            currentDistance;

        return;
    }


    // =========================
    // 👆 ROTATE GALAXY
    // =========================

    if (
        e.touches.length === 1 &&
        isTouching
    ) {

        const currentX =
            e.touches[0].clientX;

        const currentY =
            e.touches[0].clientY;

        const deltaX =
            currentX - lastTouchX;

        const deltaY =
            currentY - lastTouchY;

        galaxyGroup.rotation.y +=
            deltaX * 0.005;

        galaxyGroup.rotation.x +=
            deltaY * 0.005;

        lastTouchX = currentX;
        lastTouchY = currentY;
    }
}


// =========================
// 📱 TOUCH END
// =========================

function galaxyTouchEnd(e) {

    e.preventDefault();

    if (e.touches.length < 2) {
        lastPinchDistance = 0;
    }

    if (e.touches.length === 0) {
        isTouching = false;
    }
}


// =========================
// 📏 HITUNG JARAK 2 JARI
// =========================

function getPinchDistance(e) {

    const dx =
        e.touches[0].clientX -
        e.touches[1].clientX;

    const dy =
        e.touches[0].clientY -
        e.touches[1].clientY;

    return Math.sqrt(
        dx * dx +
        dy * dy
    );
}


/* =========================================================
   RESIZE
========================================================= */

function resizeGalaxy() {

    if (
        !galaxyCamera ||
        !galaxyRenderer
    ) {
        return;
    }

    galaxyCamera.aspect =
        window.innerWidth /
        window.innerHeight;

    galaxyCamera.updateProjectionMatrix();

    galaxyRenderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
}


/* =========================================================
   GALAXY ANIMATION
========================================================= */

function animateGalaxy() {

    requestAnimationFrame(
        animateGalaxy
    );

    if (
        !galaxyRenderer ||
        !galaxyScene ||
        !galaxyCamera
    ) {
        return;
    }

    const time =
        performance.now() *
        0.001;


    /* =========================
       GALAXY ROTATION
    ========================= */

    if (!galaxyDragging) {

        galaxyTargetRotation.y +=
            0.0008;

        galaxyTargetRotation.y +=
            galaxyRotationVelocity.y;

        galaxyTargetRotation.x +=
            galaxyRotationVelocity.x;

        galaxyRotationVelocity.x *=
            0.94;

        galaxyRotationVelocity.y *=
            0.94;
    }


    galaxyCurrentRotation.x =
        THREE.MathUtils.lerp(
            galaxyCurrentRotation.x,
            galaxyTargetRotation.x,
            0.06
        );

    galaxyCurrentRotation.y =
        THREE.MathUtils.lerp(
            galaxyCurrentRotation.y,
            galaxyTargetRotation.y,
            0.06
        );


    galaxyGroup.rotation.x =
        galaxyCurrentRotation.x;

    galaxyGroup.rotation.y =
        galaxyCurrentRotation.y;


    /* =========================
       STAR MOVEMENT
    ========================= */

    if (galaxyStars) {

        galaxyStars.rotation.y +=
            0.00008;

        galaxyStars.rotation.x =
            Math.sin(
                time * 0.1
            ) * 0.02;
    }


    /* =========================
       MILKY WAY ROTATION
    ========================= */

    if (milkyWayStars) {

        milkyWayStars.rotation.y +=
            0.0005;
    }


    /* =========================
       NEBULA MOVEMENT
    ========================= */

    if (galaxyNebula) {

        galaxyNebula.rotation.y +=
            0.00025;

        galaxyNebula.rotation.z =
            Math.sin(
                time * 0.08
            ) * 0.08;
    }


    /* =========================
       FLOATING WORDS
    ========================= */

    galaxyWords.forEach((word) => {

        const offset =
            word.userData.floatOffset;

        const speed =
            word.userData.floatSpeed;

        const baseScale =
            word.userData.baseScale;

        word.position.y +=
            Math.sin(
                time * speed +
                offset
            ) * 0.0008;

        const pulse =
            1 +
            Math.sin(
                time * 1.2 +
                offset
            ) * 0.035;

        word.scale.set(
            baseScale * 4.2 * pulse,
            baseScale * 1.4 * pulse,
            1
        );
    });


    /* =========================
       CENTER PHOTO
    ========================= */

    animateCenterPhoto();


    /* =========================
       CAMERA ZOOM
    ========================= */

    galaxyZoomCurrent =
        THREE.MathUtils.lerp(
            galaxyZoomCurrent,
            galaxyZoomTarget,
            0.08
        );

    galaxyCamera.position.z =
        galaxyZoomCurrent;


    /* =========================
       RENDER
    ========================= */

    galaxyRenderer.render(
        galaxyScene,
        galaxyCamera
    );
}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initFloatingHearts();

        initLightbox();

        const loveMessage =
            document.getElementById(
                "loveMessage"
            );

        if (loveMessage) {
            loveMessage.classList.remove(
                "show"
            );
        }
    }
);