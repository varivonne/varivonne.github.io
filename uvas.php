<?php 
    $p_UvaRoja = 35;
    $p_UvaAmarilla = 25;
    $p_UvaVerde = 40;
	
    $KgRoja = $_REQUEST['uroja'];
    $KgVerde = $_REQUEST['uverde'];
    $KgAmarilla = $_REQUEST['umarilla'];
	
    $totalRoja = ($p_UvaRoja * $KgRoja);
    $totalAmarilla = ($p_UvaAmarilla * $KgAmarilla);
    $totalVerde = ($p_UvaVerde * $KgVerde);
	
	$kilos = $KgRoja + $KgAmarilla + $KgVerde;
    $total = $totalAmarilla + $totalRoja + $totalVerde;
	
    echo "Se compraron <b> $kilos </b> kilos de uva, el total es de: <b> $total </b>";
	echo "Karla Ivonne Vargas Rojas";
?
