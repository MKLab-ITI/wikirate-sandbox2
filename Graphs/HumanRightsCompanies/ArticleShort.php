<?php
$m = new MongoClient(); // connect
$db = $m->selectDB($_POST['db']);
$collection = $db->selectCollection($_POST['collection']);
$query = array("_id"=>($_POST['id']));
$display = array("Publication_title"=>1, "Publication_text"=>1);
$document = $collection->findOne($query,$display);
echo json_encode($document);
?>