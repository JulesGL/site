document.addEventListener('DOMContentLoaded', function () {
    var categorySelect = document.getElementById('book-category');
    var bookSections = document.querySelectorAll('.book-section');
    var bookSectionTitles = document.querySelectorAll('.book-section-title');

    function hideAllSections() {
        bookSections.forEach(function (section) {
            section.style.display = 'none';
        });

        bookSectionTitles.forEach(function (title) {
            title.style.display = 'none';
        });
    }

    categorySelect.addEventListener('change', function () {
        var selectedCategory = categorySelect.value;
        hideAllSections();

        var selectedSection = document.getElementById(selectedCategory + '-books');
        var selectedTitle = document.getElementById(selectedCategory + '-books-title');
        if (selectedSection && selectedTitle) {
            selectedSection.style.display = 'block';
            selectedTitle.style.display = 'block';
        }
    });

    // Masquer toutes les sections sauf celle sélectionnée par défaut
    hideAllSections();
    var defaultCategory = categorySelect.value;
    var defaultSection = document.getElementById(defaultCategory + '-books');
    var defaultTitle = document.getElementById(defaultCategory + '-books-title');
    if (defaultSection && defaultTitle) {
        defaultSection.style.display = 'block';
        defaultTitle.style.display = 'block';
    }
});