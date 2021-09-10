FUNC.exec = function(flowstream, data, callback) {
	var instance = MODULE('flowstream').init(flowstream, false);
	instance.ondone = function() {

		var opt = {};
		opt.id = '#Exec';
		opt.data = data;

		opt.callback = function(err, output) {
			callback && callback(err, output);

			// Destroyes the entire FlowStream
			instance.destroy();
			instance = null;

		};

		instance.exec(opt);

	};
	instance.onerror = (err, type) => console.log('FlowError', err, type);
	instance.onsave = NOOP;
};