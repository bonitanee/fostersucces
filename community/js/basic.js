/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#basic-modal .basic').click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});

	$('.addQuestion').click(function (e) {
		$('#addquestions-modal-content').modal();

		return false;
	});
});


$('input[name="react"]').on('change', function() {
  // this, in the anonymous function, refers to the changed-<input>:
  // select the element(s) you want to show/hide:
  $('.business-fields')
      // pass a Boolean to the method, if the numeric-value of the changed-<input>
      // is exactly equal to 2 and that <input> is checked, the .business-fields
      // will be shown:
      .toggle(+this.value === 0 && this.checked);

 // $('.business-fields2')
      // pass a Boolean to the method, if the numeric-value of the changed-<input>
      // is exactly equal to 2 and that <input> is checked, the .business-fields
      // will be shown:
     // .toggle(+this.value === 3 && this.checked);

// trigger the change event, to show/hide the .business-fields element(s) on
// page-load:
}).change();