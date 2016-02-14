<html>
	<head>
		<title>SketchIt</title>
	</head>

	<body>
		<img src="sketchit.png" alt="">
		<h1>Please upload a picture!</h1>
		<form action="upload.php" method="post" enctype="multipart/form-data">
			<input type="file" name="fileToUpload" id="fileToUpload">
    		<input type="submit" value="Upload" name="submit">
		</form>
	</body>
</html>
