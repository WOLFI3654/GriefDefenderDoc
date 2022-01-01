(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{480:function(e,r,t){"use strict";t.r(r);var n=t(1),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("⚠️ In this page, we will explain how to start using GriefDefender in your Bukkit/Sponge server step by step. ⚠️")]),e._v(" "),t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),t("h3",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://luckperms.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LuckPerms"),t("OutboundLink")],1),e._v(" permission plugin.")])]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("NOTE: GD only supports LuckPerms v5.")])])]),e._v(" "),t("p",[e._v("⚠️ GD makes heavy use of LP's "),t("code",[e._v("default")]),e._v(" group. Make sure your LP groups are inheriting the "),t("code",[e._v("default")]),e._v(" group or GD will not function properly. LP also strongly recommends to never disable this group. See https://github.com/lucko/LuckPerms/wiki/Default-Groups#where-to-start ⚠️")]),e._v(" "),t("h5",{attrs:{id:"sponge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sponge"}},[e._v("#")]),e._v(" Sponge")]),e._v(" "),t("ul",[t("li",[e._v("An up-to-date "),t("a",{attrs:{href:"https://www.spongepowered.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sponge"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h5",{attrs:{id:"bukkit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bukkit"}},[e._v("#")]),e._v(" Bukkit")]),e._v(" "),t("ul",[t("li",[e._v("An up-to-date "),t("a",{attrs:{href:"https://papermc.io/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paper"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://www.spigotmc.org/wiki/buildtools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spigot"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("If using "),t("code",[e._v("spark")]),e._v(", update to latest version at https://ci.lucko.me/job/spark/")]),e._v(" "),t("p",[e._v("Set "),t("code",[e._v("spawn-protection")]),e._v(" to "),t("code",[e._v("0")]),e._v(" in "),t("code",[e._v("server.properties")]),e._v(" to allow GD to protect spawn. If this is not set properly, the server will block actions before GD has a chance to see it.")])]),e._v(" "),t("p",[e._v("Download the latest GriefDefender jar from spigot's plugin website. Be sure to choose your correct Minecraft version, and keep it always updated! After the download drop it into your server's plugins folder.")]),e._v(" "),t("p",[e._v("Now start your server once to generate all configuration files, to check if GriefDefender was loaded sucessfully you can check console for "),t("code",[e._v("[GriefDefender] Loaded successfully")]),e._v(". Next shut down your server and start configuring your server.")]),e._v(" "),t("h3",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("NOTE: There are also a few options that have to be set using your permission system, you can read more about those on the "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Advanced-Options",target:"_blank",rel:"noopener noreferrer"}},[e._v("Options wiki page"),t("OutboundLink")],1),e._v(".")])])]),e._v(" "),t("p",[e._v("All configuration files can be found in a folder called "),t("code",[e._v("GriefDefender")]),e._v(" in your servers config or plugins directory.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("config/\n└── GriefDefender/\n    ├── logs/\n    ├── worlds/\n    │   ├── minecraft/\n    │   │   ├── normal/\n    │   │   │   ├── world/\n    │   │   │   │   ├── ClaimData/\n    │   │   │   │   ├── SchematicData/\n    │   │   │   │   └── world.conf\n    │   │   │   └── dimension.conf\n    │   │   └── other...\n    │   └── \n    ├── flags.conf\n    ├── global.conf\n    └── options.conf\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br")])]),t("p",[e._v("You can change a number of settings in the "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Global-Config",target:"_blank",rel:"noopener noreferrer"}},[e._v("config file"),t("OutboundLink")],1),e._v(". The file has detailed annotations that should make it clear what each option does. There are three types of configs:")]),e._v(" "),t("ul",[t("li",[e._v("Global")]),e._v(" "),t("li",[e._v("Dimension")]),e._v(" "),t("li",[e._v("World")])]),e._v(" "),t("p",[e._v("Global configuration files can affect all of a server’s worlds and dimensions. This is the default level for configs."),t("br"),e._v("\nDimension configuration files are used to affect a certain dimension or group of worlds. These types of configs will override the global config files. World configuration files are used to modify individual worlds only."),t("br"),e._v("\nWorld configs override dimension and global configs.")]),e._v(" "),t("p",[e._v("Claim data can be found inside the folder of the dimension the claim is in, e.g. all overworld world claims are saved inside")]),e._v(" "),t("p",[t("code",[e._v("config/GriefDefender/worlds/minecraft/overworld/world/ClaimData")]),e._v(" for Sponge"),t("br"),e._v(" "),t("code",[e._v("plugins/GriefDefender/worlds/minecraft/overworld/world/ClaimData")]),e._v(" for Bukkit")]),e._v(" "),t("h3",{attrs:{id:"permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[e._v("Info")]),e._v(" "),t("p",[e._v("It is VERY IMPORTANT you follow https://github.com/bloodmc/GriefDefender/wiki/Permissions#important before proceeding.")])]),e._v(" "),t("p",[e._v("After install GriefDefender correctly, you need to give your players permission to claim land, they aren't given by default. The only permission needed for basic GD setup is "),t("code",[e._v("griefdefender.user.*")]),e._v(". For basic admin setup, give admins the permission "),t("code",[e._v("griefdefender.admin.*")]),e._v(" and "),t("code",[e._v("griefdefender.user.*")]),e._v(".")]),e._v(" "),t("p",[e._v("If you want more fine tuned permissions you can find all permissions "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Permissions",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" and for a list of all command permissions & their usage check "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Commands-Usage-&-Permissions",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("If you believe that commands might be a little longer or hard to memorize, consider creating custom alias. "),t("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Custom-Alias-Creation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Click here for more information"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("To apply the above permissions to a group in LuckPerms, run the following command")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/lp group <group> permission set griefdefender.user.*\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v('For ´group´ use your default group, use "default" if you don\'t have one.')]),e._v(" "),t("p",[e._v("Once GD is installed and running, see https://github.com/bloodmc/GriefDefender/wiki/Claim-Management to learn how to create a protection claim and manage it.")])])}),[],!1,null,null,null);r.default=o.exports}}]);