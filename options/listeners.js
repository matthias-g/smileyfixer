/* SPDX-License-Identifier: MPL-2.0 */

// this file is based on https://github.com/Qeole/colorediffs/blob/9fa2c8213c899fe097e72b3ae369fa5807bb6b5a/options/listeners.js

document.addEventListener('DOMContentLoaded', () => {
	i18n.updateDocument();
    restoreAllOptions();
}, { once: true });

OptionsList.forEach((option) => {
    document.getElementById(option).addEventListener("change", (e) => {
        saveOptions(e);
    });
});

document.getElementById("reset").addEventListener("click", () => {
    resetToDefault();
});
document.getElementById("emojis").addEventListener("click", () => {
    resetToEmojis();
});