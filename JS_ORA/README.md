# How to use this folder
## First Please Disable CORS in your browser
I suggest using Firefox, since it is much easier then other Chromnium-based browser.
2.Search for the field called "security.fileuri.strict_origin_policy" and set it to false
3.Open the "index.html file with Firefox"

** If you use Chrome or other Chromnium-based browser, just install other extension to disable CORS, but IDK if it would work or not, CORS in Chrome are pretty strict compare to other. I don't think it'll let the file even load the CSS. So just use Firefox.

** Data is stored in "./info.json". But since there're no real intuitive way to manipulate file-system that i know of, and i didn't want to use runtimes such as Node. I left it display a pop-up message saying the file had been modified. 
** ORA#2 instruction: The edit button now can be used to display text field input, and 3 button ok, reset, cancel. The ok button will commit the changes and set objects inside the dom to their values, the reset will reset the whole page include the profile image, the cancel button cancel changes but does not reset profile image.

*Note on file upload using morder browser: Most mordern browser have their own layer of sercurity to prevent websites to know you real directory of the file you uploads, hence why you cant just upload the files to the system. The file's path is gonna be something like C:/fakepath/*thefileyoupicked*, that's why if you pick the file with the browse button then the image will be blank. Cant do anything about that though. But you could try using some older browser, or some hacked version of firefox or something and it'll work.
