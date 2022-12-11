<?php

  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  if(!empty($name) && !empty($email) && !empty($message)) {
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $receiver = "raghad200287@gmail.com";
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nMessage: $message\n";
      $sender = "From: $email";

      if (mail($receiver, $subject, $body, $sender)) {
        echo "your message sent successfully";
      } else {
        echo "Sorry, failed to send your message!";
      }
    } else {
      echo "Please enter a valid email!";
    }

  } else {
    echo "Please fill out all the fields..";
  }

?>