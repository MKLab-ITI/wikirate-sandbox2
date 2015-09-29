<?php 
	// Set content-type
	header('content-type: application/json; charset=utf-8');

	// Get the url
	$url = array_key_exists('url', $_REQUEST) 
	        ? $_REQUEST['url'] 
	        : null;

	if(!filter_var($url, FILTER_VALIDATE_URL)) {
		$result = array(
			'valid'  => false,
			'title'	 => null,
			'images' => null
		);
		ob_start('ob_gzhandler');
		echo json_encode($result);
		return;
	}



	// Create image finder
	include('image_finder.class.php');
	$finder = new ImageFinder($url);

	// Get images
	$images = $finder->get_images();
	$title = $finder->get_title();

	// Output result
	$result = array(
		'valid'  => true,
		'title'	 => $title,
		'images' => $images
	);
	
	ob_start('ob_gzhandler');
	echo json_encode($result);

?>