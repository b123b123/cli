export default [
	{
		type: "text",
		name: "dest",
		message: "请输入输出目录",
	},
	{
		type: "select", //单选
		name: "study",
		message: "选择学习框架",
		choices: [
			{ title: "Boboplus", value: "0" },
			{ title: "gitBook", value: "1" },
		],
	},
];
