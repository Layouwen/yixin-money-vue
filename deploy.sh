set -e

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@gitee.com:layouwen/yixin-money-vue-website.git master

cd -