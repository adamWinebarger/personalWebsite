
<?php

$directory = 'images/photographyPhotos/Rev2/';
$files = scandir($directory);
$imageURLs = [];

foreach ($files as $file) {
  $filePath = $directory . $file;

  //Check that image ends in JPG... now Webp I guess
  if (is_file($filePath) && (pathinfo($filePath, PATHINFO_EXTENSION) === 'WEBP' || pathinfo($filePath, PATHINFO_EXTENSION) === 'webp')) {
    //This is assuming project is served from web root
    $scheme = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';

    // Construct the absolute URL using the determined scheme and host
    //$imageURL = $scheme . '://' . $_SERVER['HTTP_HOST'] . '/' . $filePath;

    $imageURL = $filePath;

    $imageURLs[] = $imageURL;
  }
}

// Output the image URLs as JSON
header('Content-Type: application/json');
echo json_encode($imageURLs);

?>
