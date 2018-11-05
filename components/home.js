"use strict";

const home = {
    template: `

    <header>
        <h1>Carly Moses</h1>

        <section class="contact_info">
            <section>
                <img src="images/github.png" class="logo"><a class="logo_a" href="https://github.com/carly-moses"> carly-moses</a>
            </section>
            <section>
                <img src="images/email.png" class="logo"><a class="logo_a" href="cmoses916@gmail.com"> cmoses916@gmail.com</a>
            </section>
            <section>
                <img src="images/linkedin.png" class="linkedin_logo"><a class="logo_a" href="https://www.linkedin.com/in/carly-moses/"> carly-moses</a>
            </section>
        </section>
        <h4>About Me , yo</h4> 
    </header>

    <section class="container">
        <section class="project">
            <h2>The Grand Escape</h2>
            <a href="https://avport.github.io/theGrandEscape/app/public/index.html#!/welcome"><img src="images/grandEscape.png"></a>
            <section class="overlay">
                <section class="info">
                    <p><a href="https://avport.github.io/theGrandEscape/app/public/index.html#!/welcome">The Grand Escape</a> was created with a group of four as our final project for Grand Circus Front-End Developement Bootcamp</p>
                </section>
            </section>
        </section>

        <section class="project">
            <h2>AngularJS Movie</h2>
            <a href="https://ristaujo.github.io/angularProject/#!/movielist"><img src="images/amp.png"></a>
            <section class="overlay">
                <section class="info">
                    <p><a href="https://ristaujo.github.io/angularProject/#!/movielist">Movie</a> completed with a group of four. Making calls to the Movie DB to retrieve a list of popular movies. </p>
                </section>
            </section>
        </section>

        <section class="project">
            <h2>jQuery Matching</h2>
            <a href="https://nickburnell.github.io/Midterm-Memoryboard/"><img src="images/motorcityMem.png"></a>
            <section class="overlay">
                <section class="info">
                    <p><a href="https://nickburnell.github.io/Midterm-Memoryboard/">Matching</a>Created with a group of four to </p>
                </section>
            </section>
        </section>

        <section class="project">
            <h2>My Own Project</h2>
            <a href="https://nickburnell.github.io/Midterm-Memoryboard/"><img src="images/motorcityMem.png"></a>
            <section class="overlay">
                <section class="info">
                    <p><a href="https://nickburnell.github.io/Midterm-Memoryboard/">Matching</a>Created with a group of four to </p>
                </section>
            </section>
        </section>

        <section class="project">
            <h2>AngularJS Profile</h2>
            <a href="https://nickburnell.github.io/Midterm-Memoryboard/"><img src="images/motorcityMem.png"></a>
            <section class="overlay">
                <section class="info">
                    <p><a href="https://nickburnell.github.io/Midterm-Memoryboard/">Matching</a>Created with a group of four to </p>
                </section>
            </section>
        </section>

        <section class="project">
            <h2>AngularJS TODO</h2>
            <a href="https://nickburnell.github.io/Midterm-Memoryboard/"><img src="images/motorcityMem.png"></a>
            <section class="overlay">
                <section class="info">
                    <p><a href="https://nickburnell.github.io/Midterm-Memoryboard/">Matching</a>Created with a group of four to </p>
                </section>
            </section>
        </section>

        <section class="project">
            <h2>jQuery</h2>
            <a href="https://nickburnell.github.io/Midterm-Memoryboard/"><img src="images/motorcityMem.png"></a>
            <section class="overlay">
                <section class="info">
                    <p><a href="https://nickburnell.github.io/Midterm-Memoryboard/">Matching</a>Created with a group of four to </p>
                </section>
            </section>
        </section>

        <section class="project">
            <h2>Vanilla JS</h2>
            <a href="https://nickburnell.github.io/Midterm-Memoryboard/"><img src="images/motorcityMem.png"></a>
            <section class="overlay">
                <section class="info">
                    <p><a href="https://nickburnell.github.io/Midterm-Memoryboard/">Matching</a>Created with a group of four to </p>
                </section>
            </section>
        </section>

        <section class="project html_css">
            <h2>HTML/CSS</h2>
            <a href="https://nickburnell.github.io/Midterm-Memoryboard/"><img src="images/motorcityMem.png"></a>
            <section class="overlay">
                <section class="info">
                    <p><a href="https://nickburnell.github.io/Midterm-Memoryboard/">Matching</a>Created with a group of four to </p>
                </section>
            </section>
        </section>
    </section>

    <footer>
        
        <section>
            <img src="images/github.png" class="logo"><a class="logo_a" href="https://github.com/carly-moses">carly-moses</a>
        </section>
        <section>
            <img src="images/email.png" class="logo"><a class="logo_a" href="cmoses916@gmail.com">cmoses916@gmail.com</a>
        </section>
        <section>
            <img src="images/linkedin.png" class="linkedin_logo"><a class="logo_a" href="https://www.linkedin.com/in/carly-moses/"> carly-moses</a>
        </section>
        
    </footer>



    
    
    
    `,

    controller: function(){
        const vm = this;

    }
}


angular
    .module("app")
    .component("home", home)