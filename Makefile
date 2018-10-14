SRC = $(wildcard src/*.js)
DST = $(SRC:src/%.js=docs/%.js)

.PHONY: all
all: $(DST)

.PHONY: clean
clean:
	rm -f docs/*.js

.PHONY: tidy
tidy:
	npx prettier --write src/*.js

.PHONY: rebuild
rebuild:
	make clean
	make

node_modules/:
	npm ci

docs/%.js: src/%.js .babelrc node_modules/
	npx babel $< -o $@

