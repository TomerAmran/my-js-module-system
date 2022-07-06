const fs = require("fs");
const vm = require("vm");

const wrapAsModule = (code) => `((module, exports) => {
    ${code}
  })`;

function my_require(pathToFile) {
  const module = { exports: {} };
  const code = fs.readFileSync(require.resolve(pathToFile)).toString();
  const codeAsModule = wrapAsModule(code);
  const script = new vm.Script(codeAsModule);
  script.runInNewContext()(module, module.exports);
  return module.exports;
}

const { add3 } = my_require("./common_js/math.js");
console.log(add3(2), "should be equal 5");
