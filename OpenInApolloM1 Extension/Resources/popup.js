window.addEventListener("DOMContentLoaded", (event) => {
    browser.storage.local.get((item) => {
        const automaticToggle = document.getElementById("enabled-toggle");

        var automaticObj = item.automaticObj;

        if (automaticObj == undefined) {
            automaticToggle.checked = true;
        } else {
            automaticToggle.checked = automaticObj.isAutomatic;
        }

        automaticToggle.addEventListener("change", (event) => {
            if (document.getElementById("enabled-toggle").checked) {
                let automaticObj = { isAutomatic: true };
                browser.storage.local.set({automaticObj});
            } else {
                let automaticObj = { isAutomatic: false };
                browser.storage.local.set({automaticObj});
            }
        });
    });
});
