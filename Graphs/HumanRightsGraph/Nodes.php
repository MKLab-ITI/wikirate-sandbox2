<?php
$m = new MongoClient(); // connect
$db = $m->selectDB($_POST['db']);
$collection = $db->selectCollection($_POST['collection']);
$document = $collection->findOne();
echo json_encode($document);
?>
