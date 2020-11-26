/* SPDX-License-Identifier: MPL-2.0 */

// this file is based on https://github.com/Qeole/colorediffs/blob/9fa2c8213c899fe097e72b3ae369fa5807bb6b5a/options/defaults.js
//                   and https://github.com/richq/smileyfixer/blob/e5062cdb33f3c99d63dc332057488fd913e03089/defaults/preferences/prefs.js

const DefaultOptions = {
    unsmiley: "☹",
    neutral: ":-|",
    smiley: "☺",
    skull: "☠",
    arrow: "➔",
    larrow: "←",
    longarrow: "→",
    blob: "•",
    bomba: "●",
    square: "■",
    toplightarrow: "➢",
    leftright: "⬄",
    tree: "-",
    debug: false
}

const Emojis = {
    unsmiley: "☹️",
    neutral: "😐",
    smiley: "😀",
    skull: "💀",
    arrow: "➡️",
    larrow: "⬅️",
    bomba: "💣",
    square: "◼️",
    leftright: "↔️",
    tree: "🌲"
}

const OptionsList = Object.keys(DefaultOptions);
const EmojisList = Object.keys(Emojis);

function defaultError(error) {
    console.error("[smileyfixer]: Error:", error);
}
