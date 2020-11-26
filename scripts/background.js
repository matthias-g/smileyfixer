/* SPDX-License-Identifier: MPL-2.0 */

// this file is based on https://github.com/Qeole/colorediffs/blob/9fa2c8213c899fe097e72b3ae369fa5807bb6b5a/scripts/background.js


var options = {};
var composeScriptsPromise;
var displayScriptsPromise;

function reloadOption(id) {
    return browser.storage.local.get(id).then((res) => {
        if (res[id] != undefined)
            options[id] = res[id];
        else
            options[id] = DefaultOptions[id];
    }, defaultError);
}

async function reloadAllOptions() {
    await reloadOption("unsmiley");
    await reloadOption("neutral");
    await reloadOption("smiley");
    await reloadOption("skull");
    await reloadOption("arrow");
    await reloadOption("larrow");
    await reloadOption("longarrow");
    await reloadOption("blob");
    await reloadOption("bomba");
    await reloadOption("square");
    await reloadOption("toplightarrow");
    await reloadOption("leftright");
    await reloadOption("tree");
    await reloadOption("debug");
}

function registerScripts() {
	let scripts = {
	    js: [
	    	{
                code: "var options = " + JSON.stringify(options) + ";",
            },
			{
				file: '/options/defaults.js'
			},
			{
				file: '/scripts/smileyfixer.js'
			}
		]
	};
	composeScriptsPromise = browser.composeScripts.register(scripts);
	displayScriptsPromise = browser.messageDisplayScripts.register(scripts);
}

async function unregisterScripts() {
    await composeScriptsPromise.then(script => script.unregister());
    await displayScriptsPromise.then(script => script.unregister());
}

async function reset() {
    await unregisterScripts();
    await init();
}

function init() {
    reloadAllOptions().then(registerScripts);
}

browser.storage.onChanged.addListener(reset);

init();
