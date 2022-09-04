<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// переменные из нашей формы
$name = $_POST['nameUser'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$typeMes = $_POST['type'];
$question = $_POST['question'];


// настройка почтового ящика
$mail->isSMTP();                                // Настраиваем почту для SMTP
$mail->Host = 'smtp.ukr.net';  															// Основкой SMTP сервер
$mail->SMTPAuth = true;                         // Включить аутентификацию SMTP
$mail->Username = 'zartheit88@ukr.net';    // логин от почты с которой будут отправляться письма
$mail->Password = 'o8c2owalizWrT1h8';            // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                      // Включить шифрование ssl
$mail->Port = 465;                                 // TCP порт для подключения / этот порт может отличаться у других провайдеров

$mail->setFrom('zartheit88@ukr.net');      // от кого будет уходить письмо для пользователя
$mail->addAddress('katarina088@gmail.com');                          // Кому будет приходить заявка
//$mail->addAddress('ellen@example.com');               // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                                  // Установить формат электронной почты в HTML

$mail->Subject = 'Заявка з сайту видавництва Дружко';
$mail->Body    = '' . $name . ' надіслав(-ла) запит. <br> Телефон: ' . $phone . ', електронна адреса:' . $email . '. <br> Тип запиту: ' . $typeMes . '<br> Текст звернення: ' . $question;
$mail->AltBody = '';


if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: contacts.html');
}

?>
