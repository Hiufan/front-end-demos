<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="http://cdn.bootcss.com/jquery/1.7.2/jquery.min.js"></script>
</head>
<body>
	<!-- 脚本区 -->
	<script>
	$(function(){
		$.get('/api',function (data) {
			console.log(Object.keys(data).length);
			console.log(Object.keys(data)[0]);
		});
	});
	</script>
</body>
</html>