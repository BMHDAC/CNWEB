# How to use this folder
## First Please Disable CORS in your browser
I suggest using Firefox, since it is much easier then other Chromnium-based browser.
1.Type "about:config" in your URL bar
2.Search for the field called "security.fileuri.strict_origin_policy" and set it to false
3.Open the "index.html file with Firefox"

** If you use Chrome or other Chromnium-based browser, just install other extension to disable CORS, but IDK if it would work or not, CORS in Chrome are pretty strict compare to other. I don't think it'll let the file even load the CSS. So just use Firefox.

** Data is stored in "./info.json". But since there're no real intuitive way to manipulate file-system that i know of, and i didn't want to use runtimes such as Node. I left it display a pop-up message saying the file had been modified. 
