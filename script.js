function toggleMode() {
    document.body.classList.toggle("dark");
}
document.getElementById("jobForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Job Added Successfully! (Demo only)");
});

function toggleFAQ(element) {
    let answer = element.nextElementSibling;
    answer.style.display = 
        answer.style.display === "block" ? "none" : "block";
}

document.getElementById("jobForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    alert("✅ Job Added Successfully!");
});