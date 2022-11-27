// 如果你不知道自己在做什么，请勿更改本配置内容
import {operationsList} from "@/views/DagEdit/components/StencilTree/operations";
import {formData} from "@/views/DagEdit/const/data";
// 算法组件表单对象
export const uploadFormData = formData;

// 判断节点表单对象
export const decision = {
  name: "判断节点",
  description: "判断节点",
  triggerType: "", // 触发条件
  targetUnit: null, // 目标单位
  statusUnit: null, // 单位状态
  targetArea: null, // 区域
  situationTime: null, // 态势时间
  countdown: null, // 倒计时
  selectTime: null // 指定时间点
};

//
export const stencilList = operationsList;
// dag-edge边的配置数据
export const commonEdage = {
  attrs: {
    line: {
      stroke: "#2CFEFF", // #e52e1a
      strokeWidth: 1,
      targetMarker: {
        name: "classic",
        size: 8
      }
    }
  },
  connector: {
    name: "rounded"
  },
  defaultLabel: {
    markup: [
      {
        tagName: "rect",
        selector: "body"
      },
      {
        tagName: "text",
        selector: "label"
      }
    ],
    attrs: {
      label: {
        fontSize: 14,
        textAnchor: "middle",
        textVerticalAnchor: "middle",
        pointerEvents: "none",
        fill: "#2CFEFF"
      }
    },
    position: {
      distance: 0.5
    }
  },
  // labels: "是",
  router: {
    name: "manhattan"
  },
  zIndex: 0
};
// dag-node节点链接桩群组的配置数据
export const commonPortsGroups = {
  in: {
    position: "top",
    attrs: {
      circle: {
        r: 4,
        magnet: "passive",
        fill: "#2cfeff",
        fillOpacity: "0.15",
        stroke: "#2cfeff",
        strokeOpacity: "0.6",
        strokeWidth: 1,
        style: {
          visibility: "visible"
        }
      }
    }
  },
  out: {
    position: "bottom",
    attrs: {
      circle: {
        r: 4,
        magnet: true,
        fill: "#2cfeff",
        fillOpacity: "0.15",
        stroke: "#2cfeff",
        strokeOpacity: "0.6",
        strokeWidth: 1,
        style: {
          visibility: "visible"
        }
      }
    }
  }
};
