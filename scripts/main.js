requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js"extension since
    //the paths config could be for a directory.
    paths: {
        // 路径别名
        utils: 'scripts/utils',
        libs: 'scripts/libs',

        // 第三方依赖
        'jquery': 'scripts/libs/jquery',
        'no-amd': 'scripts/libs/no-amd'
    },
    shim: {
        'no-amd': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['jquery'], // 会保证模块在执行之前先加载jquery模块，而不至于no-amd执行时候报错，起到控制加载顺序作用
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'no-amd'
        }
    }
});
requirejs(["utils/compute", 'libs/jquery.xxx', 'no-amd'], function(compute, xxx) {
    //此函数在加载scripts/utils/compute.js时调用。
    //如果compute.js调用define()，则直到
    //compute的依赖项已加载，compute参数将保持
    //“utils/compute"的模块值。
    console.log(xxx.$)
    console.log(compute)
    console.log(compute.add(1, 2))
    requirejs(['no-amd'], function() {
        console.log(111)
    })
});