/* SPDX-License-Identifier: MPL-2.0 */

// this file is based on https://github.com/Qeole/colorediffs/blob/9fa2c8213c899fe097e72b3ae369fa5807bb6b5a/options/save-restore.js

function saveOptions(e) {
    e.preventDefault();

    let newOptions = {};
    OptionsList.forEach(option => {
        newOptions[option] = document.getElementById(option).value;
    });
    newOptions["debug"] = document.getElementById("debug").checked;

    return browser.storage.local.set(newOptions);
}

function saveEmojis() {
    let newOptions = {};
    EmojisList.forEach(option => {
        newOptions[option] = Emojis[option];
    });
    return browser.storage.local.set(newOptions);
}

function restoreOption(id, useEmojis) {
    return browser.storage.local.get(id).then((res) => {
        let element = document.getElementById(id);
        if (element.type && element.type == "checkbox")
            element.checked = res[id] || DefaultOptions[id];
        else
            element.value = res[id] || DefaultOptions[id];
    }, defaultError);
}

async function restoreAllOptions() {
	await restoreOption("unsmiley");
	await restoreOption("neutral");
	await restoreOption("smiley");
	await restoreOption("skull");
	await restoreOption("arrow");
	await restoreOption("larrow");
	await restoreOption("longarrow");
	await restoreOption("blob");
	await restoreOption("bomba");
	await restoreOption("square");
	await restoreOption("toplightarrow");
	await restoreOption("leftright");
	await restoreOption("tree");
	await restoreOption("debug");
}

function resetToDefault() {
    return browser.storage.local.remove(OptionsList).then(() => {
        restoreAllOptions();
    });
}

function resetToEmojis() {
    return browser.storage.local.remove(EmojisList).then(() => {
        saveEmojis();
        restoreAllOptions();
    });
}
