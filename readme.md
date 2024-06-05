```
npm install
node index.mjs
```

Should yield the following error:

```sh
TypeError: Cannot assign to read only property '0' of string '<checkbox inputId="nba-connect-market-checkbox-1" readOnly required checked>Create your vehicle in myAudi by entering the VIN.</checkbox><checkbox inputId="nba-connect-market-checkbox-2" readOnly required>Start the myAudi app and follow the steps.</checkbox>'
    at setPath (file:///home/marco/code/demos/i18ncheckbox/node_modules/i18next-fs-backend/esm/utils.js:52:10)
    at file:///home/marco/code/demos/i18ncheckbox/node_modules/i18next-fs-backend/esm/index.js:158:15
    at Array.forEach (<anonymous>)
    at proceed (file:///home/marco/code/demos/i18ncheckbox/node_modules/i18next-fs-backend/esm/index.js:155:20)
    at file:///home/marco/code/demos/i18ncheckbox/node_modules/i18next-fs-backend/esm/index.js:174:18
```

paths will vary.