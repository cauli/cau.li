<!DOCTYPE html>

<?php include("comment.php") ?>

<html lang="en">

	<?php include("head.php") ?>

	<style>
		.wrapper a 
		{
			line-height:20px;
			color: #F6C230;
			border-bottom: 1px solid #F6C230;
		}

		.wrapper a:active, .wrapper a:hover
		{
			text-decoration:none;
			color: #F6C230;
			border-bottom: 0px solid #F6C230;
		}
	</style>
	<body>
		<?php include("components/navbar.php") ?>

	    <div class="focuspoint"
			data-focus-x="-0.29" data-focus-y="0.10" data-focus-w="1920" data-focus-h="400" >
	    	<img id="fitting" src="./img/ctl460k/cover.jpg">
	    </div>

	    <div class="container wrapper">
	    	<div class="row">
	    		<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<h1 class="col-xs-12 col-sm-9 col-lg-10 cl-lg-5">CTL460K Station</h1>   
	    	</div>  

	    	<div class="row">
	    		<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<h3 class="col-xs-12 col-sm-9 col-lg-10">Game Design / Game Dev / Illustration / Personal / Time-constrained (48h)</h3>
			</div>

			<div class="row">
				<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<div class="separator col-xs-12 col-sm-9 col-lg-10"></div>
			</div>

			<div class="row">
				<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<div class="description col-xs-12 col-sm-9 col-lg-10">
					<p>An adventure game about a mysterious cosmonaut and his computer board, Mikhail.</p>
					<p>Game prototype made in Unity 3D in 48 hours for Global Game Jam 2015.</p>
					<p>My share was mostly programming, game design and a little bit of 2D art.</p>
					<div class="top-30">
						<a class="destaque" href="http://cau.li/ggj" target="_blank">Play it now</a><br>
						<a class="destaque" href="http://globalgamejam.org/2015/games/ctl460k-station" target="_blank">Official page on GGJ</a><br>
						<a class="destaque" href="https://github.com/cauli" target="_blank">Source code</a><br>
						Press coverage: <a class="destaque" href="http://overloadr.com.br/especiais/listas/2015/01/elegemos-nossos-jogos-favoritos-da-global-game-jam-2015-feitos-no-brasil/" target="_blank">Overloadr</a>, <a class="destaque" href="http://www.kotaku.com.br/global-game-jam-2015-menos-reality-show-e-mais-dragon-ball-z/" target="_blank">Kotaku Brasil</a>, and again on <a class="destaque" href="http://www.kotaku.com.br/cinco-jogos-brasileiros-interessantes-desenvolvidos-na-global-game-jam-2015/" target="_blank">Kotaku Brasil</a><br>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom"></div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-lg-10 col-sm-height pull-right" src="./img/ctl460k/initial.png">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom"></div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/ctl460k/main_ctl460k.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom">
						<div class="caption">
						</div>
					</div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/ctl460k/later_2_ctl460k.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom">
						<div class="caption">
						    Cauli Tomaz<br>
							Guilherme Gonçalves<br>
							Talles Borges<br>
							<a href="https://soundcloud.com/leonardolimasoundworks" target="_blank">Leonardo Lima</a>
							<div class="caption-separator"></div>
						</div><!-- /.caption -->
					</div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/ctl460k/credits_ctl460k.jpg">
				</div>
			</div>

	    </div><!-- /.container -->

	    <?php include("footer.php") ?>
		<?php include("components/scripts.php") ?>
	</body>
</html>