# rsup-timespan
timespan library for browser

[![npm](https://flat.badgen.net/npm/v/rsup-timespan)](https://www.npmjs.com/package/rsup-timespan)

![zilean](./zilean.jpg)


## Install
```sh
npm i rsup-timespan
```

## Usage
```js
const timespan = require('rsup-timespan')
end = timespan()

await delay(5000) // ... After 5 seconds

end('ms')
// 5000

end('s')
// 5
```

## License

MIT
