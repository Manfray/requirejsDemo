requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js"extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});
requirejs(["utils/compute"], function(compute) {
    //此函数在加载scripts/utils/compute.js时调用。
    //如果compute.js调用define()，则直到
    //compute的依赖项已加载，compute参数将保持
    //“utils/compute"的模块值。
    console.log(compute)
    console.log(compute.add(1, 2))
});