var navInfo = window.navigator.appVersion.toLowerCase();
var so = 'Sistema Operativo';
function retornarSO()
{
	if(navInfo.indexOf('windows') != -1)
	{
		so = 'Windows';
	}
	else if(navInfo.indexOf('linux') != -1)
	{
		so = 'Linux';
	}
	else if(navInfo.indexOf('mac') != -1)
	{
		so = 'Macintosh';
	}
	return so
}
