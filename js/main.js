let header = document.getElementsByTagName("header")[0];
let up = document.getElementById("up");
let logo = document.getElementById("logo");

window.onscroll = function(){
    if (scrollY >= 800){
        header.classList.add("bg");
        up.classList.add("open");
        logo.classList.add("open");
    } else {
        header.classList.remove("bg");
        up.classList.remove("open");
        logo.classList.remove("open");
    }
}

up.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function startProgress(entry) {
        const target = entry.target;
        const progressValue = parseInt(target.getAttribute('aria-valuenow'));
        let currentProgress = 0;
        const progressInterval = setInterval(function () {
            target.querySelector('.progress-bar').style.width = currentProgress + '%';
            currentProgress++;
            if (currentProgress > progressValue) clearInterval(progressInterval);
        }, 20); // Adjust the interval for smoother progress animation
    }

    const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startProgress(entry);
                progressObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.progress').forEach(progress => {
        progressObserver.observe(progress);
    });
});

let closeBtn = document.getElementById("close");
let show = document.getElementById("show");
let port1 = document.getElementById("port1");
let port2 = document.getElementById("port2");
let port3 = document.getElementById("port3");
let port4 = document.getElementById("port4");
let port5 = document.getElementById("port5");
let port6 = document.getElementById("port6");
let port7 = document.getElementById("port7");
let port8 = document.getElementById("port8");

closeBtn.addEventListener("click", function() {
    show.classList.add("none");
  });

  port1.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port2.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port3.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port4.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port5.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port6.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port7.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port8.addEventListener("click", function() {
    show.classList.remove("none");
  });

let moreBtn = document.getElementById("more");
let moreSec = document.getElementById("moreSec");

moreBtn.onclick = function(){
    moreSec.classList.toggle ("het");
    if (more.innerHTML === "See More") {
        more.innerHTML = "See Less";
    } else {
        more.innerHTML = "See More";
    }
}