document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sidebar a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const headerOffset = 60; // Ajuste para considerar a altura da barra de navegação ou cabeçalho
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

