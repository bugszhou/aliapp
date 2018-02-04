/**
 * 全局
 */
App({
    onLaunch(opts) {},
    onShow(opts) {
        console.log(process.env)
    },
    onError(msg) {
        console.log(msg, ' -----> onError')
    },
    globalData: {
        initData: null
    }
});
