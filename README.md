# DOM-ACTIVITY
🎨 Dynamic RGB Color Generator
A lightweight, interactive web app built with Vanilla JavaScript that generates random RGB colors and updates the DOM in real time with a single click.
✨ Features
•	Random Color Engine: Generates true random RGB values (‭$0\text{–}255$‬‭‬‭‬ for each color channel) on every click.
•	Instant DOM Refresh: Dynamically updates the background color of the container and displays the active RGB code.
•	Responsive Button Text: Changes the call-to-action text dynamically after the first click.
•	Zero Dependencies: Pure HTML, CSS, and Vanilla JavaScript with zero external frameworks.
🚀 How It Works
	1.	Clicking the button triggers the getRandom() utility function.
	2.	Three independent integer values between ‭$0$‬ and ‭$255$‬ are generated for Red, Green, and Blue.
	3.	The resulting rgb(r, g, b) string is applied to the page heading and container background.
