
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    let textInput = document.getElementById("textInput");
    let dateInput = document.getElementById("dateInput");
    let textarea = document.getElementById("textarea");
    let tasks = document.getElementById("tasks");
    let add = document.getElementById("add");

    form.addEventListener("submit", function (e) {
        e.preventDefault();


        const taskTitle = textInput.value.trim();
        const dueDate = dateInput.value;
        const description = textarea.value.trim();

        if (!taskTitle) {
            showError("Task Title can not be empty", form);
            return;
        }
        if (!dueDate) {
            showError("Please choose date", form);
            return;
        }
        if (!description) {
            showError("Please enter some information", form);
            return;
        }

        axios
            .post("/api/user/to-do", { taskTitle, dueDate, description })
            .then(function (response) {
                alert("Task has been added successfully");
                location.href = "/user/to-do";
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
    
    let resetForm = () => {
        textInput.value = "";
        dateInput.value = "";
        textarea.value = "";
    };
});


function showError(message, form) {
    let msg = document.getElementById("msg");
    if (message) {
        msg.innerHTML = message
    }
}


