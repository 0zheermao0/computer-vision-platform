<template>
  <div class="wrap">
    <aside id="dag-stencil" class="panel-left">
      <StencilTree v-if="enabled"></StencilTree>
    </aside>
    <main class="panel-center">
      <div class="tool-bar">
        <ToolBar
          v-if="enabled"
          :current-select="currentSelect"
          @saveStrategy="handleSaveDag"
        ></ToolBar>
      </div>
      <div class="x6-graph-box">
        <div id="x6-graph-container" class="x6-graph-container"></div>
      </div>
    </main>
    <aside class="panel-right">
      <!-- <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane label="属性编辑" name="nodeData">
                   </el-tab-pane>
          <el-tab-pane label="设计" name="dataConfig"> </el-tab-pane>
        </el-tabs> -->
      <header class="base-header-title">模块结果</header>
      <div v-if="enabled" class="right-content">
        <VisualizedResult :base-url="baseUrl" :status="status" :cell-name.sync="cellName"/>
      </div>
    </aside>
    <ContextMenu v-if="enabled"></ContextMenu>

    <el-dialog title="参数设置" :visible.sync="paramsDialogVisible" @close='handleCancelDialog'>
      <EditOrderForm
          v-if="currentSelect === 'pipeline'"
          ref="orderForm"
          :form-data="cellData"
          @updateCellData="setNodeInfo"
      >
      </EditOrderForm>
      <EditOrderForm
          v-else
          ref="orderForm"
          :form-data="cellData"
          @updateCellData="setNodeInfo"
      >
      </EditOrderForm>
      <div slot="footer" class="dialog-footer">
        <!--            <el-button @click="handleCancelDialog">取 消</el-button>-->
        <el-button type="primary" @click="handleCancelDialog">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import DagGraph from "./graph";
// import { commonEdage, commonPortsGroups } from "./const/config";
import ToolBar from "./components/ToolBar";
import ContextMenu from "./components/ContextMenu";
// import EditConditionForm from "./components/EditConditionForm";
import EditOrderForm from "./components/EditOrderForm";
import StencilTree from "./components/StencilTree";
import VisualizedResult from "./components/VisualizedResult";
import {formData} from "@/views/DagEdit/const/data";
import {baseURL} from "@/config/baseConfig";
import {translate} from "@/views/DagEdit/const/translate";

let graph = null;
export default {
  name: "EditorDag",
  components: {
    StencilTree,
    ToolBar,
    ContextMenu,
    // EditConditionForm,
    EditOrderForm,
    VisualizedResult
  },
  data() {
    return {
      enabled: false,
      activeName: "nodeData",
      currentSelect: "none", // none、edge、pipeline、fork
      currentCell: null,
      cellData: {},
      graphData:null,
      paramsDialogVisible: false,
      cellName: "",
      baseUrl: baseURL + 'media/test.png',
      status: 'info',
    };
  },
  created() {
  },
  mounted() {
    this.initDagGraph();
    this.initGraphStart();
    this.$websocket.initWebSocket();
  },
  beforeDestroy() {
    DagGraph.destroy();
    this.$websocket.close();
  },
  methods: {
    // 初始化x6图编辑引擎
    initDagGraph() {
      graph = DagGraph.init("#x6-graph-container");
      this.enabled = true;
      this.initClickEvent();
             // // 装载流程图数据
    },
    // 初始化开始节点
    initGraphStart() {
      graph.clearCells();
      graph.center(); // 内容居中
      graph.zoomTo(1); // 缩放比例
      const start_node = graph.createNode({
        shape: "start",
        x: 200,
        y: 50,
        data: formData['start']
      });
      graph.addNode(start_node);
    },
    // 初始化点击事件
    async initClickEvent() {
      graph.on("blank:click", async () => {
        if (this.currentCell !== null) {
           this.clearData();
        }
      });
      graph.on("cell:dblclick",  ({ cell }) => {
        let isNode = cell.isNode();
        this.clearData();
        if (isNode) {
          this.getNodeInfo(cell);
        }
      })
      graph.on("cell:click",  ({ cell }) => {
        // console.log('click:', cell)
        this.cellName = cell.data.name.label;
        // console.log('click test: ', this.$websocket.getWsData())
        if (this.$websocket.getWsData()[cell.id]) {
          this.baseUrl = baseURL + this.$websocket.getWsData()[cell.id].img;
          this.status = this.$websocket.getWsData()[cell.id].status;
        }
        else if (Object.keys(this.$websocket.getWsData()).length !== 0 && !this.$websocket.getWsData()[cell.id]) {
          this.baseUrl = baseURL + 'test.png';
          this.status = 'danger';
        }
        else {
          this.baseUrl = baseURL + 'media/test.png';
          this.status = 'info';
        }

        if (cell.shape === "end" && this.$websocket.getWsData()[cell.id]) {
          let info = this.$websocket.getWsData()[cell.id].info
          for (const i in info) {
            cell.data.params[i] = {label: translate[i], value: info[i]}
          }
        }
      })
    },
    // 获取被选中节点的数据
    getNodeInfo(cell) {
      this.currentSelect = cell.shape;
      this.currentCell = cell;
      Object.assign(this.cellData, cell.getData());
      // console.log('getNodeInfo:', this.cellData)
      let nodeAttrs = cell.getAttrs();
      this.cellData.name.label = nodeAttrs?.label?.text;
      this.paramsDialogVisible = true;
    },
    // 清空选中节点数据
    clearData() {
      let data = this.$options.data();
      this.cellData = data.config;
      this.currentCell = null;
      this.currentSelect = "none";
      this.cellData = data.cellData;
    },
    // 设置当前选中节点的数据
    setNodeInfo(val) {
      this.cellData = val;
      if (val?.name) {
        let attr = {
          label: {
            text: this.cellData.name.label
          }
        };
        this.currentCell.setAttrs(attr);
      }
      let options = {
        silent: true,
        overwrite: true
      };
      this.currentCell.setData(this.cellData, options);
    },
    // 保存dag图数据
    handleSaveDag(){
      this.graphData=graph.toJSON();
    },
    backPage() {
      this.$router.go(-1);
    },
    handleCancelDialog() {
      this.paramsDialogVisible = false;
      graph.unselect(this.currentCell);
      this.clearData();
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
