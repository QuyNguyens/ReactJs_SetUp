module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    plugins: ['react-refresh'],
    rules: {
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
    },
};
