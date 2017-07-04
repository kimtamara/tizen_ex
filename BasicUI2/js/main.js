window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');

        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    });
    
    var btn = document.createElement (('v' == '\v') ? '<input name="myName">' : 'input'); btn.name = 'myName';
    btn.type = 'button'; 
    btn.id = 'myUniqueID';
    btn.value = 'Дави!'; 
   
    document.getElementById ('myPlace').appendChild (btn);
    document.getElementById ('myElem').parentNode.insertBefore (btn, document.getElementById ('myElem'));
};