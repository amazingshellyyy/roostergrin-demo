cd ./roostergrin
npm run build
sleep 5s
git add .
git commit -m "create docs and ready for deploy"
git push origin master
echo ">> frontend deployed successfully"
echo "|| client-> https://amazingshellyyy.com/startkicker"
git add .
git commit -m "deployed"
git push origin master