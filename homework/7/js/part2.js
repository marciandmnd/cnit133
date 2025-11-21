const form = $('#characterCountForm');
const longContent = $('#longContent');
const searchChar = $('#searchChar');
const result = $('#result');
const clear = $('#clear');

$(document).ready(() => {
    form.on('submit', (e) => {
        e.preventDefault();
        searchAndCount();
    });

    clear.on('click', (e) => {
        result.html('');
    });
});

function searchAndCount() {
    const content = longContent.val().toLowerCase();
    const char = searchChar.val().toLowerCase();
    let count = 0;

    for (let i = 0; i < content.length; i++) {
        if (content[i] === char) {
            count++;
        }
    }

    if (count > 0) {
        result.html(`The character '${searchChar.val()}' shows up ${count} time(s) in the content.`);
    }
    else {
        result.html('');
        const newWindow = window.open("", "window", "width=300,height=100");
        newWindow.opener = null;

        if (newWindow) {
            const newDoc = newWindow.document;
            const paragraph = newDoc.createElement("p");
            paragraph.textContent = `Search character '${char}' not found in the content you typed`;
            newDoc.body.appendChild(paragraph);

            const button = newDoc.createElement("button");
            button.textContent = "Close Window";
            button.addEventListener('click', () => {
                newWindow.close();
            });

            newDoc.body.appendChild(button);
        } else {
            alert("Pop-up blocked! Please allow pop-ups for this site to open the new document.");
        }

    }
}