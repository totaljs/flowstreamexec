const Fs = require('fs');

exports.install = function() {
	ROUTE('GET /', runflowstream);
};

function runflowstream() {
	var $ = this;
	Fs.readFile(PATH.root('flowstream/database.json'), function(err, buffer) {

		if (err) {
			$.invalid(err);
			return;
		}

		// Database can contain multiple FlowStreams
		var flowstreams = buffer.toString('utf8').parseJSON(true);

		// Obtains all unique identifiers of all stored FlowStreams
		var uids = Object.keys(flowstreams);

		// And finally, we read first Flow
		var flowstream = flowstreams[uids[0]];

		FUNC.exec(flowstream, ($.query.data || $.query.DATA) || 'send data via query ?data=your_data', function(err, output) {
			if (err)
				$.invalid(err);
			else
				$.json(output);
		});

	});

}