window.onload = function() {
    // Disable right click
    document.addEventListener("contextmenu", event => event.preventDefault());

    continueElement = document.getElementsByClassName("continue")[0];
    continueElement.addEventListener("click", function() {
        hideStoryElements();
        removeBackgroundBlur();
        showEnigma();
    })

    function hideStoryElements() {
        document.getElementsByClassName("hacker_name_and_data_found")[0].style.display = "none";
        document.getElementsByClassName("not_everything_got")[0].style.display = "none";
        document.getElementsByClassName("informations_place")[0].style.display = "none";
        document.getElementsByClassName("next_step")[0].style.display = "none";
        continueElement.style.display = "none";
    }

    function removeBackgroundBlur() {
        document.getElementsByTagName("html")[0].style.backgroundImage = "url('res/computer_jefferson_smith_identity_file_hacking_result.jpg')";
    }

    function showEnigma() {
        document.getElementsByClassName("enigma")[0].style.display = "block";
    }
}