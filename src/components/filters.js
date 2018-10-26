import Util from './../modules/util'

export default (Vue)=>{
    Vue.filter('yesOrNo',Util.formatter.yesOrNo);
    Vue.filter('money',Util.formatter.money);
    Vue.filter('unescape',Util.formatter.unescape);
    Vue.filter('escape',Util.formatter.escape);
}