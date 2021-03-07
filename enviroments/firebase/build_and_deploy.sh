## !/usr/bin/env bash
set -e
env=$1
env=${env:-"dev"}
src=sources
cwd=$(realpath $(dirname $0))
project_root=$(git rev-parse --show-toplevel)

cd ../tuning-front
./build.sh "${env}"
cd ${cwd}

echo "deploy to ${env}"
firebase deploy --project ${env}

rm -rf "${cwd}/public/"
