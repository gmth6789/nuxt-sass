// 引入全局mixin
import mixin from './libs/mixin/mixin.js'


function wranning(str) {
	// 开发环境进行信息输出,主要是一些报错信息
	// 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
	// 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
	if (process.env.NODE_ENV === 'development') {
		console.warn(str)
	}
}


import updateCustomBarInfo from './libs/function/updateCustomBarInfo.js'

import color from './libs/function/color.js'

import message from './libs/function/message.js'

import uuid from './libs/function/uuid.js'

import array from './libs/function/array.js'




import test from './libs/function/test.js'

import $parent from './libs/function/$parent.js'

import string from './libs/function/string.js'

import number from './libs/function/number.js'

import deepClone from './libs/function/deepClone.js'


import zIndex from './libs/config/zIndex.js'

import colorInfo from './libs/config/color.js'

const $t = {
	updateCustomBar: updateCustomBarInfo,
	color,
	message,
	uuid,
	array,
	test,
	$parent,
	string,
	number,
	deepClone,
	zIndex,
	colorInfo,
}


uni.$t = $t

const install = Vue => {

	Vue.mixin(mixin)

	// Filter格式化

	Vue.prototype.$t = $t
}

export default {
	install
}