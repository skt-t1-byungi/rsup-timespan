# rsup-timespan
Timespan library for browser

## Install
```sh
yarn add rsup-timespan
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
