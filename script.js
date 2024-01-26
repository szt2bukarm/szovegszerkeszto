
let file;
function loadtxt() {
    file = document.querySelector('.text-editor__buttons--open').files[0]
    if ((file.name).slice((file.name).length - 3) != 'txt') {
        document.querySelector('.text-editor__error-text').innerText = 'Csak txt fájl nyitható meg!'
        setTimeout(() => {
            document.querySelector('.text-editor__error-text').innerText = ''
        }, 4000);
        return;
    }    
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function() {
        const text = reader.result;
        document.querySelector('.inputfield').innerText = text
        document.querySelector('.filename').value = (file.name).slice(0,(file.name).length - 4)
    };
}

function savetxt() {
    if (!file) {
        document.querySelector('.text-editor__error-text').innerText = 'Nincs fájl megnyitva!'
        setTimeout(() => {
            document.querySelector('.text-editor__error-text').innerText = ''
        }, 4000);
        return;
    };
    if (document.querySelector('.filename').value == "") {
        document.querySelector('.text-editor__error-text').innerText = 'Névtelen fájl nem menthető!'
        setTimeout(() => {
            document.querySelector('.text-editor__error-text').innerText = ''
        }, 4000);
        return;
    }
    const inputfield = document.querySelector('.inputfield').value;
    console.log(inputfield);    
    const blob = new Blob([inputfield], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = document.querySelector('.filename').value + '.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}