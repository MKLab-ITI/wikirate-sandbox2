<?php 
	//make this more secure... AFTER the review meeting ;)
	header('content-type: application/json; charset=utf-8');
	

	//$server = 'http://160.40.50.207/wikirate/';
	//$server = 'http://160.40.50.223/wikirate-sandbox/api/index.php/';
	$server = 'http://160.40.51.30:8080/WikiRateAPI/';


	//http://160.40.51.30:8080/WikiRateAPI/Companies?fieldName=Company_name&fieldValue=Siemens
  	//http://160.40.51.30:8080/WikiRateAPI/HumanRightsArticles?ReferredCompany=552fd5ddebd4f7d398f545c8&Category=Labour
  	//http://160.40.51.30:8080/WikiRateAPI/Snippets?fieldName=Company_name&fieldValue=Siemens

	$action = array_key_exists('action', $_REQUEST) 
	        ? $_REQUEST['action'] 
	        : null;

	switch ($action) {
		case 'companies':
			$url = $server . 'Companies?fieldName=Company_name&fieldValue='.urlencode($_REQUEST['company']);
			break;
		case 'recommendations':
			$url = $server . 'HumanRightsArticles?ReferredCompany='.$_REQUEST['company_id'].'&Category='.urlencode($_REQUEST['topic']);
			break;
		case 'metrics':
			$url = $server . 'Snippets?fieldName=id&fieldValue='.$_REQUEST['company_id'];
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