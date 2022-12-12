<template>
  <div>
    <el-col>
      <el-row>
        <p>{{cellName}} 执行状态：<el-tag :type="status">{{statusMap[status]}}</el-tag></p>
      </el-row>
      <el-row>
        <p>可视化执行结果预览：</p>
        <el-image
            style="width: 600px; height: 500px"
            :src="baseUrl"
            :preview-src-list="[baseUrl]">
        </el-image>
      </el-row>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "VisualizedResult",
  props: {
    cellName: {
      type: String,
      default: ""
    },
    baseUrl: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: "danger"
    }
  },
  data() {
    return {
      // url: 'http://192.168.137.221:8000/media/test.png',
      statusMap: {
        success: "成功",
        danger: "失败",
        info: "待执行"
      }
    }
  },
}
</script>

<style scoped>
p{
  font-size: 20px;
  font-weight: bold;
  color: #f0f0f0;
}
::v-deep .el-row{
  padding-bottom: 5vh;
}
</style>
