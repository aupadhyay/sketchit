<?php

	$array = array(4, 1650, 882, 
					[608,511], 944, 343, 
             		[608,141], 944, 343, 
             		[49,131], 506, 734, 
             		[1,1], 1648, 100);

	$objCounter = 1;

	echo "<style>
		div{
			position: absolute;
			overflow: auto;
		}
	</style>";
	
	for ($i=0; $i < $array[0] ; $i++) { 
		$width = $array[($objCounter*3) + 1];
		$height = $array[($objCounter*3) + 2];
		$x = $array[($objCounter*3)][0];
		$y = $array[($objCounter*3)][1];
		
		echo "<div style='width:".($width/$array[1]) * 100 ."%;
				height: ".($height/$array[2]) * 100 ."%;
				border: 1px solid;
				margin-left: ".($x/$array[1]) * 100 ."vw;
				margin-top: ".($y/$array[2]) * 100 ."vh;'>FIRST</div>";

		$objCounter = $objCounter + 1;
	}

?>