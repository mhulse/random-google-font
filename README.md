# Random Google Font

**Node module that returns random Google font source file URLs.**

```bash
$ npm install random-google-font --save-dev
```

… then:

```js
let font = require('random-google-font');
font.get({
	//name: 'Roboto',
	category: 'monospace', // If name is specified, this option is ignored.
	variant: 'italic',
	weight: '100',
	items: 2,
}) // …
```

… use as a `Promise` or with a callback; there’s also a `getSync(…)` method.

[Check the demo](demo.js) for usage examples.

**Note:** This module utilizes [@jonathantneal / google-fonts-complete](https://github.com/jonathantneal/google-fonts-complete).

## Dev notes

```bash
# Run the demo:
$ node ./demo.js
# If not already, login:
$ npm adduser
# Bump version number in `package.json` …
# … and publish on npm:
$ npm publish
```

---

Copyright © 2016 [Michael Hulse](http://mky.io).

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<img src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png">
