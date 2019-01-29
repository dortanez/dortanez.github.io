const about = {
    template: `<section id="about-me">

        <div class="row text-center">

            <div class=" col-sm-12 col-md-4 offset-lg-1 mb-4">

                <img src="img/Danisa.png">

            </div>
            <div class=" col-sm-12 offset-md-2 offset-lg-0 col-md-6 my-sm-4 my-md-0">

                <h1>About Me</h1>

                <p class="px-sm-2">Highly motivated graduate from a software development boot camp excited to start my new career in the technology field. <br><br> With 4 years of accounting experience, i'm able to appreciate the little things and strive for accuracy. </p>

                    <a href="https://www.linkedin.com/in/danisa-ortanez-27627963/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/dortanez" target="_blank"><i class="fab fa-github-square"></i></a>
            </div>
        </div>
        </section>`
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
        <div class="container">
        <div class="row text-center">
            <h1 class="m-auto">Contact Me</h1>
            <form class="border border-dark p-5 m-auto col-md-6 col-12 text-left">
                <div class="form-group">
                    <label>Your Name</label>
                    <input type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label>Subject</label>
                    <input type="text" class="form-control">
                </div>

                <div class="form-group">
                <label>Message</label>
                <textarea type="text" class="form-control" required></textarea>
                </div>
                <button type="button">Send Message</button>

            </form>
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