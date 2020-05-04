<div align="center">
  <h1>sivar-utils 🇸🇻</h1>

  <p>TS/JS utils para el desarrollo de sistemas salvadoreños (Validacion de docs DUI, NIT, etc...)</p>
</div>

[![Version][version-badge]][package]
[![Build][build-badge]][build]
[![Install Size][size-badge]][package-size]
[![Downloads][downloads-badge]][npmcharts]
[![PRs Welcome][prs-badge]][prs]
[![Commitizen friendly][cz-badge]][cz]
[![MIT License][license-badge]][license]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Getting Started

### Installation

```
npm install --save sivar-utils
```

### Usage

- #### isDUI

```ts
import { isDUI } from 'sivar-utils';

const str = 'test';
const fakeDUI = '00000000-0';
const validDUI = '02495046-3'; // DISCLAIMER: taken from Google

isDUI(str); // false
isDUI(fakeDUI); // false
isDUI(validDUI); // true
```

- #### isNIT

```ts
import { isNIT } from 'sivar-utils';

const str = 'test';
const fakeNIT = '0000-000000-000-0';
const validNIT = '0614-051286-129-4'; // DISCLAIMER: taken from Google

isNIT(str); // false
isNIT(fakeNIT); // false
isNIT(validNIT); // true
```

## Contributing

### How to contribute?

This is a `commitizen friendly` repository, so instead of creating commits using `git commit`, please use our custom CLI by running:

```sh
npm run cz
```

#### Formatting & Linting

Make sure you have installed the following plugins on your Code Editor

- [ESLint][url-eslint]
- [Prettier][url-prettier]

## License

MIT © [jonathanpalma](https://github.com/jonathanpalma)

[downloads-badge]: https://img.shields.io/npm/dm/sivar-utils.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/sivar-utils.svg?style=flat-square
[license]: https://github.com/jonathanpalma/sivar-utils/blob/master/LICENSE
[npmcharts]: http://npmcharts.com/compare/sivar-utils
[package-size]: https://packagephobia.now.sh/result?p=sivar-utils
[package]: https://www.npmjs.com/package/sivar-utils
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[build-badge]: https://img.shields.io/circleci/build/gh/jonathanpalma/sivar-utils?style=flat-square
[build]: https://circleci.com/gh/jonathanpalma/sivar-utils
[cz-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[cz]: http://commitizen.github.io/cz-cli/
[size-badge]: https://flat.badgen.net/packagephobia/install/sivar-utils
[version-badge]: https://img.shields.io/npm/v/sivar-utils.svg?style=flat-square
[github-watch-badge]: https://img.shields.io/github/watchers/jonathanpalma/sivar-utils.svg?style=social
[github-watch]: https://github.com/jonathanpalma/sivar-utils/watchers
[github-star-badge]: https://img.shields.io/github/stars/jonathanpalma/sivar-utils.svg?style=social
[github-star]: https://github.com/jonathanpalma/sivar-utils/stargazers
[url-eslint]: https://eslint.org/
[url-prettier]: https://prettier.io/
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20sivar-utils!%20https://github.com/jonathanpalma/sivar-utils
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/jonathanpalma/sivar-utils.svg?style=social
