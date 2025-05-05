📦 Initialisation du projet
mkdir social-saas-app && cd social-saas-app
npm init -y
npm install --save-dev typescript ts-node @types/node
npx tsc --init
🍀 Installation de Cucumber
npm install --save-dev @cucumber/cucumber
🧪 Lancement des tests
npx cucumber-js --require-module ts-node/register
Installation des dépendances
TypeScript et gestion de chemins :
npm install -D typescript ts-node
npm install -D @types/node
TDD avec Jest :
npm install -D jest ts-jest @types/jest
npx ts-jest config:init
BDD avec Cucumber :
npm install -D @cucumber/cucumber
npm install -D tsx

