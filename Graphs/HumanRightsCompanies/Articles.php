<?php
$m = new MongoClient(); // connect
$db = $m->selectDB($_POST['db']);
$collection = $db->selectCollection($_POST['collection']);
$query = array("Related Companies"=>new MongoId($_POST['id']));
$display = array("Publication_title"=>1, "_id"=>1);
$cursor = $collection->find($query,$display);
  $result = array();
  foreach ($cursor as $doc) {
      // do something to each document
      array_push($result, $doc);
  }
echo json_encode($result);
?>
