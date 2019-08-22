jQuery( '.button-switch-view' ).click( function (e) {

	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
	jQuery( this ).text() === 'Show code' ? jQuery(this).text('Show markup') : jQuery(this).text('Show code');

	const section = jQuery( this ).data( 'action' );
	const code = jQuery( section ).find( '.markup-holder' ).html();
	const section_markup_code = jQuery( section ).find( '.section-markup-code code' );

	jQuery( section_markup_code ).text( code );
	Prism.highlightAll( jQuery( section_markup_code )[0] );
	
	jQuery( section ).toggleClass( 'code-view' );
});

jQuery( '.section-with-columns' ).each( function( index ) {
	const column_markup = jQuery( this ).find( '.column-content' ).html();
	const column_code = jQuery( this ).find( '.column-code code' );

	jQuery( column_code ).text( column_markup );
	Prism.highlightAll( jQuery( column_code )[0] );
});

jQuery(document).on('ready', function( jQuery ){
	postboxes.save_state = function(){
			return;
	};
	postboxes.save_order = function(){
			return;
	};
	postboxes._mark_area = function(){
			return;
	};
	postboxes._pb_edit = function(){
			return;
	};
	postboxes._pb_change = function(){
			return;
	};
	postboxes.handle_click();
	postboxes.add_postbox_toggles();
	postboxes.init();

});

jQuery( document ).ready(function() {
	if ( jQuery(window).width() < 1199 && jQuery(window).load() ) {
		jQuery( '.section-notices .notice' ).each( function( index ) {
			const markup = jQuery(this).prop('outerHTML');
			const code = jQuery(' .notices-code-column .block:nth-child(' + (index + 1) + ') ').html();
			console.log(index);
			jQuery( code ).insertAfter( 
				jQuery( jQuery(this) ) 
			);
		});
	}
});

Prism.highlightAll();

Prism.plugins.NormalizeWhitespace.setDefaults({
 'remove-trailing': true,
 'remove-indent': true,
 'left-trim': true,
 'right-trim': true,
});

jQuery( document ).ready(function() {
	sectionMenu();
});

