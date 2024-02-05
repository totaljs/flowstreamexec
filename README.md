# FlowStream Execution

- [Website](https://www.totaljs.com/flow/)
- [__Documentation__](https://docs.totaljs.com/total4/5aed1001bj51c/)
- [Join __Total.js Telegram__](https://t.me/totalplatform)
- [Support](https://www.totaljs.com/support/)

This app is targeted at understanding how easy it is to execute your own FlowStream and get a response. This predefined FlowStream transforms only strings to uppercase.

__How to run it?__

```bash
$ cd flowstreamexec
$ npm install
$ npm start
```

- open web browser `http:/127.0.0.1:8000`
- you will see that the FlowStream processed a default data
- try to add your phrase via `http:/127.0.0.1:8000?data=my_test`

## How to edit FlowStream?

Drag and drop the file `/flowstream/database.json` to https://floweditor.totaljs.com.

## Good to know

FlowStream must contain the [Exec component](https://github.com/totaljs/flowstreamcomponents/blob/main/components/exec.html), and this component initializes a message that you generate manually in the code. The Exec component returns message data only if the generated message ends, so therefore we used the [End component](https://github.com/totaljs/flowstreamcomponents/blob/main/components/end.html) to complete the FlowStream process.