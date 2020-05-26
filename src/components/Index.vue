<template>
  <el-row class="tac">
    <el-col :span="20">
      <h2>{{msg}}</h2>
    <el-container>
      <el-container>
        <el-aside width="300px">
          <el-menu router
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index='/application'>
            <i class="el-icon-menu"></i>
            <span slot="title">应用</span>
          </el-menu-item>
          <el-menu-item index='/config'>
            <i class="el-icon-document"></i>
            <span slot="title">配置</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>导航四</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

        </el-aside>
        <el-container>
          <el-main><router-view></router-view></el-main>
          <!--el-footer>Footer</el-footer-->
        </el-container>
      </el-container>
    </el-container>

  </el-col>
</el-row>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome 我的网站',
      //isCollapse: false,
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
