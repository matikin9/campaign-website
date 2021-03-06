/* global fullpage */

var myFullpage = new fullpage('#fullpage', {
    //Sections
    menu: '#menu',
    
    // Scrolling
    autoScrolling: false,
    fitToSection: false,

	//Design
	sectionsColor : ['#fff', '#ffff0d', '#fff', '#ffff0d', '#fff', '#ffff0d', '#fff', '#ffff0d', '#222'],
	paddingTop: '3em',
	paddingBottom: '30px',
	fixedElements: '#header',
	verticalCentered: true,
	
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
});