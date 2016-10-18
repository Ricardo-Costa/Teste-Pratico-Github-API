/**
 * Created by Ricardo on 18/10/2016.
 *
 * Arquivo de funções
 */

/**
 * Realiza pesquisa por nomes de usuários
 */
function searchUsers() {
    // Inpute alvo
    var inputUserName = $('#input-user-name');
    if (inputUserName.val() != '') {
        $.ajax({
            url:  BASE_URL_GITHUB_API + 'search/users?q=' + inputUserName.val(),
            type: "GET",
            dataType: "json",
            success: function (data) {
                if (data['total_count'] != undefined) {
                    var // Recebe usuários
                        users = data['items'],
                        // Formata estrutura da tabela
                        dataHtml = '';
                    for(var i=0; i < users.length; i++) {
                        dataHtml += '<tr>' +
                            '<td>' +
                            '<img class="user-avatar" src="'+ users[i]['avatar_url'] +'" width="50px" height="50px" />' +
                            '<a class="user-name-login" target="_BLANK" href="'+ users[i]['html_url'] +'" title="' + users[i]['login'] + '"> ' +
                            users[i]['login'] + '</a></td>' +
                            '<td><a target="_BLANK" href="'+ users[i]['html_url']
                            +'" title="' + users[i]['login'] + '"> ' + users[i]['html_url'] + '</a></td>' +
                            '<td>'+ users[i]['id'] +'</td><td>' +
                            '<button class="btn btn-default" ' +
                            'data-toggle="tooltip" data-placement="top" title="Detalhes" onclick="' +

                            // Setar parâmetros da função showDetails
                            'showDetails(\''+ users[i]['login'] +'\',\''+ users[i]['avatar_url'] +'\',\''+ users[i]['html_url'] +'\')">' +

                            '<span class="glyphicon glyphicon-zoom-in"></span>' +
                            '</button>' +
                            '</td>' +
                            '</tr>';
                    }

                    // Aplicar conteúdo no tbody da tabela de listagem de pesquisa
                    $('#tbody-list-users').html(dataHtml +
                        '<script type="text/javascript">' +
                        '$(function () {$(\'[data-toggle="tooltip"]\').tooltip()});' +
                        '</script>'
                    );

                } else {
                    bootbox.alert(MSG_ERROR);
                }
            },
            error: function () {
                bootbox.alert(MSG_ERROR);
            }
        });
    }
}

/**
 * Exibir detalhes sobre o Usuário
 *
 * @param userName
 * @param userAvatar
 * @param userUrl
 */
function showDetails(userName, userAvatar, userUrl) {
    // Buscar repositórios deste usuário
    getUserRepositories(userName, function (data) {
        // Formatar conteúdo HTML de apresentação da caixa
        var htmlContext =
            '<div class="row">' +
            '<div class="col-lg-12">' +
            '<img class="user-avatar" src="'+ userAvatar +'" width="70px" height="70px" /><br/>' +
            '<a class="user-name-login" target="_BLANK" href="'+ userUrl +
            '" title="' + userName + '"> ' + userName + '</a>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-lg-12">' +
            '<h4>Estes são os repositórios deste usuário:</h4>' ;

        // Checar se retornou repositórios
        if (data[0] != undefined) {
            // Recebe conteúdo do corpo da tabela de listagem
            var tableBodyHtml = '';
            for (var i=0; i < data.length; i++) {
                tableBodyHtml +=
                    '<tr><td>'+ data[i]['name'] +'</td>' + '<td>' +
                    '<a target="_BLANK" href="'+ BASE_URL_GITHUB + data[i]['full_name'] +'">' +
                    ' https://github.com/'+ data[i]['full_name'] + '</a>'
                    +'</td></tr>';
            }
            // Formatar Tabela de listagem
            htmlContext +=
                '<table class="table table-bordered table-striped">' +
                '<thead><tr><th>Nome</th><th>Página do Respositório</th></tr></thead>' +
                '<tbody></tbody>'+ tableBodyHtml +'</table>';
            delete (tableBodyHtml);

        } else {
            // Informar resultado vazio
            htmlContext += '<p><i>Ops!! Nenhum repositório encontrado...</i></p>';
        }
        // Encerrar formatação
        htmlContext += '</div></div>';

        // Exibir caixa
        bootbox.dialog({
            title: 'Destalhes do usuário: <span class="user-name-login">'+ userName +'</span>',
            message: htmlContext,
            closeButton: true
        });
    });
}

/**
 * Buscar repositórios do usuário
 *
 * @param username
 * @param callback
 */
function getUserRepositories(username, callback) {
    $.ajax({
        url:  BASE_URL_GITHUB_API + 'users/'+ username +'/repos',
        type: "GET",
        dataType: "json",
        success: function (data) {
            callback(data);
        },
        error: function () {
            callback([]);
        }
    });
}