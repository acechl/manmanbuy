# manmanbuy

### 贡献代码流程：

各组员先Fork到你的仓库中，再到你自己的仓库git clone下来，完成代码编写后然后推送，请push到test分支上，最后点击New pull request，等待组长检查merge。

``注意命名规范，重要的事情只说一遍。``


### 在你自己仓库git clone之后：
	
本项目利用gulp为构建工具，请先全局安装gulp

	$ npm install --global gulp
	
安装项目依赖

	$ npm install 
	
本项目可以使用less，请先全局安装less
	
	$ npm install -g less
	
然后可以在less文件夹下编写你的less文件，最后在gulpfile.js添加你的less路径：

		gulp.task('testLess', function () {
	    //在这里添加你的路径，数组形式
	    gulp.src('src/less/index.less') 	        
	    	.pipe(less())
	       	.pipe(gulp.dest('src/css'));  //输出路径
	});

最后运行：

	$ gulp testLess
	
	
	
	