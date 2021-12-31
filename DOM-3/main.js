const bigpost = document.getElementById("main-post");
const post = document.getElementById("post-1-tab");
const post_2 = document.getElementById("post-2-tab");
const post_3 = document.getElementById("post-3-tab");
const post_4 = document.getElementById("post-4-tab");

post.addEventListener('click', active)
post_2.addEventListener('click', active)
post_3.addEventListener('click', active)
post_4.addEventListener('click', active)

post.addEventListener('click', newToggle)
post_2.addEventListener('click', newToggle)
post_3.addEventListener('click', newToggle)
post_4.addEventListener('click', newToggle)

function active() {
    post.classList.remove("active")
    post_2.classList.remove("active")
    post_3.classList.remove("active")
    post_4.classList.remove("active")
    this.classList.add("active")
}

function newToggle() {
    let src = this.firstElementChild.firstElementChild.firstElementChild.src
    let title = this.firstElementChild.lastElementChild.firstElementChild.innerHTML
    bigpost.firstElementChild.style.backgroundImage = `url(${src})`;
    bigpost.firstElementChild.firstElementChild.firstElementChild.innerHTML = title;
}
console.log();