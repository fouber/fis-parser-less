/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';


var less = require('less');
var root = fis.project.getProjectPath();

module.exports = function(content, file, conf){
    conf.paths = [ file.dirname, root ];
    conf.syncImport = true;
    less.render(content, conf, function(e, result){
		if(e){
			throw e;
		} else {
			content = result;
		}
	});
	return content;
};