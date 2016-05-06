<!DOCTYPE html>

<?php include("comment.php") ?>

<html lang="en">

	<?php include("head.php") ?>

	<style>
		.wrapper a 
		{
			line-height:20px;
			color: #5ccaac;
			border-bottom: 1px solid #5ccaac;
		}

		.wrapper a:active, .wrapper a:hover
		{
			text-decoration:none;
			color: #5ccaac;
			border-bottom: 0px solid #5ccaac;
		}
	</style>

	<body>
		<?php include("components/navbar.php") ?>

	    <div class="focuspoint"
			data-focus-x="0.02" data-focus-y="0.00" data-focus-w="1920" data-focus-h="400" >
	    	<img id="fitting" src="./img/cwm/cover.jpg">
	    </div>

	    <div class="container wrapper">
	    	<div class="row">
	    		<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<h1 class="col-xs-12 col-sm-9 col-lg-10 cl-lg-5">Check with Mates</h1>   
	    	</div>  

	    	<div class="row">
	    		<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<h3 class="col-xs-12 col-sm-9 col-lg-10">Game Design / Game Dev / Experiment / Personal / Multiplayer</h3>
			</div>

			<div class="row">
				<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<div class="separator col-xs-12 col-sm-9 col-lg-10"></div>
			</div>

			<div class="row">
				<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<div class="description col-xs-12 col-sm-9 col-lg-10">
				<p>Real-time online team chess variant / experiment where players of each team makes moves by&nbsp;voting on them.</p>
				<p>Based on the open source projects <a href="https://github.com/romanmatiasko/reti-chess">Reti Chess</a>, <a href="https://github.com/jhlywa/chess.js/">chess.js</a>&nbsp;&amp; <a href="http://nodejs.org/">Node.js</a>.</p>
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom">
					</div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-lg-10 col-sm-height pull-right" src="./img/cwm/game.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom">
						<div class="caption">User ratings are calculated using the average ELO of the opposing&nbsp;team
							<div class="caption-separator"></div>
						</div><!-- /.caption -->
					</div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/cwm/stats.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom">
						<div class="caption">People can create rooms to play with their friends, and other game modes are going to be created&nbsp;soon.
							<div class="caption-separator"></div>
						</div><!-- /.caption -->
					</div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/cwm/lobby.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom">
				
					</div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/cwm/login.jpg">
				</div>
			</div>

	    </div><!-- /.container -->

	    <?php include("footer.php") ?>
		<?php include("components/scripts.php") ?>
	</body>
</html>