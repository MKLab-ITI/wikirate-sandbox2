<?php 
	//make this more secure... AFTER the review meeting ;)
	
	header('content-type: application/json; charset=utf-8');

	//$server = 'http://160.40.50.207/wikirate/';
	//$server = 'http://160.40.50.223/wikirate-sandbox/api/index.php/';
	$server = 'http://160.40.51.30:8080/WikiRateAPI/';


//http://160.40.51.30:8080/WikiRateAPI/Companies?fieldName=Company_name&fieldValue=Siemens


	$action = array_key_exists('action', $_REQUEST) 
	        ? $_REQUEST['action'] 
	        : null;

	switch ($action) {
		case 'recommendations':
			$url = $server . 'Companies?fieldName=Company_name&fieldValue='.$_REQUEST['company'];
			break;
		case 'statistics':
			$url = $server . 'statistics';
			break;
		case 'wikirateSources':
			$url = 'http://wikirate.org/Sources_url.json?item=id_atom';
			break;
		case 'nearImage':
			$url = $server . 'similar/media/url?url='.$_REQUEST['url'];
			break;
		case 'nearKeyword':
			$q = $_REQUEST['q'];
			$pieces = explode(" ", $q);
			$comma_separated = implode(",", $pieces);
			$url = $server . 'search/items?q='.$comma_separated;
			break;
		case 'addSource':
			//type = {'Twitter', 'Facebook', 'Rss'}
			$url = $server . 'source/add?type='.$_REQUEST['type'].'&source='.$_REQUEST['source'];
			break;
		case 'deleteSource':
			//type = {'Twitter', 'Facebook', 'Rss'}
			$url = $server . 'source/delete?type='.$_REQUEST['type'].'&source='.$_REQUEST['source'];
			break;
		case 'listSources':
			$url = $server . 'source/list';
			break;

	}

	$json = file_get_contents($url);
	echo $json;


	/*http://160.40.51.18/wikirate/search/items?q=oil
	http://160.40.51.18/rockmongo
	http://160.40.51.18:8080/solr/#/Wikirate
	http://160.40.51.18/wikirate/similar/media/url?url=http://www.in.gr/image.jpg
	http://160.40.51.18/wikirate/statistics
	http://wikirate.org/Sources_url.json?pretty=true
	http://wikirate.org/Sources_url.json?pretty=true&item=id_atom	


ADD: http://160.40.50.207/wikirate/source/add?type=twitter&source=greeneconpost
DEL: http://160.40.50.207/wikirate/source/delete?type=twitter&source=greeneconpost
LIST: http://160.40.50.207/wikirate/source/list 


*/
?>