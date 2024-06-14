function toggleUsluga(id) {
    var tekstovi = document.querySelectorAll('.usluga-text');
    tekstovi.forEach(function(el) {
        if (el.id === id + "-text") {
            el.style.display = el.style.display === "block" ? "none" : "block";
        } else {
            el.style.display = "none";
        }
    });
}

