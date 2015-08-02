<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="http://cdn.bootcss.com/jquery/1.7.2/jquery.min.js"></script>
	<style>
		.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
		.clearfix{*+height:1%;}
		.fl{float: left;}
		.fr{float: right;}
	</style>
</head>
<body>
	<div id="app" class="clearfix" style="width:960px;">
		<!-- 目录 -->
		<ul class="catgories fl" style="width:100px;">
			<li v-repeat="catgories">
				<a class="{{$value}}" href="javascript:;" v-on="click:showPostList">{{$value}}</a>
			</li>
		</ul>
		<!-- /目录 -->
		<!-- 对应目录下的文章列表 -->
		<div class="postList fl" style="width:100px;">
			<ul class="{{$key}}" v-repeat="post: postList" v-show="$key === active" >
		        <li v-repeat="post">
					<a href="javascript:;" v-on="click: showArticle">{{$value | basename}}</a>
		        </li>
			</ul>			
		</div>
		<!-- /对应目录下的文章列表 -->
		<div class="postContent fl" style="width:760px;">
			
		</div>
	</div>

	<!-- 脚本区 -->
	<script src="http://cdn.bootcss.com/jquery/1.7.2/jquery.min.js"></script>
	<script src="//cdn.bootcss.com/Director/1.2.8/director.min.js"></script>
	<script src="http://cdn.bootcss.com/vue/0.12.8/vue.min.js"></script>
	<script>
	$(function(){
		var promise = $.get('/api');
		promise.done(function (result) {
			console.log(result);
			var data = {
		  		catgories: Object.keys(result),
		  		postList: result,
		  		active: 'Articles'		
			}
			var app = new Vue({
			  	el: '#app',
			  	data: data,
			  	methods: {
			  		showPostList: function(e){		  			
			  			this.active = e.target.className;
			  			this.src = '#/'+e.target.className;
			  		},
			  		showArticle: function(e){
			  			var cat = e.target.parentNode.parentNode.className;
			  			$.get('/'+cat+'/'+e.target.innerText+'.md')
			  				.done(function (result){
			  					$('.postContent').html(result);
			  				});
			  		}
			  	}
			});

			// // 路由表
			// var routes = {
			// 	'/Articles': articles(app),
			// 	'/Investment': investment,
			// 	'/Lab': lab
			// };

			// var router = Router(routes);
			// router.init();		
		});

		// $.get('/api',function (result) {			
		// 	var data = {
		// 		postList: []
		// 	};
		// 	data.catgories = Object.keys(result);
		// 	for(var key in result) {
		// 		data.postList.push(result[key]);
		// 	}
		// 	var app = new Vue({
		// 	  	el: '#app',
		// 	  	data: data
		// 	});

		// 	// 路由表
		// 	var routes = {
		// 	'/Articles': articles(data.catgories[0]),
		// 	'/Investment': investment,
		// 	'/Lab': lab
		// 	};

		// 	var router = Router(routes);
		// 	router.init();
		// });
	});

// var articles = function (app) { 
// 	app.$data.postListOn = true;
// };
// var investment = function () {

// };
// var lab = function () {

// };

//过滤器
Vue.filter('basename', function (value) {
  return value.split('.')[0];
});
	</script>
</body>
</html>