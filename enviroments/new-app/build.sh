## !/usr/bin/env bash
set -e
env=$1
env=${env:-"dev"}
echo "build ${env} mode"
src=sources
cwd=$(realpath $(dirname $0))
project_root=$(git rev-parse --show-toplevel)

rm -rf "${cwd}/${src}"
echo "copy project.."
cp -R "${project_root}/new-app" "${cwd}/${src}"
cd "${cwd}/${src}"
rm -rf dist/
ls src/environments

echo "build project.."
npm install -g @angular/cli@11.0.1
npm install
ng build -c "${env}"

echo "copy output to firebase public.."
cp -R "${cwd}/${src}/dist/new-app/" "${project_root}/enviroments/firebase/public"/
rm -rf "${cwd}/${src}"
