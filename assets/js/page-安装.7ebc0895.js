(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{509:function(e,r,t){"use strict";t.r(r);var s=t(1),n=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[e._v("相关信息")]),e._v(" "),t("p",[e._v("在本页面, 我们将手把手教你如何在你的 Bukkit/Sponge 服务器上开始使用 GriefDefender.")])]),e._v(" "),t("h2",{attrs:{id:"入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[e._v("#")]),e._v(" 入门")]),e._v(" "),t("h3",{attrs:{id:"需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[e._v("#")]),e._v(" 需求")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://luckperms.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LuckPerms"),t("OutboundLink")],1),e._v(" 权限插件.")])]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("提示: GD 只支持 LuckPerms v5.")])])]),e._v(" "),t("p",[e._v("⚠️ GD 大量使用了 LP 的 "),t("code",[e._v("default")]),e._v(" 权限组. 请确保你的 LP 权限组均已继承 "),t("code",[e._v("default")]),e._v(" 组，否则 GD 将无法正常工作. LP 也强烈建议不要禁用该权限组. 查阅 https://github.com/lucko/LuckPerms/wiki/Default-Groups#where-to-start ⚠️")]),e._v(" "),t("h5",{attrs:{id:"sponge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sponge"}},[e._v("#")]),e._v(" Sponge")]),e._v(" "),t("ul",[t("li",[e._v("最新版本的 "),t("a",{attrs:{href:"https://www.spongepowered.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sponge"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h5",{attrs:{id:"bukkit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bukkit"}},[e._v("#")]),e._v(" Bukkit")]),e._v(" "),t("ul",[t("li",[e._v("最新版本的 "),t("a",{attrs:{href:"https://papermc.io/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paper"),t("OutboundLink")],1),e._v(" 或 "),t("a",{attrs:{href:"https://www.spigotmc.org/wiki/buildtools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spigot"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("如果你在使用 "),t("code",[e._v("spark")]),e._v(" 插件, 请在此链接下载并更新到最新版本 https://ci.lucko.me/job/spark/")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("server.properties")]),e._v(" 中设置 "),t("code",[e._v("spawn-protection")]),e._v(" 为 "),t("code",[e._v("0")]),e._v(" 以允许 GD 接管出生保护. 如果此项设置错误, GD 将无法正常接管出生保护.")])]),e._v(" "),t("p",[e._v("从 Spigot 的插件页面下载最新的 GriefDefender.请务必选择正确的 Minecraft 版本，并保持它为最新版本 下载后,将其放入你服务器的插件文件夹.")]),e._v(" "),t("p",[e._v("现在启动你的服务器以生成所有的配置文件，检查 GriefDefender 是否成功加载，你可以检查控制台是否出现 "),t("code",[e._v("[GriefDefender] Loaded successfully")]),e._v(". 接下来关闭你的服务器并开始配置流程.")]),e._v(" "),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("提示: 还有一些选项必须使用你的权限系统来设置，你可以在 "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Advanced-Options",target:"_blank",rel:"noopener noreferrer"}},[e._v("选项 wiki 页面"),t("OutboundLink")],1),e._v(" 上阅读更多关于这些选项的信息.")])])]),e._v(" "),t("p",[e._v("所有的配置文件都在你的 config 或 plugin 文件夹中名为 "),t("code",[e._v("GriefDefender")]),e._v(" 的文件夹中找到.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("config/\n└── GriefDefender/\n    ├── logs/\n    ├── worlds/\n    │   ├── minecraft/\n    │   │   ├── normal/\n    │   │   │   ├── world/\n    │   │   │   │   ├── ClaimData/\n    │   │   │   │   ├── SchematicData/\n    │   │   │   │   └── world.conf\n    │   │   │   └── dimension.conf\n    │   │   └── other...\n    │   └── \n    ├── flags.conf\n    ├── global.conf\n    └── options.conf\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br")])]),t("p",[e._v("你可以更改 "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Global-Config",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置文件"),t("OutboundLink")],1),e._v(" 中的很多设置. 这些文件有详细的注释可以让你了解每个选项的作用. 一共有 3 种类型的配置文件:")]),e._v(" "),t("ul",[t("li",[e._v("全局 (Global)")]),e._v(" "),t("li",[e._v("纬度 (Dimension)")]),e._v(" "),t("li",[e._v("世界 (World)")])]),e._v(" "),t("p",[e._v("全局配置文件可以影响一个服务器的所有世界和维度. 这是配置文件的默认级别.\n维度配置文件是用来影响某个维度或一组世界的. 这些类型的配置文件将覆盖全局配置文件的设置. 世界配置文件仅用于修改单个世界.\n世界配置文件将覆盖维度和全局配置文件的设置.")]),e._v(" "),t("p",[e._v("领地数据可以在领地所处维度的文件夹中找到, 例如，所有 A 纬度的世界领地都保存在")]),e._v(" "),t("p",[e._v("Sponge: "),t("code",[e._v("config/GriefDefender/worlds/minecraft/A/world/ClaimData")])]),e._v(" "),t("p",[e._v("Bukkit: "),t("code",[e._v("plugins/GriefDefender/worlds/minecraft/A/world/ClaimData")])]),e._v(" "),t("h3",{attrs:{id:"权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[e._v("#")]),e._v(" 权限")]),e._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[e._v("相关信息")]),e._v(" "),t("p",[t("strong",[e._v("非常重要")]),e._v("的是在你继续进行本项配置之前需要查阅 https://github.com/bloodmc/GriefDefender/wiki/Permissions#important")])]),e._v(" "),t("p",[e._v("在正确安装 GriefDefender 后, 你需要给玩家领地相关的权限, 玩家默认是没有这些权限的. 对于基础 GD 权限只需要给予 "),t("code",[e._v("griefdefender.user.*")]),e._v(". 对于管理员权限, 给予管理员 "),t("code",[e._v("griefdefender.admin.*")]),e._v(" 和 "),t("code",[e._v("griefdefender.user.*")]),e._v(" 权限.")]),e._v(" "),t("p",[e._v("你可以在 "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Permissions",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v(" 找到更详细的权限节点, 查看所有指令权限和用法请在 "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Commands-Usage-&-Permissions",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v(" 查看.")]),e._v(" "),t("p",[e._v("如果你觉得指令过长或难于记忆, 可以考虑使用指令别名. "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Custom-Alias-Creation",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击这里获取更多相关信息"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("要对某个权限组应用上述权限, 请运行此命令")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/lp group <权限组> permission set griefdefender.user.*\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v('在 ´权限组´ 处填写你的默认权限组, 如果你不知道，请使用 "default".')]),e._v(" "),t("p",[e._v("当 GD 已安装并运行, 查阅 https://github.com/bloodmc/GriefDefender/wiki/Claim-Management 学习如何创建和管理领地.")])])}),[],!1,null,null,null);r.default=n.exports}}]);