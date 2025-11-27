/** setDefaults */
$.validator.setDefaults({
	onfocusout : false,
	onclick: false,	//zodiack_test
	onkeyup: false,	//zodiack_test
	showErrors: function(errorMap,errorList){	//zodiack_test
        if(this.numberOfInvalids()){ // 에러가 있으면
            alert(errorList[0].message); // 경고창으로 띄움
            $(errorList[0].element).focus();
        }
    },
	invalidHandler : function(event, validator) {
		var errors = validator.numberOfInvalids();

		if (errors) {
			// errorList
			$.each(validator.errorList, function(index, object) {
				var element = object.element;
				var content = object.message;

				// Tooltip show
				if (index == 0) {
					if (!$(element).hasClass("tooltipstered")) {
						$(element).tooltipster({
							trigger : 'custom',
							theme : 'tooltipster-borderless',
							content : content
						});
					}

					//$(element).tooltipster('show');	//zodiack_test
					$(element).focus();

					return true;
				}

				// Tooltip hide
				if ($(element).hasClass("tooltipstered")) {
					$(element).tooltipster('hide');
				}
			});

			// successList
			$.each(validator.successList, function(index, element) {
				// Tooltip hide
				if ($(element).hasClass("tooltipstered")) {
					$(element).tooltipster('hide');
				}
			});
		}
	},
	errorPlacement : function(error, element) {
		// Tooltip content
		if ($(element).hasClass("tooltipstered")) {
			$(element).tooltipster('content', error.text());
		}
	},
	unhighlight : function(element, errorClass, validClass) {
		// Tooltip hide
		if ($(element).hasClass("tooltipstered")) {
			$(element).tooltipster('hide');
		}
	}
});