document.addEventListener("DOMContentLoaded", () => {
    fetch("../footer/footer-links.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer links container");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-links-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer links container:", error));
});
