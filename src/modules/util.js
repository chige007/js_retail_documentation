const Util = {
    ROOT_PATH: process.env.ROOT_PATH,
    getRandom (len, radix) { // 获取随机数
        len = len || 16;
        radix = radix || 16;
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [],
            i;
        radix = radix || chars.length;
        if (len) {
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            var r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    },
    myAjax (options) {
        var success = $.Callbacks();
        var beforeSend = $.Callbacks();
        var error = $.Callbacks();
        var defaultSuccess = (data) => {
            this.loadingBox.hide(options.container || null);
            if(data.code !== 0){
                console.log(data.msg);
            }
        };
        var defaultBeforeSend = () => {
            if(!options.noLoading)
                this.loadingBox.show('',options.container || null);
        };
        var defaultError = (xhr, status, err) => {
            this.loadingBox.hide(options.container || null);
            this.simpleTips.show(xhr.status + '-' + err, 'error');
        }
        success.add(defaultSuccess);
        beforeSend.add(defaultBeforeSend);
        error.add(defaultError);
        if (typeof options.success == 'function') {
            success.add(options.success);
        }
        if (typeof options.beforeSend == 'function') {
            beforeSend.add(options.beforeSend);
        }
        if (typeof options.error == 'function') {
            beforeSend.add(options.error);
        }
        options.beforeSend = beforeSend.fire;
        options.error = error.fire;
        options.success = success.fire;
        var defaultOpt = {
            'type': 'post',
            'dataType': 'json'
        }
        $.extend(defaultOpt, options);
        $.ajax(options);
    },
    loadingBox: {
        show (text, container) {
            if(container){
                $(container).append('<div class="loadingTips"><i class="fa fa-circle-o-notch fa-pulse"></i></div>');
            }else{
                $("#global_loadingBox").css('display', 'block');
            }
        },
        hide (container) {
            if(container){
                $(container).find('.loadingTips').remove();
            }
            $("#global_loadingBox").css('display', 'none');
        }
    },
    confirmBox: {
        box: () => $("#global_confirmBox"),
        show (text, confirmCallback, cancelCallback){
            $(this.box()).addClass("show").find('.text').text(text);
            $(this.box()).find('.cancel').one('click', ()=>{
                this.hide();
                typeof cancelCallback == 'function' && cancelCallback();
            });
            $(this.box()).find('.confirm').focus().one('click', ()=>{
                this.hide();
                typeof confirmCallback == 'function' && confirmCallback();
            });
        },
        hide () {
            $(this.box()).removeClass('show').find('.text').empty();
        }
    },
    simpleTips: {
        box: () => $("#global_simpleTips"),
        show (text, type){
            clearTimeout(this.t);
            var icon = '';
            if(type == 'success')icon = 'fa fa-check';
            if(type == 'error')icon = 'fa fa-close';
            if(type == 'warn')icon = 'fa fa-exclamation-circle';
            type = type ? type+' hasIcon' : '';
            $(this.box()).addClass("show "+type).find('.text').text(text);
            $(this.box()).find('.icon').removeClass('fa fa-check fa-close fa-exclamation-circle').addClass(icon);
            this.t = setTimeout(()=>{
                this.hide();
            },3000);
        },
        hide () {
            $(this.box()).removeClass('show hasIcon success error warn').find('.text').empty();
        },
        t: null
    },
    formatter: {
        escape (value) {
            return escape(value);
        },
        unescape (value) {
            return unescape(value);
        },
        yesOrNo (value) {
            if (value === '1' || value === 1)
                return '是';
            else if (value === '0' || value === 0)
                return '否';
            else
                return '';
        },
        money (value, prepend) {
            var val = value * 1;
            if (typeof val == 'number' && !isNaN(val)) {
                val += '';
                var symbol = val.indexOf("-");
                if (symbol == 0)
                    val = val.split("-")[1];
                val = parseFloat(val + "") + "";
                if (val.indexOf(".") == -1) val = val + ".00";
                val = val.replace(/\ +/g, "").replace(/\s*\r?\n\s*/g, "").replace(/[ ]/g, "").replace(/[\r\n]/g, "").replace(/[\r\n]/g, "");
                var reg = new RegExp("^[0-9]+(.[0-9]*)?$");
                if (!reg.test(val)) return;
                var decimal = val.split(".")[1];
                val = val.split(".")[0] * 1;
                val = parseFloat(val); //去除首位输入的0，如002，小数不影响parseFloat字符串转数字  
                val = val.toString();
                val = val.replace(/^(\d*)$/, "$1.");
                val = (val + "00").replace(/(\d*\.\d\d)\d*/, "$1");
                val = val.replace(".", ",");
                var re = /(\d)(\d{3},)/;
                while (re.test(val))
                    val = val.replace(re, "$1,$2");
                val = val.replace(/,(\d\d)$/, ".$1");
                var result = val.replace(/^\./, "0.").split(".00")[0] + "." + decimal;
                if (symbol == 0) result = "-" + result;
                if(prepend)
                    result = prepend + result;
                return result;
            } else {
                return value;
            }
        },
        date (date, pattern) {
            if (date == undefined) {
                date = new Date();
            }else{
                if(typeof date == "string"){
                    var strdata=date.replace(/-/g,"/");
                    var index=strdata.indexOf(".");
                    if(index>0)
                    {
                        strdata=strdata.substr(0,index);
                    }
                    //如果传回来的时间字符串是"Sun Mar 31 12:00:00 CST 2013"的形式,要转成GMT+0800的时区格式,否则会多14个小时
                    if(strdata.indexOf("CST")>0){
                        strdata=strdata.replace("CST","GMT+0800");
                    }
                    date = new Date(strdata);
                }else if(typeof date == "number"){
                    date = new Date(date);
                }
            }
            if (pattern == "undefined" || typeof(pattern) == "undefined" || pattern == "") {    
                pattern = "yyyy-MM-dd";    
            }    
            return date.format(pattern);    
        }
    }
}

module.exports = Util;