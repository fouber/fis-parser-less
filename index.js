/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';


var less = require('less');

module.exports = function(content, file, conf){
    less.render(content, conf, function(e, result){
		if(e){
			throw e;
		} else {
			content = result;
		}
	});
	return content;
};