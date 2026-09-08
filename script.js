//your JS code here. If required.
const codes= document.querySelectorAll(".code")
codes[0].focus()
codes.forEach((code, index) =>{
	code.addEventListener("input",() =>{
		if (code.value && index < codes.length - 1){
			codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            e.preventDefault();
			if (index > 0) {
                codes[index - 1].value = "";
                codes[index - 1].focus();
            } else {
                code.value = "";
            }
        }
    });
});