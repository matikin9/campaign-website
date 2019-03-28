/* global fullpage */

var myFullpage = new fullpage('#fullpage', {
    //Sections
    menu: '#menu',
    anchors:['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection'],

	//Design
	sectionsColor : ['#fff', '#ffff0d', '#fff', '#ffff0d', '#fff', '#ffff0d', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, #footer',
	verticalCentered: true,
	
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
});