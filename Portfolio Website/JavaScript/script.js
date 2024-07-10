document.addEventListener("DOMContentLoaded", function() {
    /* ========================== Typing animation ====================== */
    var typed = new Typed(".typing", {
        strings:[""," SQL Developer", " Web Developer", " Full Stack Developer", " Backend Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    /* ========================== Aside ====================== */
    const nav = document.querySelector(".nav"),
          navList = nav.querySelectorAll("li"),
          totalNavList = navList.length,
          allSection = document.querySelectorAll(".section"),
          totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {
            removeBackSection();
            for (let j = 0; j < totalNavList; j++) {
                const navAnchor = navList[j].querySelector("a");
                if (navAnchor.classList.contains("active")) {
                    addBackSection(j);
                }
                navAnchor.classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        });
    }

    function removeBackSection() {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
    }

    function addBackSection(num) {
        allSection[num].classList.add("back-section");
    }

    function showSection(element) {
        for (let i = 0; i<totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        const targetSection = document.querySelector("#" + target);
        if (targetSection) {
            targetSection.classList.add("active");
        } else {
            console.error("Target section not found");
        }
    }

    function updateNav(element) {
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    const hireMeButton = document.querySelector(".hire-me");
    if (hireMeButton) {
        hireMeButton.addEventListener("click", function() {
            const sectionIndex = this.getAttribute("data-section-index");
            console.log(sectionIndex);
            showSection(this);
            updateNav(this);
        });
    }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");

    if (navTogglerBtn && aside) {
        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
        });
    }

    function asideSectionTogglerBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
        }
    }
});
