VERSION := $(shell cat manifest.json | jq '.version')

dist_EXTRA :=   ./manifest.json \
		./smileyfixer.png \
		./scripts/background.js \
		./scripts/i18n.js \
		./scripts/smileyfixer.js \
		./options/defaults.js \
		./options/listeners.js \
		./options/options.html \
		./options/save-restore.js \
		./_locales/en/messages.json \
		./_locales/de/messages.json \
		./_locales/es/messages.json

.PHONY: all

all: smileyfixer-$(VERSION).xpi

smileyfixer-$(VERSION).xpi: $(dist_EXTRA)
	zip -r smileyfixer-$(VERSION).xpi $^
