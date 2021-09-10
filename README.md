# FlowStream Execution

- [Website](https://www.totaljs.com/flowstream/)
- [__Documentation__](https://docs.totaljs.com/total4/5aed1001bj51c/)
- [Chat support](https://platform.totaljs.com/?open=messenger)
- [Join __Total.js Telegram__](https://t.me/totalplatform)
- [Support](https://www.totaljs.com/support/)

This app is targeted for understanding how it is easy to execute your own FlowStream and get a response. This predefined FlowStream transforms only string to upper case.

__Requirements__:

- Total.js 4 - `$ npm install total4`

__Example__:

```bash
$ cd flowstreamexec
$ npm install total4
$ node index.js
```

- open web browser `http:/127.0.0.1:8000`
- you will see that the FlowStream processed a default data
- try to add your phrase via `http:/127.0.0.1:8000?data=my_test`

## How to edit FlowStream?

Download [TMS Integrator app](https://github.com/totaljs/tms), and copy file `/flowstream/database.json` from this project to the `tms` app into the `/flowstream/` directory. Then run the __TMS app__ (please follow the app's readme file due to install instructions).

If you edit a design of your FlowStream in TMS app, then copy `tms/flowstream/database.json` to the `flowstreamexec` app into the `/flowstream/`.

## Good to know

FlowStream must contain the [Exec component](https://github.com/totaljs/flowstreamcomponents/blob/main/components/exec.html), and this component inits a message that you generate manually in the code. The Exec component returns message data only if the generated message ends, so therefore we used the [End component](https://github.com/totaljs/flowstreamcomponents/blob/main/components/end.html) to complete the FlowStream process.