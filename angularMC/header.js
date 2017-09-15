angular.
module('appIndex').
component('ngheader', {
  template:
      `
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">LuYuan</a>
          </div>
      
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
              <ul class="nav navbar-nav">
                  <li class="active"><a href="index.html"><span class="glyphicon glyphicon-home"></span>首页</a></li>
                  <li><a href="#"><span class="glyphicon glyphicon-globe"></span>目的地</a></li>
              </ul>
              
              <ul class="nav navbar-nav navbar-right">
                  <li class="search-head hidden-xs">
                      <form action="#" method="post" class="search-form">
                          <input type="search" name="search" id="search" value="" />
                          <button class="button btn-search" type="button"><span class="glyphicon glyphicon-search"></span></button>
                      </form>
                  </li>
                  <li class="visible-xs">
                      <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search for...">
                          <span class="input-group-btn">
                              <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                          </span>
                      </div><!-- /input-group -->
                  </li>
                  <li class="dropdown">
                      <a class="dropdown-toggle" data-toggle="dropdown">登录/注册 <b class="caret"></b></a>
                      <ul class="dropdown-menu">
                          <li><a href="login.html">登录</a></li>
                          <li><a href="register.html">注册</a></li>
                      </ul>
                  </li>
              </ul>
          </div><!-- /.navbar-collapse -->
      </div>
  </nav>
      `,
  controller: function ngHeaderController() {
    
  }
});