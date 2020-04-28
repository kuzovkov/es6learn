```bash
sudo docker-compose build
sudo docker-compose up -d
sudo docker-compose exec app bash
cd app/public/es6
npm install

if got error "One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
               - webpack-cli (https://github.com/webpack/webpack-cli)
                 The original webpack full-featured CLI.
"
npm install -g webpack-cli

npm init

webpack

#if got error "compilation.mainTemplate.applyPluginsWaterfall is not a function"
npm i --save-dev html-webpack-plugin@

#for use Generators

npm install --save-dev babel-plugin-transform-runtime

```

add file `.babelrc` to root directory (там где package.json)

```json
{
  "plugins": [
    ["transform-runtime", {
      "polyfill": false,
      "regenerator": true
    }]
  ]
}
```

