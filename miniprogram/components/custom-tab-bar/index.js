Component({
    data: {
        selected: 1,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [{
            pagePath: "/index/index",
            iconPath: "../../icon/index.png",
            selectedIconPath: "../../icon/index.png",
            text: "条形图"
        }, {
            pagePath: "/index/index2",
            iconPath: "../../icon/index.png",
            selectedIconPath: "../../icon/index.png",
            text: "折线图"
        }]
    },
    attached() {},
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({ url })
            this.setData({
                selected: data.index
            })
        }
    }
})