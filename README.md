# array-compare

[![CircleCI](https://circleci.com/gh/nju33/array-compare.svg?style=svg&circle-token=6fc2ac3df0ac41fe8ee28180c908430d6b8747a4)](https://circleci.com/gh/nju33/array-compare)
![langulage: typescript](https://badgen.net/badge/language/typescript/007acc)
![npm: array-compare](https://badgen.net/npm/v/@nju33/array-compare)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![license: mit](https://badgen.net/badge/license/MIT/blue)
[![donate](https://badgen.net/badge/Donate%20via%20PayPal/$3.00/169bd7)](https://www.paypal.me/nju33/3USD)

## Install

```bash
yarn add @nju33/array-compare
```

## Example

```ts
import {arrayCompare} from '@nju33/array-compare';

arrayCompare(['foo', 'bar'], ['foo', 'barr']);
// [
//   {equal: true, a: 'foo', b: 'foo'},
//   {equal: false, a: 'bar', b: 'barr'}
// ]
```
