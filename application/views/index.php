<?php defined('BASE_INDEX') or exit('Acesso negado!');
/**
 * Created by PhpStorm.
 * User: Ricardo
 * Date: 18/10/2016
 * Time: 10:20
 */
?>
<!DOCTYPE html>
<html lang="pt-Br">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Teste Prático</title>

        <!-- CSS - Outros -->
        <link href="<?php echo BASE_URL . 'css/bootstrap.min.css'; ?>" rel="stylesheet">
        <!-- CSS - sistema -->
        <link href="<?php echo BASE_URL . 'css/app/style.global.css'; ?>" rel="stylesheet">

        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>


    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#"><?php echo SYSTEM_NAME; ?> | GitHub API</a>
            </div>
        </div>
    </nav>

    <div id="main-container" class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Pesquisar usuários do GitHub.</h3>
                    </div>
                    <div class="panel-body">


                        <div class="row center-block">
                            <div class="col-lg-12">
                                <form id="form-search-users" class="form-horizontal" method="post" onsubmit="event.preventDefault();return false;" action="">
                                    <div class="col-lg-3"></div>
                                    <div class="col-lg-6 form-group">
                                        <div class="input-group">
                                            <input id="input-user-name" type="text" class="form-control" placeholder="Pesquisar por usuário..." required >
                                        <span class="input-group-btn">
                                        <button id="btn-search-users" class="btn btn-default" type="button">Pesquisar</button>
                                        </span>
                                        </div><!-- /input-group -->
                                    </div>
                                </form>
                            </div><!-- /.col-lg-6 -->
                        </div><!-- /.row -->


                        <!-- Table -->
                        <table id="table-list-users" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Usuário</th>
                                    <th>Página de Perfil</th>
                                    <th>ID</th>
                                    <th>Opções</th>
                                </tr>
                            </thead>
                            <tbody id="tbody-list-users"></tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>



    <!-- JS - Outros -->
    <script src="<?php echo BASE_URL . 'js/jquery.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'js/jquery.form.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'js/bootstrap.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'js/bootbox.min.js'; ?>"></script>
    <!-- JS - Sistema -->
    <script src="<?php echo BASE_URL . 'js/app/config.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'js/app/start.application.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'js/app/functions.global.js'; ?>"></script>


    <footer class="footer">
        <span><?php echo SYSTEM_NAME; ?> - Ricardo Costa - 18/10/2016</span>
    </footer>
    </body>
</html>