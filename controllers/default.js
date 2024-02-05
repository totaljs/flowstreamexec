exports.install = function() {
	ROUTE('GET /', runflowstream);
};

function runflowstream($) {

	F.Fs.readFile(PATH.root('flowstream/database.json'), function(err, buffer) {

		if (err) {
			$.invalid(err);
			return;
		}

		// Database can contain multiple FlowStreams
		var flowstreams = buffer.toString('utf8').parseJSON(true);
		var flowstream = null;

		// Check if the file contains multiple FlowStreams
		if (!flowstreams.design && !flowstreams.components) {

			// Obtain all unique identifiers of all stored FlowStreams
			let uids = Object.keys(flowstreams);

			// And finally, we read first Flow
			flowstream = flowstreams[uids[0]];
		} else
			flowstream = flowstreams;

		// Overwrite the identifier because you can't provide multiple FlowStream instances with the same identifier
		flowstream.id = 'flow_' + UID();

		FUNC.exec(flowstream, ($.query.data || $.query.DATA) || 'send data via query ?data=your_data', function(err, output) {
			if (err)
				$.invalid(err);
			else
				$.json(output);
		});

	});

}