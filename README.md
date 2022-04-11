# 0x00. ES6 Basics

# **0x00. ES6 Basics**

# **Concepts**

*For this project, students are expected to look at these concepts:*

- [Modern Javascript](https://intranet.hbtn.io/concepts/541)
- [Software Linter](https://intranet.hbtn.io/concepts/542)

![https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220411%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220411T134056Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3ad27d4cc4bedb267f3dcbc57a212dd12b4a72eb8bf5e69589781d1dd7aa5470](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220411%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220411T134056Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3ad27d4cc4bedb267f3dcbc57a212dd12b4a72eb8bf5e69589781d1dd7aa5470)

# **Resources**

**Read or watch**:

- [ECMAScript 6 - ECMAScript 2015](https://intranet.hbtn.io/rltoken/TCja4539uK-aM7PeJO7b3g)
- [Statements and declarations](https://intranet.hbtn.io/rltoken/WhZFQkTl7jjHKbolvKMWPQ)
- [Arrow functions](https://intranet.hbtn.io/rltoken/aOgghxMow79j1NxlaQ6T9g)
- [Default parameters](https://intranet.hbtn.io/rltoken/5DcDBQM8iItIZFFlVtehTQ)
- [Rest parameter](https://intranet.hbtn.io/rltoken/e-bvzp0l6c0-dpHMF8zznw)
- [Javascript ES6 — Iterables and Iterators](https://intranet.hbtn.io/rltoken/bVGVMvBh5lUrApejLy3x2g)

# **Learning Objectives**

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/3vZrAMfCgf60W4NqP4RdJw), **without the help of Google**:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

# **Requirements**

# **General**

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the [Jest Testing Framework](https://intranet.hbtn.io/rltoken/-vHHhukhYFxZrd1G0uD3dw)
- Your code will be analyzed using the linter [ESLint](https://intranet.hbtn.io/rltoken/SXR8c_xOD3tm6NcBkk09dQ) along with specific rules that we’ll provide
- All of your functions must be exported

# **Setup**

# **Install NodeJS 12.11.x**

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

```

# **Install Jest, Babel, and ESLint**

in your project directory:

- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint using: `npm install --save-dev eslint`

# **Configuration files**

# **`package.json`**

    
    ```
    
    {
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "dev": "npx babel-node",
        "test": "jest",
        "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
      },
      "devDependencies": {
        "@babel/core": "^7.6.0",
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
      }
    }
    
    ```
    

# **`babel.config.js`**

    
    ```
    
    module.exports = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };
    
    ```
    

# **`.eslintrc.js`**

    
    ```
    
    module.exports = {
      env: {
        browser: false,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:jest/all',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['jest'],
      rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides:[
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };
    
    ```
    

# **Finally…**

Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.