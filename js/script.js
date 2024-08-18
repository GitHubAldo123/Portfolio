//-----------------------------------------------------//
//              Mode Active Maps
//-----------------------------------------------------//
function initMap() {
    const location = { lat: -6.743673, lng: 108.453127 }; // Coordinates of Cirebon, Indonesia
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
    initMap();
}

//-----------------------------------------------------//
//              Icon Scroll ke Home
//-----------------------------------------------------//
document.getElementById('scrollToTopBtn').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//-----------------------------------------------------//
//              Section Certificate
//-----------------------------------------------------//
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (carousel && prevBtn && nextBtn) {
    const SCROLL_STEP = 1;
    const SCROLL_INTERVAL = 100;

    const autoScroll = () => {
        carousel.scrollLeft += SCROLL_STEP;
        if (carousel.scrollLeft >= carousel.scrollWidth ) {
            carousel.scrollLeft -= (carousel.scrollWidth );
        }
    };

    prevBtn.addEventListener('click', () => {
        carousel.scrollLeft -= 1000;
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollLeft += 1000;
    });

    setInterval(autoScroll, SCROLL_INTERVAL);
}

//-----------------------------------------------------//
//              Section Skill
//-----------------------------------------------------//
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

//-----------------------------------------------------//
//              Section Work Experience & Projects
//-----------------------------------------------------//
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.experience-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('hidden');
        });
    });
});

//-----------------------------------------------------//
//              Section Blog Personal
//-----------------------------------------------------//
document.addEventListener('DOMContentLoaded', () => {
    const toggleTextBtn = document.getElementById('toggleTextBtn');
    const moreText = document.getElementById('moreText');
    const dots = document.getElementById('dots');

    toggleTextBtn.addEventListener('click', () => {
        if (moreText.style.display === 'none') {
            moreText.style.display = 'inline';
            dots.style.display = 'none';
            toggleTextBtn.textContent = 'Lebih Sedikit';
        } else {
            moreText.style.display = 'none';
            dots.style.display = 'inline';
            toggleTextBtn.textContent = 'Baca Selengkapnya';
        }
    });

    const ticker = document.getElementById('ticker');
    const text = ticker.textContent;
    ticker.innerHTML = '<span>' + text.split('').join('</span><span>') + '</span>';

    let offset = 0;
    const spanElements = ticker.querySelectorAll('span');

    function animateTicker() {
        offset--;
        if (Math.abs(offset) > spanElements.length) {
            offset = 0;
        }

        spanElements.forEach((span, index) => {
            const position = offset + index;
            span.style.transform = `translateX(${position}ch)`;
        });
    }

    setInterval(animateTicker, 500 / 5); // 30fps
});

//-----------------------------------------------------//
//              Mode Mobile Navbar Active
//-----------------------------------------------------//
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('nav');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    toggleMenuIcon();
});

mobileMenu.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        toggleMenuIcon();
    });
});

function toggleMenuIcon() {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenuButton.innerHTML = isOpen ? `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    ` : `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    `;
}

//-----------------------------------------------------//
//              Active Mode Dark and Light
//-----------------------------------------------------//
const body = document.body;
const darkModeOverlay = document.getElementById('darkModeOverlay');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const langToggle = document.getElementById('lang-toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('bg-dark-mode') ? 'light' : 'dark';
    toggleTheme(currentTheme);
});

langToggle.addEventListener('click', () => {
    const lang = langToggle.textContent.trim();
    const newLang = lang === 'EN/ID' ? 'id' : 'en';
    toggleLang(newLang);
});

function toggleTheme(theme) {
    body.classList.toggle('bg-light-mode');
    body.classList.toggle('bg-dark-mode');
    darkModeOverlay.classList.toggle('active');
    navbar.classList.toggle('dark-mode-navbar');

    document.querySelectorAll('nav a, button, h1, h2, h3, h4, h5, h6, p, span, li').forEach((el) => {
        el.classList.toggle('dark-mode-text');
    });

    const currentTheme = body.classList.contains('bg-dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);

    const logo = document.querySelector('.logo');
    if (currentTheme === 'dark') {
        logo.textContent = "Dark Mode On";
    } else {
        logo.textContent = "Light Mode On";
    }
}

//-----------------------------------------------------//
//              Active MUlti language
//-----------------------------------------------------//
function toggleLang(lang) {
    langToggle.textContent = lang === 'en' ? 'EN/ID' : 'ID/EN';
    changeLanguage(lang);
    localStorage.setItem('language', lang);
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.add('bi-sun');
    } else {
        themeIcon.classList.remove('bi-sun');
        themeIcon.classList.add('bi-moon');
    }
}

const translations = {
    en: {
        // navigasi menu bar
        title: "Personal Portfolio",
        about: "About",
        blog: "Blog Personal",
        experience: "Experience",
        project: "Project",
        skill: "Skill",
        certificate: "Certificate",
        contact: "Contact",
        footer: "Footer",

        // section About
        sectionAbout1 : "About Me",
        sectionAbout2 : "Hello! My name is Aldo. I am a Software Engineer, more specifically in the field of WEB developer. Currently I am still studying at one of the universities in Cirebon city majoring in IT. I have had a passion for WEB Developer since I first became acquainted with digital development. In my opinion, this is very interesting to study now and in the future.",
        sectionAbout3 : "Let's connect and build something amazing together!",
        sectionAbout4 : "Contact Me",
        sectionAbout5 : "Download CV",

        // section blogpersonal
        sectionblog1 : "My Personal Blog",
        sectionblog2 : "I am an IT student who lives in the city of Cirebon, West Java. I work as a software developer or what is usually called a Software Engineer. I work via WFH (Work From Home) or Remote Work",
        sectionblog2set : "With extensive experience and strong creative abilities, I am always passionate about bringing innovative solutions to every project I work on. Apart from that, I am also an observer of developments in the digital era and enjoy learning new things that I think are interesting to learn. I believe that the best inspiration often comes from diverse life experiences.",
        sectionblog3 : "Read more",
        sectionblog4 : "Tips & Tricks for Web Development",
        sectionblog5 : "Latest Technological Trends",
        sectionblog6 : "Personal Reflections and Stories",
        sectionblog7 : "Stay tuned for more updates and insights!",

        // sectionExperience
        Experience1 : "Experience",
        Experience2 : "My journey and professional experience.",
        // Timeline Item 1 
        Experience1per1 : "Current",
        Experience1per2 : "frontend dev at Kedawung Syntax Company",
        Experience1per3 : "Developing scalable web applications using modern technologies.",
        // Timeline Item 2
        Experience2per1 : "Previous",
        Experience2per2 : "Junior Developer at ABC Solutions",
        Experience2per3 : "Started as an intern and progressed to junior developer role.",
        // Timeline Item 3
        Experience3per1 : "Early Career",
        Experience3per2 : "Intern at gougle Corporation",
        Experience3per3 : "Gained foundational skills and practical experience in software development.",
        // Timeline Item 4
        Experience4per1 : "Early Career",
        Experience4per2 : "Intern at tokped Corporation",
        Experience4per3 : "Gained foundational skills and practical experience in software development.",

        // section Project
        Project1 : "Projects",
        Project2 : "Check out some of my recent projects.",
        // project 1
        Project1per1 : "E-commerce Website",
        Project1per2 : "Built a responsive e-commerce site using React and Firebase.",
        Project1per3 : "View Project",
        // project 2
        Project2per1 : "Portfolio Design",
        Project2per2 : "Designed my personal portfolio using Tailwind CSS.",
        Project2per3 : "View Project",

        // section skill
        skill1 : "Skill",
        skill1per1 : "HTML",
        skill1per2 : "Markup language for creating web pages.",

        skill2per1 : "CSS",
        skill2per2 : "organizes the appearance of elements written in the markup language",

        skill3per1 : "JAVA SCRIPT",
        skill3per2 : "development of open source website-based applications to make them more interactive and dynamic",

        skill4per1 : "C++",
        skill4per2 : "OOP (Object Oriented Programming) programming which has data and functions in the same class and object.",

        skill5per1 : "TailwindCSS",
        skill5per2 : "Cascading Style Sheet framework which is used to customize or design user interfaces on a web",

        skill6per1 : "PHP",
        skill6per2 : "Server-side scripting language for web development.",

        skill7per1 : "Git",
        skill7per2 : "Version control system for tracking changes in code.",

        skill8per1 : "Figma",
        skill8per2 : "Design tool for creating user interfaces and prototypes.",

        skill9per1 : "Laravel",
        skill9per2 : "PHP framework for building web applications.",

        skill10per1 : "Python",
        skill10per2 : "High-level programming language for various applications.",

        // section certificate
        CERTIFICATE : "CERTIFICATE",
        // Kolom Pertama
        certificate1 : "Enthusiasm for learning",
        certificate2 : "Web Developers, Coding Addicts, never forget to be grateful for their own abilities and always learn from everything...",
        // Kolom kedua
        certificate1per1 : "As an active student, I take part in activities both to increase my experience and knowledge and just to take up my hobby to expand my relationships and train my soft skills",
        certificate1per2 : "Certificate",
        certificate1per3 : "3+ Obtained",

        // Section Contact
        Contact1 : "My contact",
        Contact2 : "Want to collaborate or have questions? Contact me via the form below:",
        Contact3 : "Name",
        Contact4 : "Email",
        Contact5 : "Message",
        Contact6 : "Send",

        // Footer
        Footer : "© 2024 ALDO. All rights reserved."
    },
    id: {
        // navigasi menu bar
        title: "Portofolio Pribadi",
        about: "Tentang",
        blog: "Blog Pribadi",
        experience: "Pengalaman",
        project: "Proyek",
        skill: "Keahlian",
        certificate: "Sertifikat",
        contact: "Kontak",
        footer: "Footer",

        // section About
        sectionAbout1 : "Tentang saya",
        sectionAbout2 : "Halo! Namaku Aldo. Saya seorang Software Engineer, lebih khusus lagi di bidang WEB developer. Saat ini saya masih kuliah di salah satu universitas di kota Cirebon jurusan IT. Saya memiliki ketertarikan terhadap WEB Developer sejak pertama kali mengenal perkembangan digital. Menurut saya, hal ini sangat menarik untuk dikaji saat ini dan di masa depan.",
        sectionAbout3 : "Mari terhubung dan membangun sesuatu yang menakjubkan bersama-sama!",
        sectionAbout4 : "Hubungi saya",
        sectionAbout5 : "Unduh CV",

        // section blogpersonal
        sectionblog1 : "Blog Pribadi Saya",
        sectionblog2 : "Saya seorang mahasiswa IT yang tinggal di kota Cirebon, Jawa Barat. Saya bekerja sebagai Software Developer atau biasa disebut Software Engineer. Saya bekerja melalui WFH (Work From Home) atau Remote Work",
        sectionblog2set : "Dengan pengalaman luas dan kemampuan kreatif yang kuat, saya selalu bersemangat untuk menghadirkan solusi inovatif pada setiap proyek yang saya kerjakan. Selain itu, saya juga merupakan pengamat perkembangan era digital dan senang mempelajari hal-hal baru yang menurut saya menarik untuk dipelajari. Saya percaya bahwa inspirasi terbaik seringkali datang dari beragam pengalaman hidup.",
        sectionblog3 : "Baca selengkapnya",
        sectionblog4 : "Tips & Trik untuk Pengembangan Web",
        sectionblog5 : "Tren Teknologi Terkini",
        sectionblog6 : "Refleksi dan Cerita Pribadi",
        sectionblog7 : "Nantikan pembaruan dan wawasan lainnya!",

        // sectionExperience
        Experience1 : "Pengalaman",
        Experience2 : "Perjalanan dan pengalaman profesional saya.",
        // Timeline Item 1 
        Experience1per1 : "Saat ini",
        Experience1per2 : "pengembang frontend di Kedawung Syntax Company",
        Experience1per3 : "Mengembangkan aplikasi web yang scalable menggunakan teknologi modern.",
        // Timeline Item 2
        Experience2per1 : "Sebelumnya",
        Experience2per2 : "Pengembang Junior di ABC Solutions",
        Experience2per3 : "Dimulai sebagai pekerja magang dan berkembang ke peran pengembang junior.",
        // Timeline Item 3
        Experience3per1 : "Karier Awal",
        Experience3per2 : "Magang di gougle Corporation",
        Experience3per3 : "Memperoleh keterampilan dasar dan pengalaman praktis dalam pengembangan perangkat lunak.",
        // Timeline Item 4
        Experience4per1 : "Karier Awal",
        Experience4per2 : "Magang di tokped Corporation",
        Experience4per3 : "Memperoleh keterampilan dasar dan pengalaman praktis dalam pengembangan perangkat lunak.",

        // section Project
        Project1 : "Proyek",
        Project2 : "Lihat beberapa proyek terbaru saya.",
        // project
        Project1per1 : "Situs Web E-niaga",
        Project1per2 : "Membangun situs e-commerce responsif menggunakan React dan Firebase.",
        Project1per3 : "Lihat Proyek",
        // project
        Project2per1 : "Desain portofolio",
        Project2per2 : "Rancang portofolio pribadi saya menggunakan Tailwind CSS.",
        Project2per3 : "Lihat Proyek",

        // section skill
        skill1 : "Keahlian",
        skill1per1 : "HTML",
        skill1per2 : "Bahasa markup untuk membuat halaman web.",

        skill2per1 : "CSS",
        skill2per2 : "menata tampilan elemen yang tertulis pada bahasa markup",

        skill3per1 : "JAVA SCRIPT",
        skill3per2 : " pengembangan aplikasi berbasis website open source agar lebih interaktif dan dinamis",

        skill4per1 : "C++",
        skill4per2 : "pemrograman OOP (Object Oriented Programming) yang memiliki data dan fungsi dalam satu kelas dan objek yang sama.",

        skill5per1 : "TailwindCSS",
        skill5per2 : "framework Cascading Style Sheet yang digunakan untuk mengkustom atau mendesain user interface pada sebuah web",

        skill6per1 : "PHP",
        skill6per2 : "Bahasa skrip sisi server untuk pengembangan web.",

        skill7per1 : "Git",
        skill7per2 : "Sistem kontrol versi untuk melacak perubahan kode.",

        skill8per1 : "Figma",
        skill8per2 : "Alat desain untuk membuat antarmuka pengguna dan prototipe.",

        skill9per1 : "Laravel",
        skill9per2 : "Kerangka kerja PHP untuk membangun aplikasi web.",

        skill10per1 : "Python",
        skill10per2 : "Bahasa pemrograman tingkat tinggi untuk berbagai aplikasi.",

        // section certificate
        CERTIFICATE : "SERTIFIKAT",
        // Kolom Pertama
        certificate1 : "Antusiasme untuk belajar",
        certificate2 : "Web Developer, Tukang Coding, jangan pernah lupa mensyukuri kemampuan diri sendiri dan selalu belajar dari segalanya...",
        // Kolom kedua
        certificate1per1 : "Sebagai mahasiswa yang aktif, saya mengikuti kegiatan-kegiatan baik untuk menambah pengalaman maupun pengetahuan, serta sekedar menekuni hobi untuk memperluas relasi dan melatih soft skill saya.",
        certificate1per2 : "Sertifikat",
        certificate1per3 : "3+ Diperoleh",

        // Section Contact
        Contact1 : "Kontak saya",
        Contact2 : "Ingin berkolaborasi atau memiliki pertanyaan? Hubungi saya melalui formulir di bawah ini:",
        Contact3 : "Nama",
        Contact4 : "Email",
        Contact5 : "Pesan",
        Contact6 : "Kirim",

        // Footer
        Footer : "© 2024 ALDO. Seluruh hak cipta."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.dataset.lang;
        el.textContent = translations[lang][key];
    });
}

const savedTheme = localStorage.getItem('theme') || 'light';
toggleTheme(savedTheme);

const savedLang = localStorage.getItem('language') || 'en';
toggleLang(savedLang);

//-----------------------------------------------------//
//              Section About
//-----------------------------------------------------//
const profilePic = document.querySelector('#about img');

profilePic.addEventListener('mouseover', () => {
    profilePic.style.transform = 'scale(1.05)';
});

profilePic.addEventListener('mouseleave', () => {
    profilePic.style.transform = 'scale(1)';
});
