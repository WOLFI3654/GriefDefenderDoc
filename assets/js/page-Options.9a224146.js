(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{709:function(e,t,a){"use strict";a.r(t);var i=a(1),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Options, also known as Meta, are a way to configure plugins using player/group contexts through your permission system, this gives you the benefit of being able to set different settings for different players, groups, worlds etc.")]),e._v(" "),a("p",[e._v("Default values can be changed in "),a("code",[e._v("options.conf")]),e._v(", for finer control continue reading below.")]),e._v(" "),a("h2",{attrs:{id:"built-in-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-commands"}},[e._v("#")]),e._v(" Built-in Commands")]),e._v(" "),a("p",[e._v("Options support the same format as flags")]),e._v(" "),a("p",[e._v("Claim - "),a("code",[e._v("/claimoption <option> <value> [contexts]")]),a("br"),e._v("\nPlayer - "),a("code",[e._v("/cop <player> <option> <value> [contexts]")]),a("br"),e._v("\nGroup - "),a("code",[e._v("/cog <group> <option> <value> [contexts]")])]),e._v(" "),a("h3",{attrs:{id:"contexts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contexts"}},[e._v("#")]),e._v(" Contexts")]),e._v(" "),a("p",[e._v("All options may use one or more contexts when applied as meta in LuckPerms."),a("br"),e._v("\nSee https://github.com/bloodmc/GriefDefender/wiki/Contexts on what contexts you can use and how they work.")]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("ul",[a("li",[e._v("Send a welcome message to players entering a claim as console."),a("br"),e._v(" "),a("code",[e._v('/claimoption player-command-enter "/tellraw %player% [\\"\\",{\\"text\\":\\"Welcome %player%!\\",\\"color\\":\\"gold\\"},{\\"text\\":\\"\\\\nYou are visiting %owner%s claim.\\\\nEnjoy your stay!\\\\n\\\\n-\\"}]" context[run_for=member, run_as=console]')])]),e._v(" "),a("li",[e._v("Set group vip's "),a("code",[e._v("create-limit")]),e._v(" to 100 default for basic claims."),a("br"),e._v(" "),a("code",[e._v("/cog vip create-limit 100 context[default=basic]")])]),e._v(" "),a("li",[e._v("Set player JoeSmith's "),a("code",[e._v("expiration")]),e._v(" to 30 days default for basic claims."),a("br"),e._v(" "),a("code",[e._v("/cop JoeSmith expiration 30 context[default=basic]")])])]),e._v(" "),a("p",[e._v("Using "),a("code",[e._v("/claimoption")]),e._v(" with no arguments opens up the GUI and displays all claim options for claim you are standing in including default options that affect all claims.")]),e._v(" "),a("h2",{attrs:{id:"luckperms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#luckperms"}},[e._v("#")]),e._v(" LuckPerms")]),e._v(" "),a("p",[a("code",[e._v("/lp user/group <user|group> meta set <option> <value> [contexts]")])]),e._v(" "),a("p",[e._v("Ex1. Set create basic claim limit of 50 for a group called "),a("code",[e._v("vip")]),a("br"),e._v(" "),a("code",[e._v("/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=global")])]),e._v(" "),a("p",[e._v("Ex1. Set create basic claim limit of 50 for a group called "),a("code",[e._v("vip")]),e._v(" on server mc01"),a("br"),e._v(" "),a("code",[e._v("/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=mc01")])]),e._v(" "),a("p",[e._v("Reset all users accrued claimblocks"),a("br"),e._v(" "),a("code",[e._v('/lp bulkupdate users delete "permission ~~ meta.griefdefender\\\\.accrued-blocks.%"')])]),e._v(" "),a("p",[e._v("Reset all users bonus claimblocks"),a("br"),e._v(" "),a("code",[e._v('/lp bulkupdate users delete "permission ~~ meta.griefdefender\\\\.bonus-blocks.%"')])]),e._v(" "),a("p",[e._v("See https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta and https://luckperms.net/wiki/Meta-Commands for more information on how to use it directly in LuckPerms")]),e._v(" "),a("h2",{attrs:{id:"global-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-options"}},[e._v("#")]),e._v(" Global Options")]),e._v(" "),a("p",[e._v("Global Options can be set globally, or on a server, world, group or player."),a("br"),e._v("\nThey cannot be set on individual claims or claim types.")]),e._v(" "),a("p",[e._v("Permissions for using Global Options are "),a("code",[e._v("griefdefender.admin.claim.option.global.<optionname>")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("griefdefender.abandon-return-ratio")])]),e._v(" "),a("td",[e._v("1.0")]),e._v(" "),a("td",[e._v("The portion of claim blocks returned to a player when a claim is abandoned. Note: When using Economy Mode, this is the ratio of funds returned when abandoning a claim.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.accrued-blocks")])]),e._v(" "),a("td",[e._v("0")]),e._v(" "),a("td",[e._v("The total number of claim blocks accrued by a player. "),a("br"),e._v("Note: This does not account for bonus blocks, and has no use/effect being set on a group.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.blocks-accrued-per-hour")])]),e._v(" "),a("td",[e._v("120")]),e._v(" "),a("td",[e._v("Blocks earned per hour. By default, each 'active' player should receive 6 blocks every 5 min.  Note: The player must have moved at least 3 blocks since last delivery. If using 'wilderness-cuboids', this value is 30720 by default with 1536 blocks every 5 min to players. Minimum setting is 12 due to 5 minute check interval, setting it lower will result in no blocks accruing.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.bonus-blocks")])]),e._v(" "),a("td",[e._v("0")]),e._v(" "),a("td",[e._v("The total number of bonus claim blocks given to a player, and has no use/effect being set on a group.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.chest-expiration")])]),e._v(" "),a("td",[e._v("7")]),e._v(" "),a("td",[e._v("Number of days of inactivity before an automatic chest claim will be deleted.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.economy-block-cost")])]),e._v(" "),a("td",[e._v("0.0")]),e._v(" "),a("td",[e._v("The economy amount to charge per block of a claim. "),a("br"),e._v("Note: If set to 0 or less, the buy block feature will be disabled.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.economy-block-sell-return")])]),e._v(" "),a("td",[e._v("0.0")]),e._v(" "),a("td",[e._v("The return ratio for selling claim blocks. "),a("br"),e._v("Note: If set to 0 or less, the sell block feature will be disabled.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.expiration")])]),e._v(" "),a("td",[e._v("14")]),e._v(" "),a("td",[e._v("Number of days of inactivity before a claim will be deleted."),a("br"),e._v("Note: If set to 0, it will disable claim expiration for user/group.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.initial-blocks")])]),e._v(" "),a("td",[e._v("120")]),e._v(" "),a("td",[e._v("The number of bonus starter claim blocks a player has initially. "),a("br"),e._v("Note: This number is not counted as part of accrued blocks. "),a("br"),e._v("Note: If using 'wilderness-cuboids', this value is 25600 by default.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.max-accrued-blocks")])]),e._v(" "),a("td",[e._v("80000")]),e._v(" "),a("td",[e._v("The limit on accrued blocks (over time). doesn't limit purchased or admin-gifted blocks. "),a("br"),e._v("Note: If using 'wilderness-cuboids', this value is 20480000 by default. "),a("br"),e._v("Note: This setting will affect "),a("code",[e._v("/scb")]),e._v(" command.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.max-bonus-blocks")])]),e._v(" "),a("td",[e._v("-1")]),e._v(" "),a("td",[e._v("The maximum amount of bonus blocks a player can obtain. "),a("br"),e._v("Note: Set to -1 or less to make unlimited. "),a("br"),e._v("Note: This setting will affect commands "),a("code",[e._v("/acb")]),e._v(" and "),a("code",[e._v("/buyclaimblocks")]),e._v(", use with caution.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.radius-inspect")])]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("The radius in blocks used to search for nearby claims while inspecting.")])])])]),e._v(" "),a("h2",{attrs:{id:"claim-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#claim-options"}},[e._v("#")]),e._v(" Claim Options")]),e._v(" "),a("p",[e._v("Claim Options can be set on individual claims, claim types, server, world, group or player.")]),e._v(" "),a("p",[e._v("Permissions for using Claim Options are "),a("code",[e._v("griefdefender.user.claim.option.<optionname>")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("griefdefender.abandon-delay")])]),e._v(" "),a("td",[e._v("0")]),e._v(" "),a("td",[e._v("The number of days to delay before allowing a player to abandon a newly created claim.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.create-mode")])]),e._v(" "),a("td",[e._v("area")]),e._v(" "),a("td",[e._v("The default claiming mode set for players on login. (area = 2D, volume = 3D)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.create-limit")])]),e._v(" "),a("td",[e._v("-1")]),e._v(" "),a("td",[e._v("Maximum number of claims per player. (-1 = unlimited)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.min-level")]),a("br"),a("code",[e._v("griefdefender.max-level")])]),e._v(" "),a("td",[e._v("0/255")]),e._v(" "),a("td",[e._v("The minimum/maximum level that a claim can be created in.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.min-size-x")]),a("br"),a("code",[e._v("griefdefender.max-size-x")])]),e._v(" "),a("td",[e._v("10/5000")]),e._v(" "),a("td",[e._v("The min/max size in blocks that the x-axis can be.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.min-size-y")]),a("br"),a("code",[e._v("griefdefender.max-size-y")])]),e._v(" "),a("td",[e._v("5/256")]),e._v(" "),a("td",[e._v("The min/max size in blocks that the y-axis can be.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.min-size-z")]),a("br"),a("code",[e._v("griefdefender.max-size-z")])]),e._v(" "),a("td",[e._v("10/5000")]),e._v(" "),a("td",[e._v("The min/max size in blocks that the z-axis can be.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-command-enter")])]),e._v(" "),a("td",[e._v("undefined")]),e._v(" "),a("td",[e._v("Used for executing a command on claim enter with specific contexts. Accepts the following placeholders : %player%, %owner%, %uuid%, %world%, %server%, %location%")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-command-exit")])]),e._v(" "),a("td",[e._v("undefined")]),e._v(" "),a("td",[e._v("Used for executing a command on claim exit with specific contexts. Accepts the following placeholders : %player%, %owner%, %uuid%, %world%, %server%, %location%")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-deny-flight")])]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Used to determine if a player is unable to fly in a claim.  Note: This does not give players the ability to fly, it merely removes the ability if set. This provides the greatest compatibility with plugins.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-weather")])]),e._v(" "),a("td",[e._v("undefined")]),e._v(" "),a("td",[e._v("Used to a set player's weather in a claim. Supported types are clear and rain.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.pvp")])]),e._v(" "),a("td",[e._v("undefined")]),e._v(" "),a("td",[e._v("Used to determine if players can combat each other.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.pvp-combat-command")])]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Used to determine if a player can use commands during PvP combat.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.pvp-combat-teleport")])]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Used to determine if a player can teleport during PvP combat.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.pvp-combat-timeout")])]),e._v(" "),a("td",[e._v("15")]),e._v(" "),a("td",[e._v("Used to determine how many seconds PvP combat is considered to continue after the most recent damage.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.rent-restore")])]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Used to determine if a rent owner has permission to have their claim automatically restored on rent end date."),a("br"),e._v("Note: This requires the claim rental to have an end date.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.tax-expiration")])]),e._v(" "),a("td",[e._v("7")]),e._v(" "),a("td",[e._v("Number of days after not paying taxes before a claim will be frozen.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.tax-expiration-days-keep")])]),e._v(" "),a("td",[e._v("7")]),e._v(" "),a("td",[e._v("Number of days to keep a claim after frozen and before being deleted")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.tax-rate")])]),e._v(" "),a("td",[e._v("1.0")]),e._v(" "),a("td",[e._v("Tax is calculated by the number of claimblocks in the claim. "),a("code",[e._v("Number of claimblocks * tax-rate")])])])])]),e._v(" "),a("h2",{attrs:{id:"admin-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-options"}},[e._v("#")]),e._v(" Admin Options")]),e._v(" "),a("p",[e._v("Admin Options can be set on individual claims, claim types, server, world, group or player.")]),e._v(" "),a("p",[e._v("Permissions for using Admin Options are "),a("code",[e._v("griefdefender.admin.claim.option.admin.<optionname>")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("griefdefender.player-deny-godmode")])]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Used to determine if a player can be in godmode within a claim.  Note: This does not give players the ability to be in godmode, it merely removes the ability if set. This provides the greatest compatibility with plugins.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-deny-hunger")])]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Used to if a player's hunger is denied in a claim.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-gamemode")])]),e._v(" "),a("td",[e._v("undefined")]),e._v(" "),a("td",[e._v("Used to determine the gamemode of a player in a claim. Accepts the following values : ADVENTURE, CREATIVE, SURVIVAL, SPECTATOR, UNDEFINED.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-health-regen")])]),e._v(" "),a("td",[e._v("0.0")]),e._v(" "),a("td",[e._v("Used to set the health regen amount for a player in a claim.  Note: If the player is at max health, this will have no effect.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-keep-inventory")])]),e._v(" "),a("td",[e._v("undefined")]),e._v(" "),a("td",[e._v("Used to determine if a player can keep inventory after death in a claim.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-keep-level")])]),e._v(" "),a("td",[e._v("undefined")]),e._v(" "),a("td",[e._v("Used to determine if a player can keep their level after death in a claim.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-teleport-delay")])]),e._v(" "),a("td",[e._v("undefined")]),e._v(" "),a("td",[e._v("Used to determine the delay before teleporting a player to a new location.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.player-walk-speed")])]),e._v(" "),a("td",[e._v("-1.0")]),e._v(" "),a("td",[e._v("Used to set a player's walk speed in a claim.  Note: (-1 = undefined)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("griefdefender.spawn-limit")])]),e._v(" "),a("td",[e._v("0")]),e._v(" "),a("td",[e._v("The limit of entity spawns a claim can have.")])])])]),e._v(" "),a("h2",{attrs:{id:"option-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-config"}},[e._v("#")]),e._v(" Option Config")]),e._v(" "),a("p",[e._v("On server startup, GD will generate a file named "),a("code",[e._v("options.conf")]),e._v(" which will have various settings to manage options.")]),e._v(" "),a("h3",{attrs:{id:"default-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-options"}},[e._v("#")]),e._v(" Default Options")]),e._v(" "),a("p",[e._v("The default options section "),a("code",[e._v("default-options")]),e._v(" controls the default transient meta values that GD will set in LP at server startup."),a("br"),e._v("\nThere are 4 subsections within this section.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variable")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("default-user-options")]),e._v(" "),a("td",[e._v("The default user options for all players. "),a("br"),e._v("Note: Setting default claim type options will override this.")]),e._v(" "),a("td",[e._v("[ ]")])]),e._v(" "),a("tr",[a("td",[e._v("default-user-basic-options")]),e._v(" "),a("td",[e._v("The default options applied to users for basic claims. "),a("br"),e._v("Note: These options override default global options.")]),e._v(" "),a("td",[e._v("[ ]")])]),e._v(" "),a("tr",[a("td",[e._v("default-user-subdivision-options")]),e._v(" "),a("td",[e._v("The default options applied to users for subdivisions. "),a("br"),e._v("Note: These options override default global options.")]),e._v(" "),a("td",[e._v("[ ]")])]),e._v(" "),a("tr",[a("td",[e._v("default-user-town-options")]),e._v(" "),a("td",[e._v("The default options applied to users for towns. "),a("br"),e._v("Note: These options override default global options.")]),e._v(" "),a("td",[e._v("[ ]")])])])]),e._v(" "),a("h3",{attrs:{id:"option-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-control"}},[e._v("#")]),e._v(" Option Control")]),e._v(" "),a("p",[e._v("The option control section lets you enable/disable option functionality. By default, all player/pvp and spawn options are disabled. To enable this functionality, you will need to set the corresponding option to true.")]),e._v(" "),a("p",[e._v("Here are the delivered options that can be controlled")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("option-control {\n    player-command-enter=false\n    player-command-exit=false\n    player-deny-flight=false\n    player-deny-godmode=false\n    player-deny-hunger=false\n    player-fly-speed=false\n    player-gamemode=false\n    player-health-regen=false\n    player-keep-inventory=false\n    player-keep-level=false\n    player-teleport-delay=false\n    player-walk-speed=false\n    player-weather=false\n    pvp=false\n    pvp-combat-command=false\n    pvp-combat-teleport=false\n    pvp-combat-timeout=false\n    spawn-limit=false\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br")])]),a("h3",{attrs:{id:"vanilla-fallback-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vanilla-fallback-values"}},[e._v("#")]),e._v(" Vanilla fallback values")]),e._v(" "),a("p",[e._v("This section is currently only used for player fly and walk default speeds. If your server uses a different default value, you can adjust it here.")]),e._v(" "),a("p",[e._v("The delivered defaults are")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('vanilla-fallback-values {\n    player-fly-speed="0.1"\n    player-walk-speed="0.2"\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);