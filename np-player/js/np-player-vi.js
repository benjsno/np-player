/*****************************************************

NEW WAY EVOLUTION : Nous Productions player
author : Benjamin Chéré

Pour un player vimeo le plus sobre possible, 
il faut un compte vimeo plus pour pouvoir supprimer la barre de control
dans les paramètres vidéos d'intégration

*****************************************************/
var npplayer = {
	player: null,
	playlist: null,
	current: null,
	current_index: 0,
	menu_container_w: 0,
	menu_width: 0,
	menu_left: 0,
	embed_params: 'color=FFF&autoplay=1&api=1&player_id=npplayer',
	
	init: function(url){
		this.menu_container_w = $('.np-player-menu .np-menu-container').width();

		$.getJSON( url, function( data ) {
			npplayer.playlist = data;
			
			// INIT MENU
			var items = [];
			$.each( data, function( key, val ) {
				var li = '<li>';
					li += '<img src="' + val.pict_url + '" title="' + val.title + '"/>';
					li += '<div class="mask"></div>';
				li += '</li>';
				items.push( li );
			});
 			$(".np-player-menu .np-menu").empty().append(items.join(""));
 			npplayer.current = data[0];
			$(".np-player-menu .np-menu li:eq("+0+")").addClass('playing');
 			$(".np-player-menu .np-menu img:last").load(function(){
 				npplayer.setMenuWidth();
 			});
 			$(document).on('click', ".np-player-menu .np-menu li", function(){
 				npplayer.playVideo($(this).index());
 			});

 			// INIT META
 			npplayer.changeMeta();
 			
 			// INIT PLAYER
 			var p_w = $('.np-player-video').width();
 			var p_h = Math.round(9 * p_w / 16);
			$('.np-player-video').css("height", p_h);
			var iframe = '<iframe id="npplayer" src="" width="100%" height="100%" scrolling="no" frameborder="0" ></iframe>';
			var src = '//player.vimeo.com/video/'+npplayer.current.vi_video_id+'?'+npplayer.embed_params;
			$('#npplayer').replaceWith(iframe);
			$('#npplayer').attr('src', src);
			
			var iframe = $('#npplayer')[0];
    		npplayer.player = $f(iframe);
			npplayer.player.addEvent('ready', function() {       
				npplayer.player.addEvent('finish', npplayer.onFinish);
			});
			
		});
	},
	
	setMenuWidth: function(){
		var w = 0;
		$(".np-player-menu .np-menu li").each(function(index){
			w += $(this).outerWidth(true);
		});
		this.menu_width = w;
		$(".np-player-menu .np-menu").css("width", w);

		this.updateMenuArrow();
	},
	
	updateMenuArrow: function(){
		if ( this.menu_left < 0 ){
			if ($('.arrow-left').hasClass('disabled')) $('.arrow-left').removeClass('disabled');
			$(document).on('click','.np-player-menu .arrow-left', function(){npplayer.moveMenu('left')});
		}else{
			$('.arrow-left').addClass('disabled');
			$(document).off('click','.np-player-menu .arrow-left', function(){npplayer.moveMenu('left')});
		}
		if ( this.menu_width+this.menu_left > this.menu_container_w ){
			if ($('.arrow-right').hasClass('disabled')) $('.arrow-right').removeClass('disabled');
 			$(document).on('click','.np-player-menu .arrow-right', function(){npplayer.moveMenu('right')});
		}else{
			$('.arrow-right').addClass('disabled');
 			$(document).off('click','.np-player-menu .arrow-right', function(){npplayer.moveMenu('right')});
		}
	},
	
	moveMenu: function(direction){
		var dir = 1;
		if (direction == 'right') dir = -1;
		
		var offset = dir * this.menu_container_w/2;
		var newleft = this.menu_left + offset;
		if (newleft < (this.menu_container_w - this.menu_width)) newleft = this.menu_container_w - this.menu_width;
		if (newleft > 0) newleft = 0;
		var newcss = {"left":newleft};
		$(".np-player-menu .np-menu").animate(newcss, 300);
		this.menu_left = newleft;
		this.updateMenuArrow();
	},
	
	changeMeta: function(){
		$(".np-player-meta .title").text(npplayer.current.title);
		$(".np-player-meta .subtitle").text(npplayer.current.subtitle);
		$(".np-player-meta .title").attr("href", npplayer.current.title_url);
		$(".np-player-meta .subtitle").attr("href", npplayer.current.subtitle_url);
		$(".np-player-meta .reserve").attr("href", npplayer.current.book_url);
	},
	
	playVideo: function(index){
		this.current = this.playlist[index];
		this.current_index = index;
		$(".np-player-menu .np-menu li").removeClass('playing');
		$(".np-player-menu .np-menu li:eq("+index+")").addClass('playing');

		this.changeMeta();
		var newsrc = '//player.vimeo.com/video/'+this.current.vi_video_id+'?'+this.embed_params;
		$('#npplayer').attr('src', newsrc);
	},
		
	onFinish: function(event){
		npplayer.current_index++;
		if (npplayer.current_index == npplayer.playlist.length) npplayer.current_index = 0;
		npplayer.playVideo(npplayer.current_index);
	}
	
};



jQuery(function(){
	/*
	// CHARGEMENT DE LA LIBRAIRIE FROOGALOOP
	var tag = document.createElement('script');
	tag.type = "text/javascript";
	tag.src = "//f.vimeocdn.com/js/froogaloop2.min.js";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	*/
	
	// CHARGEMENT DU PLAYER
	npplayer.init(json_url);

});