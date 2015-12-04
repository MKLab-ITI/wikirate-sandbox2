<?php 
require 'vendor/autoload.php';
$old_domain = 'http://160.40.51.30:8080/WikiRateAPI';
$domain = 'http://160.40.51.30:8080/WikiRateAPI_NEW';

$app = new \Slim\Slim(array(
    'debug' => false
));

$res = $app->response();
$res['Content-Type'] = 'application/json';

$app->get('/companies(/:fieldName(/:fieldValue))', function ($fieldName = null, $fieldValue = null) use ($app, $domain) {
	//create original URL
	$arr = array(
		'fieldName'   => is_null($fieldName) ? $app->request->params('fieldName') : $fieldName,
		'fieldValue'  => is_null($fieldValue) ? $app->request->params('fieldValue') : $fieldValue,
		'perPageDocs' => $app->request->params('perPageDocs'),
		'page'        => $app->request->params('page')
	);
	$url = $domain . '/Companies?' . http_build_query($arr);

	$json = file_get_contents($url);
	echo $json;
});

$app->get('/snippets(/:fieldName(/:fieldValue))', function ($fieldName = null, $fieldValue = null) use ($app, $domain) {
	//create original URL
	$arr = array(
		'fieldName'   => is_null($fieldName) ? $app->request->params('fieldName') : $fieldName,
		'fieldValue'  => is_null($fieldValue) ? $app->request->params('fieldValue') : $fieldValue,
		'snippetName'  => $app->request->params('snippetName'),
		'snippetValue' => $app->request->params('snippetValue'),
		'perPageDocs'  => $app->request->params('perPageDocs'),
		'page'         => $app->request->params('page')
	);
	$url = $domain . '/Snippets?' . http_build_query($arr);

	$json = file_get_contents($url);
	echo $json;
});

$app->get('/articles(/:fieldName(/:fieldValue))', function ($fieldName = null, $fieldValue = null) use ($app, $old_domain) {
	//create original URL
	$arr = array(
		'fieldName'   => is_null($fieldName) ? $app->request->params('fieldName') : $fieldName,
		'fieldValue'  => is_null($fieldValue) ? $app->request->params('fieldValue') : $fieldValue,
		'perPageDocs' => $app->request->params('perPageDocs'),
		'page'        => $app->request->params('page')
	);
	$url = $domain . '/Articles?' . http_build_query($arr);

	$json = file_get_contents($url);
	echo $json;
});

$app->run();
