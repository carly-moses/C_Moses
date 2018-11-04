"use strict";

const home = {
    template: `

    <header>
        <h1>Carly Moses</h1>
        <p>About Me , yo</p> 
    </header>

    <section class="container">
        <section class="project">
            <h3>The Grand Escape</h3>
            <img src="images/grandEscape.png">
            <section class="overlay">
                <section class="info">The Grand Escape was created with a group of four as our final project for Grand Circus Front-End Developement Bootcamp</section>
            </section>
        </section>

        <section class="project">
            <h3>AngularJS Movie</h3>
            <img src="images/amp.png">
            <section class="info">Completed with a group of four. Making calls to the Movie DB to retrieve a list of popular movies. </section>
        </section>

        <section class="project">
            <h3>jQuery Matching</h3>
            <img src="images/motorcityMem.png">
            <section class="info">Created with a group of four to </section>
        </section>

        <section class="project">
            <h3>My Own Project, Blah</h3>
            <img>
            <section class="info"></section>
        </section>

        <section class="project">
            <h3>AngularJS Profile</h3>
            <img>
            <section class="info"></section>
        </section>

        <section class="project">
            <h3>AngularJS TODO</h3>
            <img>
            <section class="info"></section>
        </section>

        <section class="project">
            <h3>jQuery</h3>
            <img>
            <section class="info"></section>
        </section>

        <section class="project">
            <h3>Vanilla JS</h3>
            <img>
            <section class="info"></section>
        </section>

        <section class="project html_css">
            <h3>HTML/CSS</h3>
            <img>
            <section class="info"></section>
        </section>
    </section>

    <footer>
        <p>Linkedin: </p>
        <p>Github: </p>
        <p>Email: </p>
    </footer>



    
    
    
    `,

    controller: function(){
        const vm = this;

    }
}


angular
    .module("app")
    .component("home", home)