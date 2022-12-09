<template>
  <div class="box">
    <el-form
        ref="orderForm"
        :model="orderFormData"
        :validate-on-rule-change="false"
        label-width="90px"
        @submit.native.prevent
    >
      <el-form-item
          v-for="(item, index) in Object.keys(orderFormData.params)"
          :key="index"
          :label="orderFormData.params[item].label"
          :prop="item"
      >
        <el-upload
            v-if="orderFormData.params[item].type==='img'"
            class="img-uploader"
            :action="uploadUrl"
            list-type="picture-card"
            :show-file-list="true"
            :on-success="handleImgSuccess"
            :auto-upload="true"
            :limit="1"
            :before-upload="beforeImgUpload">
          <i class="el-icon-plus img-uploader-icon"></i>
        </el-upload>
        <el-input
            v-else-if="!Array.isArray(orderFormData.params[item].options)"
            v-model="orderFormData.params[item].value"
            placeholder="请输入参数"
            @input="debounceHandler"
            @keyup.native.enter="debounceHandler"
        ></el-input>
        <el-select
            v-else
            v-model="orderFormData.params[item].value"
            placeholder="请选择"
            @change="debounceHandler"
        >
          <el-option
              v-for="option in orderFormData.params[item].options"
              :key="option"
              :label="option"
              :value="option"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { debounce,cloneDeep } from "lodash";
import {baseURL} from "@/config/baseConfig";

export default {
  name: "EditOrder",
  props: {
    formData: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      uploadUrl: baseURL + 'api/system/file/',
      imageUrl: '',
      mapVisible: false,
      mode: "",
      orderFormData: {
        name: "",
        description: "",
        params: {}
      }
    };
  },
  watch: {
    formData: {
      handler(val) {
        // let sourForm=this.$options.data.orderFormData;
        Object.assign(this.orderFormData, val);
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {

  },
  methods: {
    handleImgSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.orderFormData.params.img.value = res.data.url
      console.log('res.data.url:', res.data.url);
    },
    beforeImgUpload(file) {
      console.log('file', file)
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;
      //
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
    },

    // 当关闭添加命令弹窗
    onAddOrderDialgClose() {
      const data = this.$options.data();
      this.orderFormData = data.orderFormData;
      this.$emit("cancelorder");
    },
    // 添加行为
    handleAddOrder() {
      this.$refs.orderForm.validate(async (valid) => {
        if (valid) {
          this.$emit("confirmorder", cloneDeep(this.orderFormData));
        } else {
          return false;
        }
      });
    },

    handlerChange() {
      // this.$emit("updateCellData", cloneDeep(this.orderFormData));
      console.log("handlerChange", this.orderFormData);
    },
    debounceHandler: debounce(function () {
      this.handlerChange();
    }, 1000),
  }
};
</script>
<style lang="scss" scoped>
::v-deep .el-form-item__label {
  color: #2c8eff;
}

::v-deep .img-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
::v-deep .img-uploader .el-upload:hover {
  border-color: #409EFF;
}
::v-deep .img-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
::v-deep .img {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
