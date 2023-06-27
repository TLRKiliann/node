Create a file test.js :

$ touch test.js

and insert into test.js:

`console.log("Hello Node !");`

$ node test.js

`Hello Node !` should appear into your console.

Create node_modules with package.json & module.js

$ mkdir node_modules

$ touch module1.js

Insert this into module1.js:

`console.log("Module loaded !");`

$ cd node_modules

$ mkdir module1

$ cd module1

$ touch package.json

Insert this into the file:

```
{
	"main": "module1.js"
}
```

In test.js

`let mod1 = require("module1.js");`

Launch `test.js` with the following cmd :

$ node test.js

`Module loaded !` should appear into your console.

By creating `package.json` in nodetester (look at this file), you can use the cmd :

$ npm start

(start is equal to node test.js)

To list all module in node_modules respository (local).

$ npm ll
