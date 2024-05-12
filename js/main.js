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