<?php

$Action = "https://api.ooyala.com/v2/assets/V3MDM0ZjE6VFHuScVibWmSCXWU37sTY4{'name':'" . getElementById('vidTitle').value . "'};"

/*
class OoyalaAPI{
	public function generateURL(
		$HTTP_method,
		$api_key,
		$secret_key,
		$expires,
		$request_path,
		$request_body = "",
		$parameters=array())
	{

		$parameters["api_key"] = $api_key;
		$parameters["expires"] = $expires;
		$signature = $this->generateSignature($HTTP_method, $secret_key, $request_path, $parameters, $request_body);
		$base = "https://api.ooyala.com";
		$url = $base.$request_path."?";
		foreach ($parameters as $key => $value) {
			$url .=  $key . "=" . urlencode($value) . "&";
		}
		$url .= "signature=" . $signature;
		return $url;
	}

	*
	 *
	 * Generates the signature for a request
	 * @param $secretKey secret key
	 * @param $HTTPMethod GET, POST, PUT, PATCH, DELETE
	 * @param $requestPath the path of the object to request
	 * @param $parameters array of parameters [key => value]
	 * @param $request_body body for the request


	private function generateSignature(
		$HTTP_method,
		$secret_key,
		$request_path,
		$parameters,
		$request_body = ""
		)
	{
		$to_sign = $secret_key . $HTTP_method . $request_path;
		$keys = $this->sortKeys($parameters);
		foreach ($keys as $key) {
			$to_sign .= $key . "=" . $parameters[$key];
		}
		$to_sign .= $request_body;
		$hash = hash("sha256", $to_sign,true);
		$base = base64_encode($hash);
		$base = substr($base,0,43);
		$base = urlencode($base);
		return $base;

	}

	private function sortKeys($array)
	{
		$keys = array();$ind=0;
		foreach ($array as $key => $val) {
			$keys[$ind++]=$key;
		}
		sort($keys);
		return $keys;
	}
}
		//We declare the variables
		$HTTP_method = $_POST["HTTP_method"];
		$secret_key = "yoursecretkey";
		$request_path = "/v2/assets/yourpath/";
		$request_body = $_POST["request_body"];
		$request_body = '{'.'"name":"'.$request_body.'"'.'}';
		$api_key = "your api key";
		$expires = time()+15; //the sign will expire 15 seconds after is created which I think is ok for this kind of request.
		$parameters["api_key"] = $api_key;
		$parameters["expires"] = $expires;

		//We create and run (not in that order) the send request using the Ooyala PHP Class
		send_request($HTTP_method, $api_key, $secret_key, $expires, $request_path, $request_body, $parameters=array());
		function send_request($HTTP_method, $api_key, $secret_key, $expires, $request_path, $request_body, $parameters=array())
		{
			$OoyalaObj = new OoyalaAPI;


			$url = $OoyalaObj->generateURL($HTTP_method, $api_key, $secret_key, $expires, $request_path, $request_body, $parameters=array());
			$headers = array('Content-Type: application/json');
			$curl = curl_init();
			curl_setopt($curl, CURLOPT_URL, $url);
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PATCH');
			curl_setopt($curl, CURLOPT_POSTFIELDS, $request_body);
			curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
			$response = curl_exec($curl);
			curl_close($curl);

		}
*/
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Phase 2</title>
    <link rel="stylesheet" href="//player.ooyala.com/static/v4/production/skin-plugin/html5-skin.min.css"/>
    <link rel="stylesheet" type="text/css" href="../styles/style.css">
    <script src="//player.ooyala.com/static/v4/production/core.min.js"></script>
    <script src="//player.ooyala.com/static/v4/production/video-plugin/bit_wrapper.min.js"></script>
    <script src="//player.ooyala.com/static/v4/production/video-plugin/main_html5.min.js"></script>
    <script src="//player.ooyala.com/static/v4/production/video-plugin/osmf_flash.min.js"></script>
    <script src="//player.ooyala.com/static/v4/production/video-plugin/youtube.min.js"></script>
    <script src="//player.ooyala.com/static/v4/production/skin-plugin/html5-skin.min.js"></script>
    <script type="text/javascript" src="../scripts/p3.js"></script>
  </head>
  <body class="p3Body">
    <header class="pHeader">
      <h1>Phase 3</h1>
      <ul>
        <li>Allow your users to change the video title. In order to accomplish this you must use our Backlot API</li>
        <li>Make the Mail icon disappear on the Player Share screen. </li>
      </ul>
    </header>
    <div id='container_1524368776'></div>
    <br>
    <br>
    <br>
    <br>
    <form action="<?=$Action?>" id="frmTitle" method="PATCH">
      <div>
        <label for="name">Write the name for the video: </label>
        <input type="text" id="vidTitle" />
        <button id="btnTitle" type="submit" class="control" >Update</button>
      </div>
    </form>
    <footer class="pFooter">
      <a href="../index.html">&#60;--- Home</a>
    </footer>
  </body>
</html>
