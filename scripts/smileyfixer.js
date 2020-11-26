// this file is based on https://github.com/richq/smileyfixer/blob/e5062cdb33f3c99d63dc332057488fd913e03089/chrome/content/smileyfixer.js
// Apache version 2.0 license

/* SmileyFixer namespace */

if (typeof SmileyFixer == "undefined") {
    var SmileyFixer = {};

    SmileyFixer.fixSpan = function(span, mapping) {
        var origSpan = span;
        if (span.firstChild.tagName === "SPAN") {
            /* crazy list thing */
            span = span.firstChild;
        }
        var compareTo = span.firstChild.data;
        var result = '';
        var found = false;
        for (var i = 0 ; i < compareTo.length; i++) {
            var txt = compareTo.charAt(i);
            var replacement = mapping[txt]
            if (replacement) {
                result += replacement;
                found = true;
            } else {
                result += txt;
            }
        }
        if (! found) {
            return;
        }
        span.firstChild.data = result;
        origSpan.style.fontFamily = "inherit";
        origSpan.style.fontSize = "inherit";
        /* show in red if debugging */
        if (SmileyFixer.prefs["debug"])
            origSpan.style.backgroundColor = "#ff0000";
    };

    SmileyFixer.doFixups = function(contentDocument) {
        var mapping = {
            'J': 'smiley',
            'K': 'neutral',
            'L': 'unsmiley',
            'N': 'skull',
            'M': 'bomba',
            'à': 'longarrow',
            'è': 'arrow',
            'ß': 'larrow',
            '·': 'blob',
            'n': 'square',
            'ó': 'leftright',
            'Ø': 'toplightarrow',
            'P': 'tree'
        };
        for (var key in mapping) {
            mapping[key] = SmileyFixer.prefs[mapping[key]];
        }

        var spans = contentDocument.getElementsByTagName("span");
        for (var i = 0; i < spans.length; i++) {
            try {
                var span = spans[i];
                if (span.style.fontFamily === "Wingdings" ||
		    span.style.fontFamily === "Webdings" ||
                    span.style.fontFamily === "Symbol") {
                    SmileyFixer.fixSpan(span, mapping);
                }
            }
            catch (e) {
            }
        }
        var fonts = contentDocument.getElementsByTagName("font");
        for (var i = 0; i < fonts.length; i++) {
            try {
                var font = fonts[i];
                var face = font.getAttribute('face');
                if (face === "Wingdings" ||
		    face === "Webdings" ||
                    face === "Symbol") {
                    SmileyFixer.fixSpan(font, mapping);
                }
            }
            catch (e) {
            }
        }
    };

    SmileyFixer.init = function() {
        SmileyFixer.doFixups(document);
    };

}

SmileyFixer.prefs = options;
SmileyFixer.init();