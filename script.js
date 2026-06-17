/* =========================
   FAQ ACCORDION
========================= */

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

    });

});


/* =========================
   PRICING MODAL
========================= */

/* =========================
   ACCOUNT MODAL
========================= */

const accountModal =
document.getElementById("accountModal");

const accountButtons =
document.querySelectorAll(".open-account-modal");

const closeModal =
document.getElementById("closeModal");

const selectedPlan =
document.getElementById("selectedPlan");

accountButtons.forEach(button => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        const plan =
        button.getAttribute("data-plan");

        selectedPlan.textContent =
        plan + " Account Registration";

        accountModal.style.display = "flex";

    });

});

if(closeModal){

    closeModal.addEventListener("click", () => {

        accountModal.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if(e.target === accountModal){

        accountModal.style.display = "none";

    }

});

const accountForm =
document.getElementById("accountForm");

if(accountForm){

    accountForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Account Created Successfully!");

        accountForm.reset();

        accountModal.style.display = "none";

    });

}


/* =========================
   COURSE ENROLLMENT MODAL
========================= */

const courseModal =
document.getElementById("courseModal");

const enrollButtons =
document.querySelectorAll(".enroll-btn");

const courseClose =
document.querySelector(".close-course");

const courseTitle =
document.getElementById("courseTitle");

if (enrollButtons.length > 0) {

    enrollButtons.forEach(button => {

        button.addEventListener("click", () => {

            const courseName =
            button.closest(".course-card")
            .querySelector("h3").textContent;

            courseTitle.textContent =
            "Enroll In: " + courseName;

            courseModal.style.display = "flex";

        });

    });

}

if (courseClose) {

    courseClose.addEventListener("click", () => {

        courseModal.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if (e.target === courseModal) {

        courseModal.style.display = "none";

    }

});


const courseForm =
document.getElementById("courseForm");

if (courseForm) {

    courseForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Enrollment Successful!\n\n" +
            "Your registration has been received."
        );

        courseModal.style.display = "none";

        courseForm.reset();

    });

}


/* =========================
   GET STARTED BUTTONS
========================= */

const getStartedButtons =
document.querySelectorAll(".btn");

getStartedButtons.forEach(button => {

    if (
        button.textContent.includes("Get Started") ||
        button.textContent.includes("Start Learning")
    ) {

        button.addEventListener("click", () => {

            alert(
                "Welcome to EduGrowth!\n\n" +
                "Explore our courses and choose a learning path."
            );

        });

    }

});


/* =========================
   SMOOTH SCROLLING
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   PAGE LOADED MESSAGE
========================= */

window.addEventListener("load", () => {

    console.log(
        "EduGrowth Website Loaded Successfully!"
    );

});