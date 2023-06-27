Create a file test.js :

$ touch test.js

and insert :

`console.log("Hello Node !");`

$ node test.js

Create node_modules with package.json & module.js

$ mkdir node_modules

$ touch module1.js

Insert this into file:

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
