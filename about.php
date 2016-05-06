<!DOCTYPE html>

<?php include("comment.php") ?>

<html lang="en">

	<?php include("head.php") ?>

	<style>
		.wrapper a 
		{
			line-height:20px;
			color: #e1e1e1;
			border-bottom: 1px solid #e1e1e1;
		}

		.wrapper a:active, .wrapper a:hover
		{
			text-decoration:none;
			color: #e1e1e1;
			border-bottom: 0px solid #e1e1e1;
		}
	</style>

	<body>
		<?php $about = true ?>
		<?php include("components/navbar.php") ?>

	    <div class="focuspoint"
			data-focus-x="0.15" data-focus-y="-0.1" data-focus-w="1920" data-focus-h="400" >
	    	<img id="fitting" src="./img/about/cauli.jpg">
	    </div>

	    <div class="container wrapper">
	    	<div class="row">
	    		<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<h1 class="col-xs-12 col-sm-9 col-lg-10 cl-lg-5">About me</h1>   
	    	</div>  

	    	<div class="row">
	    		<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<h3 class="col-xs-12 col-sm-9 col-lg-10">Designer & Developer from Brazil</h3>
			</div>

			<div class="row">
				<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<div class="separator col-xs-12 col-sm-9 col-lg-10"></div>
			</div>

			<div class="row">
				<div class="hidden-xs col-sm-3 col-lg-2"></div>
				<div class="description col-xs-12 col-sm-9 col-lg-10">
				<p>I'm a designer and developer currently living in Curitiba - Brazil.</p>
				<br>
				<p>Contact me through <strong>contato@cau.li</strong> if you need a hand with anything.</p>
				<br>
				<p>Currently, I'm working as an Full Stack developer at <a href="http://wiseup.com.br" target="_blank">Wise Up</a>.</p>
				</div>
			</div>

	    </div><!-- /.container -->

	    <?php include("footer.php") ?>
		<?php include("components/scripts.php") ?>
	</body>
</html>