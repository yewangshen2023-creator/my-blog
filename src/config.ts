import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "一片叶子",
	subtitle: "一片普通的叶子",
	lang: "zh_CN", // 语言代码，中文简体为 'zh_CN'
	themeColor: {
		hue: 130, // 默认主题色相：130 为叶绿色。红 0、青 200、蓝 250、粉 345
		fixed: false, // 设为 true 可对访客隐藏主题色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 相对 /src 目录；以 / 开头则相对 /public 目录
		position: "center", // 相当于 object-position，仅支持 'top' | 'center' | 'bottom'
		credit: {
			enable: false, // 是否显示横幅图片的版权说明
			text: "", // 版权文字
			url: "", // （可选）原图或作者主页链接
		},
	},
	toc: {
		enable: true, // 是否在文章右侧显示目录
		depth: 2, // 目录显示的最大标题层级，1 到 3
	},
	favicon: [
		// 留空数组则使用默认图标
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/yewangshen2023-creator/my-blog", // 站内链接不要带 base 路径，会自动添加
			external: true, // 显示外链图标并在新标签页打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // 相对 /src 目录；换成自己的头像时替换该文件即可
	name: "一片叶子",
	bio: "一片普通的叶子",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github", // 图标代码见 https://icones.js.org/
			url: "https://github.com/yewangshen2023-creator",
		},
		{
			name: "RSS",
			icon: "fa6-solid:rss",
			url: "/rss.xml",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（如背景色）被覆盖，见 astro.config.mjs
	theme: "github-dark",
};
