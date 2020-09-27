<!DOCTYPE html>
<html>
<head>
	<title>IMY 220 - Prac 2</title>
	<meta charset="utf-8" />
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
		// Section 1
		elseif(!isset($_GET["m1x0y0"])){
			echo "<form action='' method='GET'>
					<input type='hidden' name='matrixWidth' value='" . $_GET["matrixWidth"] . "' />
					<input type='hidden' name='matrixHeight' value='" . $_GET["matrixHeight"] . "' />";
			for($y = 0; $y < $_GET["matrixHeight"]; $y++){
				for($x = 0; $x < $_GET["matrixWidth"]; $x++){
					echo "<input type='number' name='m1x".$x."y".$y."' />";
				}
				echo "<br/>";
			}
			echo "<br/><br/>";
			for($y = 0; $y < $_GET["matrixHeight"]; $y++){
				for($x = 0; $x < $_GET["matrixWidth"]; $x++){
					echo "<input type='number' name='m2x".$x."y".$y."' />";
				}
				echo "<br/>";
			}
			echo '<input type="submit" name="" value="Send "/>
				</form>';
			
		}
		// Section 2
		else{
			echo "<table border='1'><tr>";
			for($y = 0; $y < $_GET["matrixHeight"]; $y++){
				for($x = 0; $x < $_GET["matrixWidth"]; $x++){
					$sum = $_GET["m1x" . $x . "y" . $y] + $_GET["m2x" . $x . "y" . $y];
					echo "<td> " . $sum . " </td>";
				}
				echo "<tr/>";
			}
			echo "</tr></table>";
		}
	?>
</body>
</html>