<?php
$target_dir = "uploads/";
$imageFileType = pathinfo($target_dir . basename($_FILES["fileToUpload"]["name"]),PATHINFO_EXTENSION);
$target_file = $target_dir . "fileToUpload" . "." . $imageFileType;
$uploadOk = 1;
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        //echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        //echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Allow certain file formats
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    //echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        //echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded." . "<br>";
    } else {
        //echo "Sorry, there was an error uploading your file." . "<br>";
    }
}

exec("./main uploads/fileToUpload.png", $out);
print_r($out);
?>
