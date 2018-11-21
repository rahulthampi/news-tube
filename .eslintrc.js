module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "globals": {
    "document": true,
    "window": true,
  },
  "rules": {
    "no-shadow": [0],
    "no-underscore-dangle": [0],
    "no-unused-expressions": [
        "error",
        {
            "allowTernary": true
        }
    ],
    "import/no-named-as-default": [0],
    "react/jsx-filename-extension": [0],
    "react/forbid-prop-types": [0],
    "react/prop-types": [0],
    "react/no-array-index-key": [0],
    "jsx-a11y/label-has-for": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/href-no-hash": [0],
  }
};
