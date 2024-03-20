#! /usr/bin/env node

import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import { readFile } from "fs/promises";
import helpList from "./help.js";
import promptOptionsList from "./prompt.js";
import prompts from "prompts";
import chalk from "chalk";

const pkg = JSON.parse(await readFile(new URL("./package.json", import.meta.url)));

//配置命令参数
const optionDefinitions = [
	{ name: "version", alias: "v", type: Boolean },
	{ name: "help", alias: "h", type: Boolean },
];

try {
	const options = commandLineArgs(optionDefinitions);
	if (options.version) {
		console.log(`v${pkg.version}`);
	}
	if (options.help) {
		console.log(commandLineUsage(helpList));
	}
} catch (error) {
	console.error("无此命令");
}

// 输入选择框区域
const getUserInfo = async () => {
	try {
		const res = await prompts(promptOptionsList);
		const { user, password, gender, study } = res;
		if (!user || !password || !gender || !study) {
			throw "输入选择有误,请重新启动";
		}
	} catch (error) {
		console.log("\n" + chalk.red(error) + "\n");
	}
};
getUserInfo();
