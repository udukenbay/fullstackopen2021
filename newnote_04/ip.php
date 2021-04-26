<?php
// $json_data = json_encode($posts);
// file_put_contents('data.json', $json_data);

$json = file_get_contents('data.json');
$obj = json_decode($json);
var_dump($obj);
?>
<?PHP
header('Access-Control-Allow-Origin: *');
?>