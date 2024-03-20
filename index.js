#! /usr/bin/env node

import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import { readFile } from "fs/promises";
import helpList from "./help.js";
import promptOptionsList from "./prompt.js";
import prompts from "prompts";

const getUserInfo = async () => {
	const res = await prompts(promptOptionsList);
	console.log(res);
};
getUserInfo();

// const pkg = JSON.parse(await readFile(new URL("./package.json", import.meta.url)));

// //配置命令参数
// const optionDefinitions = [
// 	{ name: "version", alias: "v", type: Boolean },
// 	{ name: "help", alias: "h", type: Boolean },
// ];

// try {
// 	const options = commandLineArgs(optionDefinitions);
// 	if (options.version) {
// 		console.log(`v${pkg.version}`);
// 	}
// 	if (options.help) {
// 		console.log(commandLineUsage(helpList));
// 	}
// } catch (error) {
// 	console.error("无此命令");
// }
