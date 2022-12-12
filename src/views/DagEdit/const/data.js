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
        id: 0,
        name: {label: "图像源", value: "img_src"},
        params: {
            type: {label: '源类型', value: '', options: ['单张图片', '文件夹']},
            img: {label: '图片', value: '', type: 'img'},
        }
    },
    channels: {
        id: 1,
        name: {label: "通道变更", value: "changeChannels"},
        params: {
            channels: {label: '通道', value: '', options: ['GRAY', 'HSV']}
        },
    },
    crop: {
        id: 2,
        name: {label: "裁剪", value: "crop"},
        params: {
            x_begin: {label: 'x起点', value: ''},
            x_end: {label: 'x终点', value: ''},
            y_begin: {label: 'y起点', value: ''},
            y_end: {label: 'y终点', value: ''}
        },
    },
    resize: {
        id: 3,
        name: {label: "缩放", value: "resize"},
        params: {
            width: {label: '宽度', value: ''},
            height: {label: '高度', value: ''},
            inter_method: {label: '插值方法', value: '', options: ['双线性插值', '双三次插值']}
        }
    },
    rotate: {
        id: 4,
        name: {label: "旋转", value: "rotate"},
        params: {
            angle: {label: '角度', value: ''}
        }
    },
    threshold: {
        id: 5,
        name: {label: "阈值化", value: "threshold"},
        params: {
            type: {label: '阈值化方法', value: '', options: ['二值化', '自适应阈值化']},
            threshold: {label: '阈值', value: ''},
        }
    },
    blur: {
        id: 6,
        name: {label: "滤波", value: "blur"},
        params: {
            type: {label: '滤波方法', value: '', options: ['中值滤波', '高斯滤波']},
        }
    },
    denoising: {
        id: 7,
        name: {label: "去噪", value: "denoising"},
        params: {
            type: {label: '去噪种类', value: '', options: ['均值滤波', '中值滤波', '双边滤波']},
        }
    },
    morphology: {
        id: 8,
        name: {label: "形态学", value: "morphology"},
        params: {
            type: {label: '操作', value: '', options: ['膨胀', '腐蚀', '开运算', '闭运算']},
        }
    },
    template: {
        id: 9,
        name: {label: "模板匹配", value: "template"},
        params: {
            model: {label: '模板', value: ''},
        }
    },
    edge: {
        id: 10,
        name: {label: "边缘检测", value: "edge"},
        params: {
            type: {label: '方法', value: '', options: ['Sobel', 'Canny']},
        }
    },
    hough: {
        id: 11,
        name: {label: "霍夫变换", value: "hough"},
        params: {
            type: {label: '种类', value: '', options: ['直线', '圆']},
        }
    },
    feature: {
        id: 12,
        name: {label: "特征检测", value: "feature"},
        params: {
            type: {label: '种类', value: '', options: ['SIFT', 'SURF', 'ORB']},
        }
    },
    remap: {
        id: 13,
        name: {label: "畸变矫正", value: "remap"},
        params: {
            cameraMatrix: {label: '角度', value: ''},
            distCoeffs: {label: '角度', value: ''},
            newCameraMatrix: {label: '角度', value: ''},
        }
    },
    hist: {
        id: 14,
        name: {label: "像素统计", value: "hist"},
        params: {
            holder: {label: '角度', value: ''},
        }
    },
};
