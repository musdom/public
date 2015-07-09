var client = new $.RestClient('/api/');

client.add('bitx');

// OR simply:
client.bitx.read().done(function (data){
	var bid = Number(data.bid);
	var ask = Number(data.ask);
	var rate = (bid+ask)/2;
	$( ".ticker" ).prepend( "RM" + rate.toFixed(2) );
});