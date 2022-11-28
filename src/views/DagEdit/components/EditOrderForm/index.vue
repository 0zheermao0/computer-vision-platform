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
        <el-input
            v-if="!Array.isArray(orderFormData.params[item].options)"
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
</style>
