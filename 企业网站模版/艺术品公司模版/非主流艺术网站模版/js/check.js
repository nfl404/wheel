$(function(){
	
	$('.tijiao').on('click',function(){
		
		var username = $('#username').val();
		var tel = $('#tel').val();
		var content = $('#content').val();
		if(username==""){
			alert("请填写姓名");
			$('#username').focus();
			return false;
			}
			
		if(tel==""){
			alert("请填写电话号码");
			$('#tel').focus();
			return false;
			}
			
		if(content==""){
			alert("请填写留言内容");
			$('#content').focus();
			return false;
			}

		$.ajax({
			url: $('#form1').attr('action'),
			data: $('#form1').serialize(),
			type:'post',
			dataType:'json',
			success: function(json){
				if(json.type == 1){
					alert("提交成功");
					window.location.reload();
				} 
			}
		});


		})
		
		
		
	$('.join_sumit').on('click',function(){
		
		var company = $('#company').val();
		var username = $('#username').val();
		var tel = $('#tel').val();
		var area = $('#area').val();
		var content = $('#content').val();
		
		
		if(company==""){
			alert("请填写公司名称");
			$('#company').focus();
			return false;
		}
		
		if(username==""){
			alert("请填写姓名");
			$('#username').focus();
			return false;
			}

		if(tel==""){
			alert("请填写电话号码");
			$('#tel').focus();
			return false;
			}
			
		if(area==""){
			alert("请填写所在地区");
			$('#area').focus();
			return false;
			}
			
		if(content==""){
			alert("请填写留言内容");
			$('#content').focus();
			return false;
			}

		$.ajax({
			url: $('#form1').attr('action'),
			data: $('#form1').serialize(),
			type:'post',
			dataType:'json',
			success: function(json){
				if(json.type == 1){
					alert("提交成功");
					window.location.reload();
				} 
			}
		});


		})

	
	
})