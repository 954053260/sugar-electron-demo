const apis = {
    FETCH_DATA_1: {
        url: '/XXXXXXX1',
        method: 'POST'
    }
}

module.exports = {
    /**
     * 安装插件，每一个自定义插件必备
     * @ctx [object] 框架上下文对象{ config, ipc, store }
     * @params [object] 配置参数
    */
    install(ctx, params = {}) {
        // 通过配置文件读取基础服务配置
        const { config, ipc, store, windowCenter } = ctx;
        return {
            async callAPI(action, options) {
                return {
                    api: apis[action],
                    params
                };
            }
        }
    }
}

