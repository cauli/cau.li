<!DOCTYPE html>

<?php include("comment.php") ?>

<html lang="en">

	<?php include("head.php") ?>

	<style>
		.wrapper a 
		{
			line-height:20px;
			color: #B79FD7;
			border-bottom: 1px solid #B79FD7;
		}

		.wrapper a:active, .wrapper a:hover
		{
			text-decoration:none;
			color: #B79FD7;
			border-bottom: 0px solid #B79FD7;
		}
	</style>

	<body>
		<?php include("components/navbar.php") ?>

	    <div class="focuspoint"
			data-focus-x="0.39" data-focus-y="-0.27" data-focus-w="1920" data-focus-h="400" >
	    	<img id="fitting" src="./img/fs/cover.png">
	    </div>

	    <div class="container wrapper">
	    	<div class="row">
	    		<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<h1 class="col-xs-12 col-sm-9 col-lg-10 cl-lg-5">Além da Floresta das&nbsp;Sombras</h1>   
	    	</div>  

	    	<div class="row">
	    		<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<h3 class="col-xs-12 col-sm-9 col-lg-10">Book / Illustration / Print / Personal</h3>
			</div>

			<div class="row">
				<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<div class="separator col-xs-12 col-sm-9 col-lg-10"></div>
			</div>

			<div class="row">
				<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<div class="description col-xs-12 col-sm-9 col-lg-10">
				<p>An adaptation of the fairy tale <a href="http://www.authorama.com/english-fairy-tales-24.html" target="_blank">Childe Rowland</a> to the format of picturebook</p>
				<p>This book was the product of my bachelor thesis in collaboration with Nai Talamini.</p>
				<p>It consists of 48 fully illustrated pages, and is yet to be published.</p>
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom">
					</div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-lg-10 col-sm-height pull-right" src="./img/fs/1.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom"></div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/fs/2.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom">
						<div class="caption">All the text in the book was handwritten&nbsp;by&nbsp;Nai
							<div class="caption-separator"></div>
						</div><!-- /.caption -->
					</div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/fs/cave_full.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom">
				
					</div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/fs/3.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom"></div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/fs/5.jpg">
				</div>
			</div>

			<div class="row">
				<div class="row-same-height">
					<div class="hidden-xs col-sm-3 col-lg-2 col-sm-height col-bottom"></div>
					<img class="post col-xs-12 col-sm-9 col-lg-10 col-sm-height pull-right" src="./img/fs/4.jpg">
				</div>
			</div>
	    </div><!-- /.container -->

	    <?php include("footer.php") ?>
		<?php include("components/scripts.php") ?>
	</body>
</html>