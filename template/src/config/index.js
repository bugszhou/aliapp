/**
 * Created by Gary.zhou on 2018/2/08.
 */
const conf = {
    env: typeof process !== 'undefined' && process && process.env && process.env.API_ENV ? process.env.API_ENV : 'production',
    apiEnv: 'aliapp',
    appId: 'wx6c196413da3a8677',
    componentAppid: '',
    development: 'https://xxx.com',
    staging: 'https://xxx.com',
    testing: 'https://xxx.com',
    production: 'https://xxx.com'
};
const BASE_URL = true ? conf['testing'] : conf[conf.env];

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
