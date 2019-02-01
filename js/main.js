const about = {
    template: `<section id="about-me">
        <div class="row text-center bg-white rounded">
            <div class="col-md-4 offset-lg-1 my-4">
                <img src="img/Danisa.png">
            </div>
            <div class="offset-md-2 offset-lg-0 col-md-6 my-md-4 ">
                <h1>About Me</h1>
                <p class="px-2">Highly motivated graduate from a software development boot camp excited to start my new career in the technology field. <br><br> With 4 years of accounting experience, i'm able to appreciate the little things and strive for accuracy. </p>    
            </div>
        </div>
        </section>
        <section id="skills">
            <div class="row bg-white rounded">
            <h1>Skills</h1>
            </div>
        </section>`
}

const skills = {
    template: `<section id="skills">
        <div class="row bg-white rounded">
            <h1 class="text-center col-12">Skills</h1>
            <p class="col-3">HTML</p>
            <div class="col-8 container">
                <div class="skills html">
                </div>
            </div>
            <p class="col-3">CSS</p>
            <div class="col-8 container">
                <div class="skills html">
                </div>
            </div>
            <p class="col-3">Javascript</p>
            <div class="col-8 container">
                <div class="skills html">
                </div>
            </div>
            <p class="col-3">HTML</p>
            <div class="col-8 container">
                <div class="skills html">
                </div>
            </div>
            <p class="col-3">HTML</p>
            <div class="col-8 container">
                <div class="skills html">
                </div>
            </div>
            <p class="col-3">HTML</p>
            <div class="col-8 container">
                <div class="skills html">
                </div>
            </div>






        </div>





    </section>




    `

}

const projects = {
	template: `<section id="projects">
        <div class="text-center">
        <h1>Projects</h1>
            <div class="row">
                <div class="col-sm-12 col-md-4 my-3">
                    <div class="card">
                        <img src="img/clock.png" class="card-img-top" alt="clockPic">
                        <div class="card-body">
                            <h5 class="card-title">Alarm Clock</h5>
                            <a class="btn btn-outline" href="projects/clockApp/clock.html" target="_blank">See More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 my-3">
                    <div class="card">
                        <img src="img/zodiac.png" class="card-img-top" alt="zodiac">
                        <div class="card-body">
                            <h5 class="card-title">What's your zodiac sign?</h5>
                            <a class="btn btn-outline" href="projects/zodiacSign/zodiac.html" target="_blank">See More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 my-3">
                    <div class="card">
                        <img src="img/todo.png" class="card-img-top" alt="todo-list Pic">
                        <div class="card-body">
                            <h5 class="card-title">To Do List</h5>
                            <a class="btn btn-outline" href="projects/todo-list/todo-list.html" target="_blank">See More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
}


const contact = {
	template: `<section id="contact">
        <div class="row bg-white rounded">
            <div class="col-lg-8">
                <form class="border border-white rounded bg-white px-5 pb-5 pt-4 text-left">
                <h1 class="text-center mb-3">CONTACT ME</h1>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Name:</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Email:</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Message:</label>
                        <textarea rows="5" type="text" class="form-control" required></textarea>
                    </div>
                    <div class="form-group">
                        <input type="file" class="rounded form-control-file p-1">
                     </div>
                    <button class="rounded mt-3 p-2" type="button">SEND MESSAGE</button>
                    
                </form>
                </div>
                <div class="col-lg-4">
                <div id="info" class="p-5 my-3 rounded">
                    <div class="contacts">
                        <h5>EMAIL</h5>
                        <p>danisa.ortanez@gmail.com</p>
                    </div>
                    <div class="contacts">
                        <h5>TELEPHONE</h5>
                        <p>415-652-0310</p>
                    </div>
                    <div class="contacts">
                        <h5>ADDRESS</h5>
                        <p>34809 Starling Drive<br>
                        Union City, CA 94587</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/danisa-ortanez-27627963/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/dortanez" target="_blank"><i class="fab fa-github-square"></i></a>
                    </div>
                </div>
            </div>
            </div>
        </section>`
}

const router = new VueRouter({
	routes: [
		{
			path: "/about",
			component: about
		},
        {
            path: "/skills",
            component: skills
        },
		{
			path: "/projects",
			component: projects
		},
		{
			path: "/contact",
			component: contact
		}
	]
})

var routeTest = new Vue({
	router,
	el:"#portfolio",
	data: {},
	methods: {}
}).$mount("#portfolio")