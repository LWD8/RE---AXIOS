require(['config'], function () {
	require(['jquery', 'path', 'api/promise'], function ($, apidata, promise) {
		$(document).on('click','#contentBtn',function () {
			$('#messagebox').html('You have access Jquery by using require');

			// let data = promise(GetLoginCode())
			promise(apidata.GetLoginCode)
		})
	})
})