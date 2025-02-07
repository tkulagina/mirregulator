<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

<<<<<<< HEAD
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
=======
require 'PHPMailer-6.9.2/src/Exception.php';
require 'PHPMailer-6.9.2/src/PHPMailer.php';
>>>>>>> 8eb0042602ec02bca2ae006ec7389d82f99fcb60

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('uk', 'phpmailer/language/');
$mail->IsHTML(true);

// Встановлення відправника
$mail->setFrom('main@regulatormir.com');
// Встановлення одержувача
$mail->addAddress('regulatormir@gmail.com');
// Тема листа
$mail->Subject = 'Нове замовлення!';

// Формування тіла листа
$body = '<h1>Нове замовлення!</h1>';

if (!empty($_POST['name'])) {
    $body .= '<p><strong>Ім\'я:</strong> ' . htmlspecialchars($_POST['name']) . '</p>';
}

if (!empty($_POST['email'])) {
    $body .= '<p><strong>E-mail:</strong> ' . htmlspecialchars($_POST['email']) . '</p>';
}

if (!empty($_POST['message'])) {
    $body .= '<p><strong>Повідомлення:</strong> ' . htmlspecialchars($_POST['message']) . '</p>';
}

$mail->Body = $body;

try {
    // Відправка листа
    if (!$mail->send()) {
        $message = 'Помилка при відправці листа.';
    } else {
        $message = 'Дані успішно надіслані!';
    }
} catch (Exception $e) {
    $message = 'Помилка: ' . $mail->ErrorInfo;
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
