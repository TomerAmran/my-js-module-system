require - https://nodejs.org/api/modules.html#the-module-wrapper:~:text=function%20require(,.exports%3B%0A%7D

```
function require(/* ... */) {
  const module = { exports: {} };
  ((module, exports) => {
    // Module code here. In this example, define a function.
    function someFunc() {}
    exports = someFunc;
    // At this point, exports is no longer a shortcut to module.exports, and
    // this module will still export an empty default object.
    module.exports = someFunc;
    // At this point, the module will now export someFunc, instead of the
    // default object.
  })(module, module.exports);
  return module.exports;
}
```


#### How to enable module seperation without changing syntax??
You just have to beleve that you are under a function that provide you with certin things!

##### AMD
amd stands for async-module-definition solves the problem of the order of loading,
by forcing each file to stand in certin rule, register it's dependencies,
and envoke each module only when its dependenices are ready, which is nice.
It enables anyc module loading (hence the name)



#### Showing the thing:
1. show how global shit used to work
2. than think what would we do?
3. say that a module is acctually runnign in a function.
4. show how to acctually do it.


The idea is to present the module seperation capabiliteis without adding new syntax to the language which originaly doesn't had the notion of module seperation!

I think it's clever and simple!
I hope I don't savage things.
Ofcourse the real language proccecing is done in cpp and not like what I did.


#### links
1. Build your own Webpack by Ronen Amiel from the Yoshi team https://www.youtube.com/watch?v=Gc9-7PBqOC8&t=505s