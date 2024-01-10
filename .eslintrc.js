module.exports = {
    'plugins': [ '@stylistic' ],
    'env':     {
        'browser':  true,
        'commonjs': true,
        'es2021':   true,
    },
    'extends':   'eslint:recommended',
    'overrides': [
        {
            'env':   { 'node': true },
            'files': [ '.eslintrc.{js,cjs}' ],
        },
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType':  'module',
    },
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style':                        [ 'error', 'unix' ],
        'quotes':                                 [ 'error', 'single' ],
        'semi':                                   [ 'error', 'always' ],
        '@stylistic/comma-spacing':               [ 'error' ],
        '@stylistic/no-multiple-empty-lines':     [ 'error', { 'max': 1, 'maxEOF': 0 } ],
        '@stylistic/array-bracket-newline':       [ 'error' ],
        '@stylistic/comma-dangle':                [ 'error', 'always-multiline' ],
        '@stylistic/object-curly-spacing':        [ 'error', 'always' ],
        '@stylistic/object-curly-newline':        [ 'error', { 'multiline': true } ],
        '@stylistic/no-trailing-spaces':          [ 'error' ],
        '@stylistic/space-before-function-paren': [ 'error', 'never' ],
        '@stylistic/block-spacing':               [ 'error', 'always' ],
        '@stylistic/no-multi-spaces':             [ 'error' ],
        '@stylistic/key-spacing':                 [ 'error', { 'align': 'value' } ],
        '@stylistic/array-bracket-spacing':       [ 'error', 'always' ],
        'brace-style':                            [ 'error' ],
        '@stylistic/space-infix-ops':             [ 'error' ],
        '@stylistic/semi-spacing':                [ 'error' ],
        '@stylistic/space-in-parens':             [ 'error', 'always' ],
        '@stylistic/function-paren-newline':      [ 'error', 'multiline-arguments' ],
        'camelcase':                              [
            'error', {
                'ignoreDestructuring': true,
                'ignoreImports':       true,
            },
        ],
        'func-style':                       [ 'error', 'declaration', { 'allowArrowFunctions': true } ],
        '@stylistic/array-element-newline': [
            'error', {
                'ArrayExpression': 'consistent',
                'ArrayPattern':    { 'minItems': 3 },
            },
        ],
        '@stylistic/keyword-spacing': [
            'error', {
                'before': true,
                'after':  true,
            },
        ],
    },
};
