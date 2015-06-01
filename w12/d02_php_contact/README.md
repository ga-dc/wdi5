# Making a "Contact Me" form with PHP

## LOs

- Start Apache running locally on your computer.
- Write a PHP function that contains variables.
- Connect PHPMailer to your e-mail account.
- Send an e-mail via an HTML form using PHPMailer.

## What is PHP, and why does everyone hate it?

- PHP evolved organically, so it's a huge mess
- Very procedural, and very lenient with rules
- Named poorly

At the same time...
- Really easy to pick up
- Available everywhere

## Run your first PHP script

- `php -f filename.php`
- `apachectl start`
  - What does the error message say?
- Run `localhost`
  - Where is everything kept?
    - I actually don't remember. Find out!

## You Do (5 min): What does Fizzbuzz look like in PHP?

- What does a PHP script look like? (`<?php ?>`)
- What does a variable look like?
- How do you define a function?

## You Do (5 min): Make PHP output Fizzbuzz to a file

## GET and POST in PHP

- Look at `$_SERVER`. What does it give you?
- Add in a GET parameter
- Make a POST request with Postman

## You Do (10 min): Make an HTML form that POSTs to Fizzbuzz

PHP should output the contents to a file AND return a success message in JSON.

## PHP Gems

It doesn't really have any. You just download a library and put it in your root folder.

Download PHPmailer: https://github.com/PHPMailer/PHPMailer 

## Make the form!

```
require "PHPMailerAutoload.php";
$mail = new PHPMailer;    
$mail->isSMTP();
$mail->Host = "something.website.come";
$mail->SMTPAuth = true;
$mail->Username = "hello@robertakarobin.com";
$mail->Password = $_password;
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;    
$mail->SetFrom($emailMe, $fromName);
$mail->AddReplyTo($emailMe, $fromName);
$mail->AddAddress($emailThem);
$mail->AddCC($emailMe);
$mail->WordWrap = 5000;
$mail->isHTML(false);
$mail->ContentType = "text/plain";
$mail->Subject = $subject;
$mail->Body = $body;
if($mail->send()){
  echo(json_encode(array("success" => true, "message" => "yay")));
}else{
  echo(json_encode(array("success" => false, "message" => "boo")));
}
```
