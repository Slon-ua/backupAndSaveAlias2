<?
function URLencode() {
    $str = file_get_contents('./BackupAlias.txt', true);

    function myUrlEncode($str) {
        $entities = array('%3A+',': ','%0A_','%0Aauthenticity','%0Aalias%5','%0Acommit');
        $replacements = array(": ","=","&_","&authenticity","&alias%5","&commit");
        
        // $entities = array('%3A+',': ','%0D%0A_','%0D%0Aauthenticity','%0D%0Aalias%5','%0D%0Acommit');
        // $replacements = array(": ","=","&_","&authenticity","&alias%5","&commit");
        return str_replace($entities, $replacements, urlencode($str));
    }

    $str = myUrlEncode($str);
    echo $str;

    $fd = fopen("NewURLencode.txt", 'w');
    fputs($fd, $str);
    fclose($fd);
}
?>