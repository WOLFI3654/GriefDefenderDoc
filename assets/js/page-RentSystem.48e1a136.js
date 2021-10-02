(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{706:function(e,a,t){"use strict";t.r(a);var s=t(1),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://media.discordapp.net/attachments/709505646457913426/709992848963141632/2019-12-18_22.png",alt:"Rent System"}})]),e._v(" "),t("p",[e._v("This new system will allow you to set your claim up for rent and earn some money on the way.")]),e._v(" "),t("h1",{attrs:{id:"how-to-enable-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enable-it"}},[e._v("#")]),e._v(" How to enable it")]),e._v(" "),t("p",[e._v("Open your global.conf file and under economy section, you will find the following lines:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("        # The specific hour in day to attempt to get owed claim rent balances from delinquent renters. Note: This uses military time and accepts values between 0-23. Default: 0\n        rent-delinquent-task-apply-hour=0\n        # Controls the maximum time limit(hours or days) that a claim owner can have their rental max set to.\n        # Note: This only affects claim rentals that have a max specified. If no max is specified by the claim owner, a renter may rent as long as they want.\n        rent-max-time-limit=100\n        # Controls which day a player should start to receive warnings about their rented claim nearing expiration. \n        # Ex. If set to '5', this will begin to send players messaging on login and at the rent apply hour when 5 days are remaining before expiration.\n        # Note: This only applies if the owner has 'rent-restore' option enabled and the rent owner sets a max.\n        rent-restore-day-warning=5\n        # Controls whether rented admin claims will use a schematic for restoration.\n        # Note: If set, the claim will create a schematic on rental start and restore it back when finished.\n        # Note: This ONLY applies to rentals with a max date set.\n        rent-schematic-restore-admin=false\n        # Whether rent signs are enabled.\n        rent-sign=false\n        # Controls whether the rent system is enabled. Note: This is currently experimental, use with caution.\n        rent-system=false\n        # The interval in minutes for checking claim rent payments that are due. Default: 1. Set to 0 to disable.\n        rent-task-interval=1\n        # The amount of transactions to keep for history. Default: 60\n        rent-transaction-log-limit=60\n        # Whether sell signs are enabled.\n        sell-sign=false\n        # The interval in minutes for updating sign data. Default: 5. Set to 0 to disable.\n        sign-update-interval=5\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br")])]),t("h1",{attrs:{id:"in-game-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-game-use"}},[e._v("#")]),e._v(" In Game Use")]),e._v(" "),t("p",[e._v("After you have properly modified the config and did "),t("code",[e._v("/gdreload")]),e._v(" or (better) restarted the server, now you can establish your first claim to be rented.")]),e._v(" "),t("p",[e._v("This system currently works fine for Basic, Town and Subdivided claims.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/sPB7pMs.png",alt:"Renting Sign"}})]),e._v(" "),t("p",[e._v("In order to start renting your claim, you need to put a sign inside a specific owned claim, and fill it using the following format:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("GD\nrent\n<amount per day/hour>\n[Min rent time] [Max rent time]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"example-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[e._v("#")]),e._v(" Example 1")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("GD\nrent\n100d\n5 30\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("This example means that you will charge a minimum of "),t("em",[t("strong",[e._v("500")])]),e._v(" to start the rental (5 x 100) which will give the user 5 days already paid and your claim will be available for rent up to "),t("strong",[e._v("30 days.")])]),e._v(" "),t("h3",{attrs:{id:"example-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example 2")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("GD\nrent\n10h\n60\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("This example means that you will charge "),t("strong",[e._v("10 per hour")]),e._v(" and your claim will be available for rent up to "),t("strong",[e._v("60 days.")])]),e._v(" "),t("h3",{attrs:{id:"example-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[e._v("#")]),e._v(" Example 3")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("GD\nrent\n100d\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("This example means that you will charge "),t("strong",[e._v("100 per day")]),e._v(" and your claim will be available for rent with unlimited time.")]),e._v(" "),t("p",[t("strong",[e._v("Sidenote:")]),e._v(" The rent time availability of your claim will start ticking as soon as you set up the sign, which means that if you start a rental with a max of "),t("strong",[e._v("30 days")]),e._v(" and a person starts renting it on the 5th day, that user will only have the claim available for "),t("strong",[e._v("25 days")]),e._v(".")]),e._v(" "),t("p",[e._v("After you place the sign, you will receive a message in chat that you need to read carefully, and then, click on CONFIRM.")]),e._v(" "),t("p",[e._v("If you did everything ok, your sign will be updated to something like this: (Layout may be different due to recent updates)")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/e194JUX.png",alt:"Rent Claim Started"}})]),e._v(" "),t("p",[e._v("If you want to cancel the claim rental, left-click the sign and click CONFIRM in chat.")]),e._v(" "),t("p",[e._v("As a customer, in order to rent the claim, you can use:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Right Click the sign: You will rent it. \nLeft Click the sign: Your rent will be canceled.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[t("strong",[e._v("IMPORTANT:")]),e._v(" if rent-schematics-restore is true, right after Canceling the rent, the blocks/entities/items will be lost and restored to its original state, so be careful.")]),e._v(" "),t("h1",{attrs:{id:"command-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-use"}},[e._v("#")]),e._v(" Command Use")]),e._v(" "),t("p",[e._v("The main command for handling rent is "),t("code",[e._v("/claimrent")]),t("br"),e._v("\nSyntax is as follows"),t("br"),e._v(" "),t("code",[e._v("/claimrent [cancel|info|list|create <rate> [max]]")])]),e._v(" "),t("h3",{attrs:{id:"example-1-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-1-2"}},[e._v("#")]),e._v(" Example 1")]),e._v(" "),t("p",[e._v("Create a rental for $10 per hour with a maximum of 1 day"),t("br"),e._v(" "),t("code",[e._v("/claimrent create 10h 1")])]),e._v(" "),t("h3",{attrs:{id:"example-2-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-2-2"}},[e._v("#")]),e._v(" Example 2")]),e._v(" "),t("p",[e._v("Create a rental for $10 per hour with unlimited rentals"),t("br"),e._v(" "),t("code",[e._v("/claimrent create 10h")])]),e._v(" "),t("h3",{attrs:{id:"example-3-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-3-2"}},[e._v("#")]),e._v(" Example 3")]),e._v(" "),t("p",[e._v("Cancel rental"),t("br"),e._v(" "),t("code",[e._v("/claimrent cancel")])]),e._v(" "),t("h3",{attrs:{id:"example-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[e._v("#")]),e._v(" Example 4")]),e._v(" "),t("p",[e._v("List all available rentals"),t("br"),e._v(" "),t("code",[e._v("/claimrent list")])]),e._v(" "),t("h3",{attrs:{id:"example-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[e._v("#")]),e._v(" Example 5")]),e._v(" "),t("p",[e._v("List current rental info"),t("br"),e._v(" "),t("code",[e._v("/claimrent info")])]),e._v(" "),t("h2",{attrs:{id:"current-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-features"}},[e._v("#")]),e._v(" Current Features")]),e._v(" "),t("ul",[t("li",[e._v("Claims can be restored using schematics option. If this is enabled, both the claim owner and the person renting it will receive a warning message.")]),e._v(" "),t("li",[e._v("When a person rents the claim, the owner claim will lose the privileges inside it until the rent period is over. The person who rented it will get the "),t("em",[e._v("Trust")]),e._v(" permission inside the claim and will be able to interact with blocks like doors, levers, pistons, plates, etc. After the rental is finished, the trust permission will be automatically removed.")]),e._v(" "),t("li",[e._v("Everything works automatically. Claim owner will received the money and the customer will be charged every specific time you previously configured.")]),e._v(" "),t("li",[e._v("If the customers fails to pay the rental amount, their permission will be suspended until the payment is done.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);