<?php
$m = new MongoClient(); // connect
$db = $m->selectDB($_POST['db']);
$collection = $db->selectCollection($_POST['collection']);
$query = array("_id"=>$_POST['id']);
$document = $collection->findOne($query);
echo json_encode($document);
?>
