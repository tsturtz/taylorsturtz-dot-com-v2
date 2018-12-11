module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}

// from interact...
// "rules": {
//   "import/no-unresolved": 0,
//   "new-cap": 0,
//   "semi": 0,
//   "global-require": 0,
//   "no-underscore-dangle": 0,
//   "arrow-body-style": 0,
//   "no-console": 0,
//   "react/forbid-prop-types": 0,
//   "jsx-a11y/href-no-hash": 0,
//   "import/prefer-default-export": 0,
//   "react/prop-types": 0,
//   "react/jsx-filename-extension": 0,
//   "react/no-array-index-key": false,
//   "comma-dangle": ["error", "always-multiline"],
//   "max-len": [2, 200, 2],
//   "no-tabs": 0,
//   "react/no-unescaped-entities": 0,
//   "import/extensions": 0,
//   "import/no-extraneous-dependencies": 0,
//   "function-paren-newline": 0,
//   "react/require-default-props": 0,
//   "indent": 0,
//   "arrow-parens": 0,
//   "jsx-a11y/anchor-is-valid": [ "error", {
//       "components": [ "Link" ],
//       "specialLink": [ "to", "hrefLeft", "hrefRight" ],
//       "aspects": [ "noHref", "invalidHref", "preferButton" ]
//     }
//   ],
//   "jsx-a11y/label-has-for": false,
//   "object-curly-newline": 0,
//   "no-plusplus": 0,
//   "prefer-destructuring": 0,
//   "no-case-declarations":"off",
//   "react/no-did-update-set-state": 0,
//   "react/no-did-mount-set-state": 0,
//   "no-param-reassign": 0,
//   "import/no-named-as-default": 0,
//   "jsx-a11y/click-events-have-key-events": 0,
// }