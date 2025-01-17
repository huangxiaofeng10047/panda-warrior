module.exports = {
    "env": {
    browser: true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["standard-with-typescript",  "plugin:prettier/recommended",
    "prettier"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "prettier/prettier": 2
    }
}
