module.exports = function (api) {
  api.cache(true);
  return {
    "presets": [`babel-preset-expo`],
    "plugins": [
      [
        `module-resolver`,
        {
          "alias": {
            "utilities": `./utilities`,
            "assets": `./assets`,
            "components": `./components`,
            "state": `./state`,
            "themes": `./themes`,
            "sections": `./sections`,
            "hooks": `./hooks`,
            "types": `./types`,
            "requests": `./requests`
          }
        }
      ]
    ]
  };
};
