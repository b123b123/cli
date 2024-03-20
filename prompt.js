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
		type: "select", //单选
		name: "gender",
		message: "性别",
		choices: [
			{ title: "男", value: "0" },
			{ title: "女", value: "1" },
		],
	},
	{
		type: "multiselect", //多选
		name: "study",
		message: "选择学习框架",
		choices: [
			{ title: "Vue", value: "0" },
			{ title: "React", value: "1" },
			{ title: "Angular", value: "2" },
		],
	},
];
