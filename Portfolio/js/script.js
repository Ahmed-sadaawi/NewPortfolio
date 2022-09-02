//===========================================================================================//
//=============================== بسم الله الرحمن الرحيم ======================================//
//==========================================================================================//
const Cv = {
    initialize: function () {
        /*============================= Menu ==============================*/
        this.menu = document.getElementById('menu');
        this.arrow = document.getElementById('fa-arrow-left');
        this.homeContent = document.querySelector('section.home-content');
        this.links = document.querySelectorAll('#items .list a');

        // Bars  just on mobile phone "variables";
        this.items = document.getElementById('items');
        this.bars = document.querySelector('section#menu #bars.fa-bars');

        /*============================= Typing ============================*/
        this.webDeveloper = document.getElementById('web-developer');
        this.words = ["Web Developer", "Front-End", "Back-End", "Youtuber", "Web Design"];

        /*============================= about me ============================*/
        this.content = document.querySelector('main.our-single-page .about-me-content');
        this.overlay = document.querySelector('main.our-single-page .about-me-content .overlay');

        /*============================= Skills ==============================*/
        this.skills = document.querySelector('main.our-single-page section.skills');
        this.projects = document.querySelector('main.our-single-page .Projects');

        Portfolio.menuSide();
        Portfolio.typing();
    },

    /*============================= Menu function =============================*/
    menuSide: function () {
        // Arrow go left and right;
        Portfolio.arrow.addEventListener('click', function () {
            Portfolio.menu.classList.toggle("transition");

            setTimeout(() => {
                Portfolio.arrow.classList.toggle("still-show");
                Portfolio.arrow.classList.toggle("fa-arrow-right");
            }, 10);

            Portfolio.projects.classList.toggle("project-transition");
            Portfolio.overlay.classList.toggle("about-me-width");
        });

        // Links on menu to open pages;
        for (let i = 0; i < Portfolio.links.length; i++) {
            Portfolio.links[i].addEventListener('click', function (e) {
                Portfolio.links.forEach(link => {
                    link.classList.remove('active');
                    e.target.classList.add('active');

                });

                if (e.target.id === "home") {
                    Portfolio.homeContent.style.display = "block";
                    Portfolio.content.style.display = "none";
                    Portfolio.skills.style.display = "none";
                    Portfolio.projects.style.display = "none";

                }

                if (e.target.id === "about") {
                    Portfolio.content.style.display = "block";
                    Portfolio.homeContent.style.display = "none";
                    Portfolio.skills.style.display = "none";
                    Portfolio.projects.style.display = "none";

                }

                if (e.target.id === "skills") {
                    Portfolio.skills.style.display = "block";
                    Portfolio.content.style.display = "none";
                    Portfolio.homeContent.style.display = "none";
                    Portfolio.projects.style.display = "none";


                }

                if (e.target.id === "projects") {
                    Portfolio.projects.style.display = "block";
                    Portfolio.homeContent.style.display = "none";
                    Portfolio.content.style.display = "none";
                    Portfolio.skills.style.display = "none";
                }


            });
        };



        // Just on mobile phone bars;
        Portfolio.bars.addEventListener('click', function () {
            Portfolio.items.classList.toggle('show__none');
            Portfolio.bars.classList.toggle("rotate__bars");
        });



    },

    /*============================= Typing function ===========================*/
    typing: function () {
        const typing = function () {
            let aRandomSentence = Portfolio.words[Math.floor(Math.random() * Portfolio.words.length)];
            let split = aRandomSentence.split(''); //=> ["W", "e", "b", " ", "D", "e", "v" , "e", "l", "o", "p", "e", "r"];

            split.forEach(function (letter, i) {
                setTimeout(function () {
                    Portfolio.webDeveloper.innerHTML += letter;
                }, 100 * i);
                Portfolio.webDeveloper.innerHTML = '';
            });
        }
        setInterval(typing, 3000);
    },

}


const Portfolio = Object.assign({}, Cv);
Portfolio.initialize();


//===================================