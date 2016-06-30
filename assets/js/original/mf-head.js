/**!
 * Configurações do mf como objeto GLOBAL
 */

window.mf = window.mf || {};

/*

Estrutura do objeto

	window {
		mf {
			hosts : {
				assets : '',
				api    : ''
			},
			plugins : {
				vendor : {},
				instances : []
			}
		}
	}

*/

// Hosts

var protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';

window.mf.hosts = {};

window.mf.hosts.assets = protocol + '//c4network.umbler.net/site2/assets';
window.mf.hosts.api    = protocol + '//c4network.umbler.net/site2/api';

if ( window.location.href.indexOf('localhost') >= 0 ) {
	window.mf.hosts.assets = protocol+ '//localhost/tests/4rodas/assets';
	window.mf.hosts.api    = protocol+ '//localhost/tests/4rodas/api';
}

// Scripts que serão carregados

window.mf.plugins = {
	instances : '',
	vendor : new Array()
};

// Bibliotecas

//window.mf.plugins.vendor.push(window.mf.hosts.assets + '/3.0/js/serialize-extends-1.0.min.js');

//window.mf.plugins.vendor.push(host_assets + '/2.0/js/jquery.lazyload.min.js');
//window.mf.plugins.vendor.push(host_assets + '/2.0/js/jquery.mousewheel.min.js');
//window.mf.plugins.vendor.push(host_assets + '/2.0/js/jquery.aviso.min.js');

window.mf.plugins.vendor.push(window.mf.hosts.assets + '/vendor/jquery/dist/jquery.min.js');
window.mf.plugins.vendor.push(window.mf.hosts.assets + '/js/main.min.js');


//window.mf.plugins.vendor.push(protocol + "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3&appId=341129466057379");
