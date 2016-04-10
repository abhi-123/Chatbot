var username = ""; 
	function Sendmessage(message){
		 var Prevmessage = $("#container").html();
	 console.log(Prevmessage.length);
	 if(Prevmessage.length>2)
	 {
	 	Prevmessage = Prevmessage + "<br>";
	 }
	 $("#container").html(Prevmessage+"<span class='currentclass'>"+"<span class='Bot' >Chatbot:</span>"+message+"</span>");
	 $(".currentclass").hide();
	 $(".currentclass").delay(500).fadeIn();
	 $(".currentclass").removeClass("currentclass");
	
	}
	function get_username(){
	$("#container").html("<span class='Bot' >Chatbot:</span>Hello, What is your Name?");	
	}
	function ai(message)
     {
        if(username.length<2)
     	{
     		username = message;
     		Sendmessage("Nice to meet you " + message + ", How are you doing? ");
     	}
     	if(message.indexOf("how are you")>=0)
     	{
     		Sendmessage("Thanks! I m good");

     	}
     	if( (message.indexOf("time")>=0) || (message.indexOf("Time")>=0))
     	{
     		var date= new Date();
     		var h=date.getHours();
     		var m=date.getMinutes();
     		var s=date.getSeconds();
     		Sendmessage("Current time is " +h+":"+m);

     	}
		if( (message.indexOf("weather")>=0) || (message.indexOf("Weather")>=0))
		{
         Seather.forecast({
cityID : '2502265', // Sunnyvale
days : 5,
position : '#seather',
color : 'white', //  white, gray, cyan or red
size : 'small' // small, middle or big.
});		}
		
	}
  $(document).ready(function(){
  	get_username();
    $("#textbox").keypress(function(event){
	if(event.which == 13){
	if($("#enter").prop("checked")){
	event.preventDefault();
	{ 
	$("#button").click();
	}
	}
	}
	});
	});
	 $(document).ready(function(){
	 $("#button").click(function(){
	 var username = "<span class='username' => YOU:</span>";
	 var Newmessage = $("#textbox").val();
	 $("#textbox").val("");
	 var Prevmessage = $("#container").html();
	 console.log(Prevmessage.length);
	 if(Prevmessage.length>2)
	 {
	 	Prevmessage = Prevmessage + "<br>";
	 }
	 
	 if(Newmessage.length>0)
	 {
	 $("#container").html( "<i>" + Prevmessage + "</i>" + username +  "<i>"+ Newmessage +"</i>");}
	 $("#container").scrollTop($("#container").prop("scrollHeight"));
     if(Newmessage.length>0){
     ai(Newmessage);}
	 });
	 });