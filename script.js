// Регулярний вираз для перевірки ідентифікатора
let userPattern = /^[a-zA-Z0-9]{5,20}$/;

// Регулярний вираз для перевірки номера голосу
let numberPattern = /^[1-9]$|^10$/;

// Змінні для підрахунку голосів
let votes = {
    HTML: 0,
    CSS: 0,
    JavaScript: 0,
    "C++": 0
};

// Функція голосування
function vote() {

    // Отримуємо введені дані
    let userId = document.getElementById("userId").value;
    let voteNumber = document.getElementById("voteNumber").value;

    // Отримуємо елементи для повідомлень
    let userError = document.getElementById("userError");
    let numberError = document.getElementById("numberError");

    // Очищаємо попередні повідомлення
    userError.textContent = "";
    numberError.textContent = "";

    let valid = true;

    // Перевіряємо ідентифікатор користувача
    if (!userPattern.test(userId)) {
        userError.textContent =
            "Ідентифікатор повинен містити 5-20 букв або цифр!";
        valid = false;
    }

    // Перевіряємо номер голосу
    if (!numberPattern.test(voteNumber)) {
        numberError.textContent =
            "Введіть ціле число від 1 до 10!";
        valid = false;
    }

    // Якщо дані неправильні, зупиняємо голосування
    if (!valid) {
        return;
    }

    // Отримуємо checkbox
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("javascript");
    let cpp = document.getElementById("cpp");

    let confirm = document.getElementById("confirm");

    // Перевіряємо підтвердження голосу
    if (!confirm.checked) {
        alert("Підтвердіть свій голос!");
        return;
    }

    // Перевіряємо вибір варіантів
    if (!html.checked && !css.checked &&
        !js.checked && !cpp.checked) {

        alert("Оберіть хоча б один варіант!");
        return;
    }

    // Підраховуємо голоси
    if (html.checked) {
        votes.HTML++;
    }

    if (css.checked) {
        votes.CSS++;
    }

    if (js.checked) {
        votes.JavaScript++;
    }

    if (cpp.checked) {
        votes["C++"]++;
    }

    // Виводимо результати
    document.getElementById("result").innerHTML =
        "<h3>Результати голосування:</h3>" +
        "Користувач: " + userId + "<br>" +
        "Номер голосу: " + voteNumber + "<br><br>" +
        "HTML: " + votes.HTML + "<br>" +
        "CSS: " + votes.CSS + "<br>" +
        "JavaScript: " + votes.JavaScript + "<br>" +
        "C++: " + votes["C++"];

    // Очищаємо поля після голосування
    document.getElementById("userId").value = "";
    document.getElementById("voteNumber").value = "";

    html.checked = false;
    css.checked = false;
    js.checked = false;
    cpp.checked = false;
    confirm.checked = false;
}