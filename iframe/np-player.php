<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="Content-Language" content="fr">
		<title>Nous Productions - Concerts, spectacles, événementiel</title>
		<meta name="identifier-url" content="http://www.nousproductions.com/">
		<meta name="description" content="NOUS PRODUCTIONS - Organisation de concerts, spectacles, événementiel. Trouvez et achetez vos places pour les concerts des plus grands artistes internationaux et français.">
		<meta name="keywords" content="nousproductions, nous productions, nous, productions, concerts, tournées, dates, organisation.">
		<meta name="author" content="Nous Productions">
		<meta name="copyright" content="www.nousproductions.com">
		<meta property="og:title" content="Nous Productions - Concerts, spectacles, événementiel">
		<meta property="og:url" content="http://www.nousproductions.com/">
		<meta property="og:image" content="http://www.nousproductions.com/pics/charte/bg-logo.png">
		<meta property="og:site_name" content="Nous Productions">
		<link type="text/css" rel="stylesheet" href="../css/np-player.css" media="screen">		
	</head>
	<body>
	
		<div class="np-player">
			<div class="np-player-video">
				<div id="npplayer"></div>
			</div>        
			<div class="np-player-meta">
				<a class="reserve" href="">Réservez</a>
				<div class="left">
					<a class="title" href=""></a>
					<a class="subtitle" href=""></a>
				</div>
			</div>
			<div class="np-player-menu">
				<div class="np-menu-container">
					<ul class="np-menu"></ul>
				</div>
				<div class="arrow arrow-left disabled"><i class="icon-chevron-left"></i></div>
				<div class="arrow arrow-right disabled"><i class="icon-chevron-right"></i></div>
			</div>
		</div>
		
		<script type="text/javascript" src="../js/jquery-1.11.2.min.js"></script>
		<?php $json_url = '../data/'.$_GET['d'].'/'.$_GET['d'].'.json';?>
		<script type="text/javascript"> var json_url = '<?php echo $json_url ?>'; </script>
		<script type="text/javascript" src="../js/np-player-vi.js"></script>
	</body>
</html>