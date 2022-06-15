window.onload = function () {
    password = reverseString(new TextDecoder().decode(new Uint8Array([100, 69, 82, 117, 67, 101, 115])));
    // Disable right click
    document.addEventListener("contextmenu", event => event.preventDefault());

    startElement = document.getElementsByClassName("start")[0];
    startElement.style.display = "block";

    startElement.addEventListener("click", function() {
        showHackerScreen();
        showPasswordMessage();
    });

    startElement.addEventListener("pointerup", function() {
        showHackerScreen();
        showPasswordMessage();
    });

    passwordElement = document.getElementsByClassName("password")[0];

    passwordElement.addEventListener("focus", function() {
        passwordElement.type = "password";
    });

    passwordElement.addEventListener("input", function() {
        passwordElement.type = "password";
    });

    passwordElement.addEventListener("keyup", function(event) {
        event.preventDefault;
        if (event.key == 'Enter') {
            if (passwordElement.value == password) {
                showSuccessAccessAndNextStep();
                return;
            }

            passwordElement.classList.remove("password_invalid");
            // Workaround to run again the animation
            setTimeout(function() {
                passwordElement.classList.add("password_invalid");
            }, 1);
            setTimeout(function() {
                document.getElementsByClassName("enigma")[0].style.display = "block";;
            }, 601);
        }
    })

    function showHackerScreen() {
        startElement.style.display = "none";
        document.getElementsByTagName("html")[0].style.backgroundImage = "url('res/computer_jefferson_smith_blur.jpg')";
    }

    function showPasswordMessage() {
        document.getElementsByClassName("password_message")[0].style.display = "block";
        passwordElement.style.display = "block";
        passwordElement.focus();
    }

    function showSuccessAccessAndNextStep() {
        passwordElement.style.borderColor = "green";
        setTimeout(function() {
            document.getElementsByClassName("password_message")[0].style.display = "none";
            passwordElement.style.display = "none";
            document.getElementsByClassName("enigma")[0].style.display = "none";
            document.getElementsByClassName("congrats_and_next_step")[0].style.display = "block";
        }, 1000)
    }

    function reverseString(stringToReverse) {
        stringReversed = "";
        for (var i = stringToReverse.length - 1; i >= 0; --i) {
            stringReversed += stringToReverse[i];
        }
        return stringReversed;
    }
};
