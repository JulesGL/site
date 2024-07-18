document.addEventListener("DOMContentLoaded", function() {
    const bookCategorySelect = document.getElementById("book-category");
    const currentBooksSection = document.getElementById("current-books");
    const readBooksSection = document.getElementById("read-books");
    const toReadBooksSection = document.getElementById("to-read-books");

    const sections = {
        "current": currentBooksSection,
        "read": readBooksSection,
        "to-read": toReadBooksSection
    };

    bookCategorySelect.addEventListener("change", function() {
        const selectedCategory = bookCategorySelect.value;

        Object.values(sections).forEach(section => {
            section.style.display = "none";
        });

        sections[selectedCategory].style.display = "block";
    });

    // Initialize by showing the current books section
    sections["current"].style.display = "block";
});
