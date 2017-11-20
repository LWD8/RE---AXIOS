define(function () {
	return function (fun, data) {
		if (data) {
			new Promise((resolve, reject) => {
				fun(data).then(response => {
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})
		} else {
			new Promise((resolve, reject) => {
				fun().then(response => {
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})
		}
	}
})