<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="btn-menu">MENU</span>
      </button>
      <a class="navbar-brand" id="brand" href="./"><img class="top-logo" height="45" src="img/logo90.png" alt="Cau.li"></a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <?php 
        if(!isset($about))
        {
          echo '<li class="active"><a href="./">WORK</a></li><li><a href="./about.php">ABOUT</a></li>';
        }
        else
        {
          echo '<li><a href="./">WORK</a></li><li class="active"><a href="./about.php">ABOUT</a></li>';
        }
        ?>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>