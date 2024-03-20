import chalk from "chalk";
import download from "download-git-repo";
import ora from "ora";

export const gitClone = (remote, name, option) => {
	const downSpinner = ora("正在下载模板...").start();
	return new Promise((resolve, reject) => {
		download(remote, name, option, (err) => {
			if (err) {
				downSpinner.fail();
				console.log("\n" + chalk.red(err) + "\n");
				reject(err);
				return;
			}
			downSpinner.succeed(chalk.green("模板下载成功！"));
			resolve();
		});
	});
};
