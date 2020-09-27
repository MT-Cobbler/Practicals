<!DOCTYPE html>
<html>
<head>
	<title>IMY 220 - Prac 2</title>
	<meta charset="utf-8" />
	<meta name="author" content="Name Surname" />
</head>
<body>
	<?php  
		if(!isset($_GET["matrixWidth"])){
			?>
			<form action="" method="GET">
				<label for="mWidth">Width</label>
				<input type="number" id="mWidth" name="matrixWidth" />
				<label for="mHeight">Height</label>
				<input type="number" id="mHeight" name="matrixHeight" /><br/>
				<input type="submit" name="" value="Send "/>
			</form>
			<?php
		}
	?>
</body>
</html>