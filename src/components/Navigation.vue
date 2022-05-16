<template>
    <div id="menu">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color=rgba(26,30,42,0.5)
                text-color="#fff"
                active-text-color=rgba(47,79,79,0.5) style="border-bottom: solid 0px #e6e6e6;">
            <el-menu-item index="1">菜  单</el-menu-item>
            <el-menu-item index="6" @click="OpenMapbox">MapboxGL</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    import TilesLayerManager from "../js/Entity/LoadTilesLayer"
    import LoadTilesLayer from "../js/Entity/LoadTilesLayer";
    import ViewerBase from "../js/Scene/ViewerBase"
    import {DrawShape} from "../js/SpatialAnalyse/ProfileAnalyse"
    export default {
        name:"Navigation",
        components: {},
        props: {},
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                clampToGround:true,

            };
        },
        watch: {},
        computed: {},
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },

            Loadmodel(){
                let tilesLaye = new LoadTilesLayer(window.Scene.viewer);
                //tilesLaye.AddTilesLayer(window.EarthBaseConfig.TilesModel);
                tilesLaye.MoveTilesLoad(window.EarthBaseConfig.TilesModel[0]);
            },
            PorfileAnaly(){
                //具体事件的实现
                DrawShape(window.Scene.viewer,"line");
            },
            restorationViewer(){
                let viewbase = new ViewerBase(window.Scene.viewer);
                viewbase.activeFlytoViwer(window.EarthBaseConfig.initviewpoint,-100,-70,0);
            },
            OpenMapbox(){
                //通过push进行跳转
                this.$router.push('/mapboxgl')
            }


        },
        created() {
        },
        mounted() {
            this.$nextTick(()=>{
                this.initMeasure();
            })
        }
    };
</script>
<style  scoped>
    #menu{
        position: absolute;
        top: 0;
        z-index: 99;
        width: 100%;
        background-color: rgba(26,30,42,0.5);
    }
    .el-menu{
        border-bottom: solid 0px #e6e6e6;
    }

</style>