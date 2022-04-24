FUNC.exec = function(flowstream, data, callback) {

	if (!flowstream.env)
		flowstream.env = 'dev';

	if (!flowstream.sandbox)
		flowstream.sandbox = false;

	if (!flowstream.variables)
		flowstream.variables = {};

	if (!flowstream.variables2)
		flowstream.variables2 = {};

	if (!flowstream.directory)
		flowstream.directory = CONF.directory || PATH.root('/flowstream/');

	var instance = MODULE('flowstream').init(flowstream, false);
	instance.ondone = function() {

		// Finds all "Exec" component and sends data them
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