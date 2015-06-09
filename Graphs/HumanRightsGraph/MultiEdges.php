<?php
$m = new MongoClient(); // connect
$db = $m->selectDB($_POST['db']);
$collection = $db->selectCollection($_POST['collection']);
$query = array("source"=>$_POST['id']);
$cursor = $collection->find($query);
  $result = array();
  foreach ($cursor as $doc) {
      array_push($result, $doc);
  }
echo json_encode($result);
?>
