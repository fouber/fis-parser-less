/*
 * fis
 * http://web.baidu.com/
 */

'use strict';


var less = require('less');

module.exports = function(content, file, conf){
	delete conf.rootpath;
    less.render(content, conf, function(e, result){
		if(e){
			var msg = 'parser-less: ' + (e.message || e) + ' [' + file.subpath;
			if(e.hasOwnProperty('line')){
				msg += ':' + e.line;
				if(e.hasOwnProperty('col')){
					msg += ':' + e.col;
				} else if(e.hasOwnProperty('column')) {
					msg += ':' + e.column;
				}
			}
			msg += ']';
			fis.log.error(msg);
		} else {
			content = result;
		}
	});
	return content;
};