@echo on

@rem VARS
set BASE_DIR=%cd%
set PROTOC_DIR=.\\dep\\protoc\\protoc-3.11.4-win64\\bin
set OUT_DIR=.\\protobufs\\compiled
set PROTOS=.\\protobufs\proto\\
set PROCTOC_GEN_TS_PATH=.\\node_modules\\.bin\\protoc-gen-ts.cmd

pushd %BASE_DIR%

%PROTOC_DIR%\\protoc.exe --plugin="protoc-gen-ts=%PROCTOC_GEN_TS_PATH%" --js_out="import_style=commonjs,binary:%OUT_DIR%" --ts_out=%OUT_DIR% %PROTOS%\\Test.proto

popd
