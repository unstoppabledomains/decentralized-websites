;(function(){
			$('#menuToggle').on('click', function(){
				$('#mainmenu').toggleClass('menu-open');
				//small hack to fix the toggle button position
				$('#menuToggle').toggleClass('menu-openfix');
			});


})(jQuery)