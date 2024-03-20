#! /usr/bin/env node

import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import { readFile } from "fs/promises";
import helpList from "./help.js";
import promptOptionsList from "./prompt.js";
import prompts from "prompts";
import chalk from "chalk";
import { gitClone } from "./download.js";

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

//cli.js
const remoteList = {
	0: "https://github.com/b123b123/boboplus.git",
	1: "https://github.com/b123b123/gitbook-template.git",
};

// 输入选择框区域
const getUserInfo = async () => {
	try {
		const res = await prompts(promptOptionsList);
		const { dest, study } = res;
		if (!dest) {
			console.log("\n" + chalk.yellowBright("输出目录不能为空,请重新输入") + "\n");
			return getUserInfo();
		}
		if (!study) {
			console.log("\n" + chalk.yellowBright("您没有选择任何框架，程序结束") + "\n");
			return;
		}
		gitClone(`direct:${remoteList[study]}`, dest, {
			clone: true,
		});
	} catch (error) {
		console.log("\n" + chalk.red(error) + "\n");
	}
};
getUserInfo();
