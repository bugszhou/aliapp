/**
 * Created by Gary.zhou on 2018/2/08.
 */
const conf = {
    env: typeof process !== 'undefined' && process && process.env && process.env.API_ENV ? process.env.API_ENV : 'production',
    apiEnv: 'aliapp',
    appId: 'wx6c196413da3a8677',
    componentAppid: '',
    development: 'https://alipay-egifting-test.e.verystar.cn',
    test: 'https://alipay-egifting-test.e.verystar.cn',
    production: 'https://alipay-egifting.e.verystar.cn'
};
const BASE_URL = true ? conf['test'] : conf[conf.env];

module.exports = {
    get env() {
        return conf.env;
    },
    get apiEnv() {
        return conf.apiEnv;
    },
    get app_id() {
        return conf.appId;
    },
    get component_appid() {
        return conf.componentAppid;
    },
    get baseURL() {
        return BASE_URL || conf.production;
    }
};
