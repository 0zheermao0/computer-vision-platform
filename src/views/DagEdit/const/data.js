// 节点配置信息


// 上传表单对象
export const formData = {
    fork: {
        name: "判断节点",
        description: "判断节点",
        triggerType: null, // 触发条件
        targetUnit: null, // 目标单位
        statusUnit: null, // 单位状态
        targetArea: null, // 区域
        situationTime: null, // 态势时间
        countdown: null, // 倒计时
        selectTime: null // 指定时间点
    },
    start: {
        name: "图像源",
        params: {
            img: {label: '图片', value: ''},
        }
    },
    channels: {
        name: "通道变更",
        params: {
            channels: {label: '通道', value: '', options: ['RGB转GRAY', 'RGB转HSV']}
        },
    },
    crop: {
        name: "裁剪",
        params: {
            x_begin: {label: 'x起点', value: ''},
            x_end: {label: 'x终点', value: ''},
            y_begin: {label: 'y起点', value: ''},
            y_end: {label: 'y终点', value: ''}
        },
    },
    resize: {
        name: "缩放",
        params: {
            width: {label: '宽度', value: ''},
            height: {label: '高度', value: ''},
            inter_method: {label: '插值方法', value: '', options: ['双线性插值', '双三次插值']}
        }
    },
    rotate: {
        name: "旋转",
        params: {
            angle: {label: '角度', value: ''}
        }
    },
    threshold: {
        name: "阈值化",
        params: {
            type: {label: '阈值化方法', value: '', options: ['二值化', '自适应阈值化']},
            threshold: {label: '阈值', value: ''},
        }
    },
    blur: {
        name: "滤波",
        params: {
            type: {label: '滤波方法', value: '', options: ['中值滤波', '高斯滤波']},
        }
    },
    denoising: {
        name: "去噪",
        params: {
            type: {label: '去噪种类', value: '', options: ['均值滤波', '中值滤波', '双边滤波']},
        }
    },
    morphology: {
        name: "形态学",
        params: {
            type: {label: '操作', value: '', options: ['膨胀', '腐蚀', '开运算', '闭运算']},
        }
    },
    template: {
        name: "模板匹配",
        params: {
            model: {label: '模板', value: ''},
        }
    },
    edge: {
        name: "边缘检测",
        params: {
            type: {label: '方法', value: '', options: ['Sobel', 'Canny']},
        }
    },
    hough: {
        name: "霍夫变换",
        params: {
            type: {label: '种类', value: '', options: ['直线', '圆']},
        }
    },
    feature: {
        name: "特征检测",
        params: {
            type: {label: '种类', value: '', options: ['SIFT', 'SURF', 'ORB']},
        }
    },
    remap: {
        name: "畸变矫正",
        params: {
            cameraMatrix: {label: '角度', value: ''},
            distCoeffs: {label: '角度', value: ''},
            newCameraMatrix: {label: '角度', value: ''},
        }
    },
    hist: {
        name: "像素统计",
        params: {
            holder: {label: '角度', value: ''},
        }
    },
};
