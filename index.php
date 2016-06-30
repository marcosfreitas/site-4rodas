<!DOCTYPE html>
<!--[if gte IE 9]><html dir="ltr" lang="pt-BR" class="ie9 ie"><![endif]-->
<!--[if IE 8]><html dir="ltr" lang="pt-BR" class="ie8 ie"><![endif]-->
<!--[if lte IE 7]><html dir="ltr" lang="pt-BR" class="ie7 ie"><![endif]-->
<!--[if !IE]><!--><html dir="ltr" lang="pt-BR"><!--<![endif]-->
<head>

	<!-- seo -->
	<?php include("assets/includes/mf-seo.php"); ?>

	<title>4Rodas</title>

	<link rel="stylesheet" href="assets/css/default.css">
	<link rel="stylesheet" href="assets/css/style.css">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

	<!-- css/js -->

	<!--[if lt IE 9]>
	    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
	<![endif]-->

	<?php include("assets/includes/mf-head.php"); ?>


</head>

<body class="mf-home">

	<!--<div class="mf-container">
		<div class="mf-ads"></div>
	</div>-->

	<?php #include("assets/includes/mf-menu.php"); ?>

	<div class="mf-document">

		<!-- SEO -->
			<div itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
				<a href="http://www.exemplo.com" itemprop="url"><span itemprop="title">Início</span></a> &rsaquo;
			</div>
			<div itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
				<a href="http://www.exemplo.com/" itemprop="url"><span itemprop="title">exemplo.com</span></a>
			</div>
		<!-- // SEO -->

		<?php include("assets/includes/mf-header.php"); ?>

		<?php include("content.php"); ?>

		<?php include("assets/includes/mf-footer.php"); ?>
	</div>

<div class="mf-overlay"></div>
</body>
</html>
