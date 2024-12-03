#!/usr/bin/sh

#Since emcc is such a pain in the ass to compile, I've taken to writing compilation instructions
# inside of a bash script so I don't have to go back and re-remember what all has to be done to make this work correctly

# For future reference:
# EXPORTED_FUCTIONS is for C functions that you want to be accessible from your client-side JS code
# Anything not added here can still be accessed *by those functions you exported* so there's no need to
# import everything. That being said, malloc, free, and any other memory-management stuff you might need to do
# within your client-side JS might still be useful.
#
# EXPORT_NAME is for giving your... sort of entry point into your WASM a name. Otherwise it defaults to
# ...something (Don't remember what, don't feel like checking) and so manually setting EXPORT_NAME can be helpful for
# readability
#
# EXPORT_RUNTIME_METHODS is for ENSCRIPTEN runtime utility functions. Basically stuff made by enscripten to facilitate communication
# between JS and WASM. We mainly need cwrap right now, but ccall might've also been necessary if we were doing something other than fcking
# with pointers.... maybe. There's some others like getValue, setValue, and addFunction too. But we only need cwrap for right now, I guess
#
# and in this case we apparently need to allow memory growth because audio files are kind of big...

emcc main.c file_lib.c wav.c -s EXPORTED_FUNCTIONS='["_reverseWav", "_malloc", "_free"]' \
-s MODULARIZE=1 -s EXPORT_NAME="createWavReverser" -o wav_reverser.js -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
-s ALLOW_MEMORY_GROWTH=1
