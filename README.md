# Coinfer SDK

## Steps to generate SDKs

```
uv run python main.py
```

This script will:

1. download OpenAPI server API definition file from "https://dev.coinfer.ai/openapi.json"
2. run `openapi-generator-cli`. It has two inputs:
    1. the `openapi.json` file from step 1
    2. the template files in `<target language>/template` folder
3. step 2 will save generated sdk files into `<target language>/sdk` folder
4. copy everything from `<target language>/patch` to `<target language>/sdk`

## Directory structure

```
├── README.md
├── julia  				// stuffs related with julia
│   ├── patch				// the patch files [1]
│   ├── sdk				// the generated sdk files
│   ├── template			// the template files used to generate sdk
│   └── test_sdk			// test scripts
├── main.py				// the script used to generate sdks
├── pyproject.toml			// python project file
├── python				// stuffs related with python. The meaning of subdirs is similar to julia directory.
│   ├── patch
│   ├── sdk
│   ├── template
│   └── test_sdk 
├── test_data  				// the data used by test scripts
│   └── simple_model			// a simple model used in the test scripts
└── uv.lock				// dependencies lock file
```

## How to customize

1. Add new files by putting files to `<target language>/path` folder. It will be copied to sdk directory when building.
2. Modify files in `<target language>/template` folder. This is the templated used to generate the SDK code. It is written in a template language called [mustache](https://mustache.github.io/).

## Run test scripts

### python

```
cd python && PYTHONPATH=sdk python -m test_sdk.main
```

### Julia

```
cd julia/test_sdk && julia --project src/test_julia_sdk.jl
```
