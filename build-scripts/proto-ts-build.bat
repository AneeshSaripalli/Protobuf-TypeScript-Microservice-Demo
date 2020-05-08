@echo off

@rem VARS
set BASE_DIR=%cd%

set PROTOC_DIR=.\dep\protoc\protoc-3.11.4-win64\bin

set PROTOS_ROOT=protobufs


set OUT_DIR=compiled
set PROTOS=proto

set PROCTOC_GEN_TS_PATH=.\node_modules\.bin\protoc-gen-ts.cmd

cd "%BASE_DIR%"

%PROTOC_DIR%\protoc.exe --proto_path=src/protobufs/proto ^
    --plugin=protoc-gen-ts=%PROCTOC_GEN_TS_PATH% ^
    --js_out=import_style=commonjs,binary:"%BASE_DIR%/src/protobufs/compiled" ^
    --ts_out="%BASE_DIR%/src/protobufs/compiled" ^
    src/protobufs/proto/Test.proto
