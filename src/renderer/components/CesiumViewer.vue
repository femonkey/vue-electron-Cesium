<template>
    <div id="cesiumContainer"></div>
</template>

<script>
//导入Cesium源码中的Viewer组件，注意这里是用的Viewer组件的方式加载，而不是加载整个Cesium
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
//我们刚才所说的如何让Cesium知道静态资源在哪里的API
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl"
//导入必须的样式表
import "cesium/Source/Widgets/widgets.css";

export default{
    name:"cesiumContainer",
    mounted:function () {
        //设置静态资源目录
        buildModuleUrl.setBaseUrl('../static/Cesium/')
        //创建viewer实例
        this.viewer = new Viewer('cesiumContainer');
    },
    data () {
        return {
            'viewer' : {}
        }
    }
}
</script>

<style scoped>

</style>