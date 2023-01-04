// 上传表单对象
export const formData = {
    fork: {
        name: {label: "判断节点", value: "fork"},
        params: {
            condition: {label: "条件", value: "", options: ['特征数', '边缘数'], show: true},
            operator: {label: "操作符", value: "", options: ['>', '<', '=', '≥', '≤'], show: true},
            condition_value: {label: "条件值", value: "", show: true}
        }
    },
    start: {
        id: 0,
        name: {label: "图像源", value: "img_src"},
        params: {
            type: {label: '源类型', value: '', options: ['上传', '已有图片', '已有文件夹'], show: true},
            img: {label: '图片', value: '', type: 'img', show: true, group: [0]},
            src: {label: '源选择', value: '', options: [], show: true, group: [1, 2]},
        }
    },
    channels: {
        id: 1,
        name: {label: "通道变更", value: "changeChannels"},
        params: {
            channels: {label: '通道', value: '', options: ['GRAY', 'HSV'], show: true}
        },
    },
    crop: {
        id: 2,
        name: {label: "裁剪", value: "crop"},
        params: {
            x_begin: {label: 'x起点', value: '', show: true},
            x_end: {label: 'x终点', value: '', show: true},
            y_begin: {label: 'y起点', value: '', show: true},
            y_end: {label: 'y终点', value: '', show: true}
        },
    },
    resize: {
        id: 3,
        name: {label: "缩放", value: "resize"},
        params: {
            width: {label: '宽度', value: '', show: true},
            height: {label: '高度', value: '', show: true},
            inter_method: {label: '插值方法', value: '', options: ['双线性插值', '双三次插值'], show: true}
        }
    },
    rotate: {
        id: 4,
        name: {label: "旋转", value: "rotate"},
        params: {
            angle: {label: '角度', value: '', show: true}
        }
    },
    threshold: {
        id: 5,
        name: {label: "阈值化", value: "threshold"},
        params: {
            type: {label: '阈值化方法', value: '', options: ['二值化', '自适应阈值化'], show: true},
            threshold: {label: '阈值', value: '', show: true},
        }
    },
    blur: {
        id: 6,
        name: {label: "滤波", value: "blur"},
        params: {
            type: {label: '滤波方法', value: '', options: ['中值滤波', '高斯滤波'], show: true},
        }
    },
    denoising: {
        id: 7,
        name: {label: "去噪", value: "denoising"},
        params: {
            type: {label: '去噪种类', value: '', options: ['均值滤波', '中值滤波', '双边滤波'], show: true},
        }
    },
    morphology: {
        id: 8,
        name: {label: "形态学", value: "morphology"},
        params: {
            type: {label: '操作', value: '', options: ['膨胀', '腐蚀', '开运算', '闭运算'], show: true},
        }
    },
    template: {
        id: 9,
        name: {label: "模板匹配", value: "template"},
        params: {
            model: {label: '模板', value: '', show: true},
        }
    },
    edge: {
        id: 10,
        name: {label: "边缘检测", value: "edge"},
        params: {
            type: {label: '方法', value: '', options: ['Sobel', 'Canny'], show: true},
        }
    },
    hough: {
        id: 11,
        name: {label: "霍夫变换", value: "hough"},
        params: {
            type: {label: '种类', value: '', options: ['直线', '圆'], show: true},
        }
    },
    feature: {
        id: 12,
        name: {label: "特征检测", value: "feature"},
        params: {
            type: {label: '种类', value: '', options: ['SIFT', 'SURF', 'ORB'], show: true},
        }
    },
    remap: {
        id: 13,
        name: {label: "畸变矫正", value: "remap"},
        params: {
            cameraMatrix: {label: '角度', value: '', show: true},
            distCoeffs: {label: '角度', value: '', show: true},
            newCameraMatrix: {label: '角度', value: '', show: true},
        }
    },
    hist: {
        id: 14,
        name: {label: "像素统计", value: "hist"},
        params: {
            holder: {label: '角度', value: '', show: true},
        }
    },
    params: {
        name: {label: "读取参数", value: "params"},
        params: {

        }
    },
};
