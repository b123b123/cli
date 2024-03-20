export default [
	{
		type: "text",
		name: "user",
		message: "用户",
	},
	{
		type: "password",
		name: "password",
		message: "密码",
	},
	{
		type: "text",
		name: "dest",
		message: "输出目录",
	},
	{
		type: "select", //单选
		name: "downloadMode",
		message: "是否下载压缩包",
		choices: [
			{ title: "是", value: true },
			{ title: "否", value: false },
		],
	},
	{
		type: "multiselect", //多选
		name: "study",
		message: "选择学习框架",
		choices: [
			{ title: "Boboplus", value: "0" },
			{ title: "gitBook", value: "1" },
		],
	},
];
