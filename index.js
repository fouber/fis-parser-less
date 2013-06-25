/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';


var less = require('less');

module.exports = function(content, file, conf){
	delete conf.rootpath;
	//conf.paths = [ fis.project.getProjectPath() ];
    less.render(content, conf, function(e, result){
		if(e){
			throw e;
		} else {
			content = result;
		}
	});
	return content;
};