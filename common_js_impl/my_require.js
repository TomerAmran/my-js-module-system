const fs = require("fs");
const vm = require("vm");

const template = (code) => `((exports, require, module) => {
    ${code}
  })`;

function my_require(pathToFile) {
  const module = { exports: {} };
  console.log(pathToFile);
  console.log(require.resolve(pathToFile));
  const code = fs.readFileSync(require.resolve(pathToFile)).toString();
  const codeInModule = template(code);
  const script = new vm.Script(codeInModule);

  my_require.resolve = require.resolve;
  script.runInNewContext()(module.exports, my_require, module);
  return module.exports;
}

const { add3 } = my_require("./common_js/math.js");
console.log(add3(2), "should be equal 5");

const _ = my_require("/Users/tomera/module_managment/node_modules/lodash/index.js");
// const _ = require("lodash");
console.log(_.add(1, 2));


