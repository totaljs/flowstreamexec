FUNC.exec = function(flowstream, data, callback) {

	if (!flowstream.env)
		flowstream.env = 'dev';

	if (!flowstream.variables)
		flowstream.variables = {};

	if (!flowstream.variables2)
		flowstream.variables2 = {};

	if (!flowstream.directory)
		flowstream.directory = CONF.directory || PATH.root('/flowstream/');

	flowstream.sandbox = false;

	if (flowstream.worker == null)
		flowstream.worker = false;

	Flow.load(flowstream, function(err, instance) {

		if (err) {
			callback && callback(err);
			return;
		}

		instance.onerror = (err, type) => console.log('FlowError', err, type);
		instance.onsave = NOOP;

		// Finds all "Exec" component and sends data them
		var opt = {};
		opt.id = '#Exec';
		// opt.ref = 'your_custom_id';
		opt.data = data;

		opt.callback = function(err, output) {

			callback && callback(err, output);

			// Destroyes the entire FlowStream
			instance.remove();
			instance = null;
		};

		instance.exec(opt);

	});

};