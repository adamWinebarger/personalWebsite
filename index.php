<?php
  //Get requested URL path
  $requests = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

  //Define available routes
  $routes = [
    '/' => 'index.html',
    'wav_reverser' => 'wav_reverser.html'
  ];

  //Check if requested route exists in the array
  if (array_key_exists($request, $routes)) {
    //Serve corresponding file
    include $routes[$request];
  } else {
    //Serve 404 page
    http_response_code(404);
    include '404.html';
  }

 ?>
