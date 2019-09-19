VERSION := $(shell cat manifest.json | jq '.version')

dist_EXTRA :=   ./manifest.json \
		./chrome.manifest \
		./defaults/preferences/prefs.js \
		./chrome/content/options.xul \
		./chrome/content/options.js \
		./chrome/content/smileyfixer.png \
		./chrome/content/messenger-overlay.xul \
		./chrome/content/messenger-overlay.js \
		./chrome/content/compose-overlay.xul \
		./chrome/content/compose-overlay.js \
		./chrome/content/smileyfixer.js \
		./locale/en-US/options.dtd \
		./locale/de-DE/options.dtd \
		./locale/es-ES/options.dtd

.PHONY: all

all: smileyfixer-$(VERSION).xpi

smileyfixer-$(VERSION).xpi: $(dist_EXTRA)
	zip -r smileyfixer-$(VERSION).xpi $^
