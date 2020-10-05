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

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

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
const alsoValidNIT = '06140512861294';

isNIT(str); // false
isNIT(fakeNIT); // false
isNIT(validNIT); // true
isNIT(alsoValidNIT); // true
```

- #### isMobilePhoneNumber

```ts
import { isMobilePhoneNumber } from 'sivar-utils';

const str = 'test';
const fakeMobilePhone = '9999-9999';
const validMobilePhone = '7071-1244'; // DISCLAIMER: taken from Google

isMobilePhoneNumber(str); // false
isMobilePhoneNumber(fakeMobilePhone); // false
isMobilePhoneNumber(validMobilePhone); // true
```

- #### isResidentialPhoneNumber

```ts
import { isResidentialPhoneNumber } from 'sivar-utils';

const str = 'test';
const fakeResidentialPhone = '5555-5555';
const validResidentialPhone = '2244-4777'; // DISCLAIMER: taken from Google

isResidentialPhoneNumber(str); // false
isResidentialPhoneNumber(fakeResidentialPhone); // false
isResidentialPhoneNumber(validResidentialPhone); // true
```

- #### isPhoneNumber

```ts
import { isPhoneNumber } from 'sivar-utils';

const str = 'test';
const fakePhone = '1234-5678';
const validPhone = '2591-3000'; /* or '7725-4747' */ // DISCLAIMER: taken from Google

isPhoneNumber(str); // false
isPhoneNumber(fakePhone); // false
isPhoneNumber(validPhone); // true
```

- #### isPassport

```ts
import { isPassport } from 'sivar-utils';

const str = 'test';
const fakePassport = '$03766021';
const validPassport = 'A12345678';

isPassport(str); // false
isPassport(fakePassport); // false
isPassport(validPassport); // true
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/alepaz"><img src="https://avatars0.githubusercontent.com/u/5847822?v=4" width="100px;" alt=""/><br /><sub><b>Alejandro Paz</b></sub></a><br /><a href="https://github.com/jonathanpalma/sivar-utils/commits?author=alepaz" title="Tests">⚠️</a> <a href="https://github.com/jonathanpalma/sivar-utils/commits?author=alepaz" title="Code">💻</a></td>
    <td align="center"><a href="http://monge1h.com"><img src="https://avatars1.githubusercontent.com/u/38824634?v=4" width="100px;" alt=""/><br /><sub><b>Jorge Monge</b></sub></a><br /><a href="https://github.com/jonathanpalma/sivar-utils/commits?author=Monge1h" title="Code">💻</a> <a href="https://github.com/jonathanpalma/sivar-utils/issues?q=author%3AMonge1h" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://ricardoerl.com"><img src="https://avatars1.githubusercontent.com/u/1808048?v=4" width="100px;" alt=""/><br /><sub><b>Ricardo Ramírez</b></sub></a><br /><a href="#ideas-ricardoerl" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/leosuncin"><img src="https://avatars1.githubusercontent.com/u/4307697?v=4" width="100px;" alt=""/><br /><sub><b>Jaime Leonardo Suncin Cruz</b></sub></a><br /><a href="https://github.com/jonathanpalma/sivar-utils/commits?author=leosuncin" title="Code">💻</a> <a href="https://github.com/jonathanpalma/sivar-utils/commits?author=leosuncin" title="Tests">⚠️</a> <a href="#ideas-leosuncin" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

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
