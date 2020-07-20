<?php

    require ("class.phpmailer.php");

    if(isset($_POST['submit'])){
        $name=$_POST['name']; // Get Name value from HTML Form
        $mobile=$_POST['mobile'];  // Get Mobile No
        $email=$_POST['email'];  // Get Email Value
        $message=$_POST['message']; // Get Message Value


        $mail = new PHPMailer();

        $mail->IsSMTP();
        $mail->Host = "test.scienceinfinity.org"; // Your Domain Name

        $mail->SMTPAuth = false;
        $mail->Port = 25;
        $mail->Username = "info@scienceinfinity.org"; // Your Email ID
        $mail->Password = "Blue.Water1"; // Password of your email id

        $mail->From = "info@scienceinfinity.org";
        $mail->FromName = "ScienceInfinity Team";
        $mail->AddAddress ("info@scienceinfinity.com"); // On which email id you want to get the message
        $mail->AddCC ($email);

        $mail->IsHTML(true);

        $mail->Subject = "Enquiry from Website submitted by $name"; // This is your subject

        // HTML Message Starts here

        $mail->Body = "
        <html>
            <body>
                <table style='width:600px;'>
                    <tbody>
                        <tr>
                            <td style='width:150px'><strong>Name: </strong></td>
                            <td style='width:400px'>$name</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Email ID: </strong></td>
                            <td style='width:400px'>$email</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Mobile No: </strong></td>
                            <td style='width:400px'>$mobile</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Message: </strong></td>
                            <td style='width:400px'>$message</td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
        ";
        // HTML Message Ends here


        if(!$mail->Send()) {
            // Message if mail has been sent
            echo "<script>
                alert('Submission failed.');
            </script>";
        }
        else {
            // Message if mail has been not sent
            echo "<script>
                alert('Email has been sent successfully.');
            </script>";
        }

    }
?>
