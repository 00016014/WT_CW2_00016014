document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let textInput = document.getElementById("textInput").value;
        let dateInput = document.getElementById("dateInput").value;
        let textarea = document.getElementById("textarea").value;
        let tasks = document.getElementById("tasks");
        let add = document.getElementById("add");

        if (!textInput) {
            showError("Task Title can not be empty", form);
            return;
        }
        if (!dateInput) {
            showError("Please choose date", form);
            return;
        }
        if (!textarea) {
            showError("Please enter some information", form);
            return;
        }

        axios
            .post("/api/task/to-do", { textInput, dateInput, textarea })
            .then(function (response) {
                alert("Task has been added successfully");
                location.href = "/task/to-do";
            })
            .catch(function (error) {
                if (error.response && error.response.data) {
                    showError(
                        error.response.data.errors
                            .map((error) => error.msg)
                            .join(" "),
                        form
                    );
                } else {
                    showError("An error occurred. Please try again.", form);
                }
            });
    });
});

function showError(message, form) {
    let errorElement = document.getElementById("error");
    if (!errorElement) {
        errorElement = document.createElement("div");
        errorElement.id = "error";
        errorElement.style.color = "red";
    }
    errorElement.textContent = message;
}