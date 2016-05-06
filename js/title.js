$(document).ready(function() 
{
    var emojis = ['🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘'];

    var now = 0;

	setInterval(addEmojiTitle, 1500);

	var initialTitle = document.title;
	
	function addEmojiTitle()
	{
		document.title = emojis[now] + " " + initialTitle;
		now++;
		if(now > emojis.length -1)
		now = 0;
	}
});
