# manmanbuy

贡献代码流程：

	各组员先Fork到你的仓库中，再到你自己的仓库git clone下来，
	完成代码编写后然后推送git push，最后点击New pull request
	等待组长检查merge。
	
本项目利用gulp为构建工具，请先全局安装gulp

	$ npm install --global gulp
	
安装项目依赖

	$ npm install 
	
本项目可以使用less，可以在gulpfile.js添加你的less路径：

		gulp.task('testLess', function () {
	    //在这里添加你的路径，数组形式
	    gulp.src('src/less/index.less') 	        
	    	.pipe(less())
	       	.pipe(gulp.dest('src/css'));  //输出路径
	});

最后运行：

	$ gulp testLess
	
	
	
	