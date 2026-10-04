function toggleLanguage() {
    const currentLanguage = document.documentElement.lang;

    if (currentLanguage === "fr") {
        document.documentElement.lang = "en";

        alert(
            "English version is being prepared. The complete bilingual system will be activated in the next step."
        );
    } else {
        document.documentElement.lang = "fr";

        alert(
            "La version française est sélectionnée."
        );
    }
}
