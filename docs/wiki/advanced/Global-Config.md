---
title: Global Config
tag: Info
category: info
icon: config
---

GriefDefender's default config offers extended customization for your server. Below is a breakdown of all default variables for your convenience. 

:::: warning Some options can cause irreparable changes to your data
Please ensure that you have read the sub-text found next to the variables in your generated [global.conf](/wiki/advanced/Global-Config.html) file.  
**All migration variables should ALWAYS be used AFTER a backup of your data is made.**
::::

---

## Plugin Dependency
Do note, cost variables (such as Towns' `creation-cost`) **require** an Economy plugin (Example: [Vault](https://www.spigotmc.org/resources/34315/), [EssentialsX](https://www.spigotmc.org/resources/9089/)). Similarly, MCClans is only needed if you plan on using it's integration across plugins. It is **not**, however, required to use GriefDefender's Town claims.

For example, adding block-break to the list will translate into `griefdefender.user.flag.block-break` being checked as true, therefore allowing the player to edit his claim's block-break flag with `/cf`, `/cfg`, and `/cfp`. 

## Modular Configuration
GriefDefender allows for modular enabling. As per default configuration files however, all modules are enabled. Disabling a module will render all flags unusable. Only do it if you do not plan on using GriefDefender's management of said flag. You can choose to disable the following: 
* Block-Changes: block-break, block-grow, block-modify, block-place, block-pre, block-spread
* Collisions: collide-block, collide-entity
* Commands: command-execute
* Movements: enter-claim, exit-claim
* Entity: entity-damage, entity-riding, entity-spawn, entity-teleport-from, entity-teleport-to
* Explosions: explosion-block, explosion-entity
* Interacts: interact-block-primary, interact-block-secondary, interact-entity-primary, interact-entity-secondary, interact-inventory, interact-inventory-click, interact-item-primary, interact-item-secondary
* Item: item-drop, item-pickup, item-spawn, item-use, item-damage
* Liquids: liquid-flow
* Portals: portal-use
* Projectiles: projectile-impact-block, projectile-impact-entity

<hr>
Version based on release file: GriefDefender 2.3.9-DEV2
<hr>

# Claim
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| auto-chest-claim-block-radius | Radius used (in blocks) for auto-created claim when a chest is placed. Set to -1 to disable chest claim creation. | 4 |
| auto-nature-restore | Whether survival claims will be automatically restored to nature when auto-deleted. | FALSE |
| auto-schematic-restore | Whether survival claims will be automatically restored to its claim creation schematic on abandon/expiration. <br />Note: Enabling this feature will cause ALL newly created claims to automatically create a special schematic that will be used to restore claim on abandon/expiration.<br />Note: Enabling this feature will disable ability to resize claims.<br />Note: It is HIGHLY recommended to disable building in the wilderness before using this feature to avoid players exploiting.<br />Note: It is also recommended to ONLY use this feature in newly created worlds where there is no existing player data.<br />Note: This does NOT affect deletions. If admins want to restore back to original schematic, they can select '__restore__' by using /claimschematic command.| FALSE |
| border-block-radius | Set claim border of specified radius (in blocks), centered on claim. If set to 1, adds an additional 1 block protected radius around claim. <br />Note: It is not recommended to set this value too high as performance can degrade due to deeper claim searches. | 0 |
| child-inherit-trust | Whether children claims should inherit parent trust when inheritance is turned on. Default: False. | FALSE |
| claim-block-task | Whether claim block task should run to accrue blocks for players. <br />Note: If in economy-mode, use setting 'use-claim-block-task' under economy category. <br />Note: To configure amount accrued, see 'blocks-accrued-per-hour' option at [Global Options](/wiki/basic/Options.html#global-options) | FALSE |
| claim-block-task-move-threshold | The minimum threshold of movement (in blocks) required to receive accrued claim blocks. <br />Note: The claim block task runs every 5 minutes which is the time each player will get to move the required amount of blocks. | 0 |
| claim-create-radius-limit | The radius limit for the /claimcreate command. | 256 |
| claims-enabled | Whether claiming is enabled or not. (0 = Disabled, 1 = Enabled). | 1 |
| expiration-cleanup-interval | The interval in minutes for cleaning up expired claims. Set to 0 to disable. | 63 |
| explosion-block-surface-blacklist | A list of source id's that cannot cause explosion damage to blocks above sea level. | [ ] |
| explosion-entity-surface-blacklist | A list of id's that cannot cause explosion damage to entities above sea level. | [ ] |
| explosion-surface-block-level | The 'Y' block level that is considered the surface for explosions. | 0 |
| inspection-tool | The item used to inspect claims with a right-click. <br />Note: Set to empty quotes if you want to assign no item and use '/claim' mode exclusively. | ["minecraft:stick"](/wiki/basic/Claim-Management.html#item-custommodeldata-support) |
| modification-tool | The item used to create/resize claims with a right click.<br />Note: Set to empty quotes if you want to assign no item and use '/claim' mode exclusively. | ["minecraft:golden_shovel"](/wiki/basic/Claim-Management.html#item-custommodeldata-support) |
| piston-protection-in-claims | Whether piston protection should be enabled within claims. Note: This does not affect pistons crossing into another claim, that is always protected. This only determines whether or not GD should process pistons if it doesn't cross into another claim. | false |
| player-trapped-cooldown | The cooldown time, in seconds, when using the '/trapped' command. | 300 |
| protect-tamed-entities | Whether tamed entities should be protected in claims. | true |
| reserved-claim-names | A list of reserved claim names for use only by administrators. | [ ] |
| restrict-world-max-height | Whether to restrict claiming to world max height. | true |
| teleports-use-border-event | Whether teleports trigger claim border events. Default: True. <br />Note: Set to False if you want 'enter-claim' and 'exit-claim' to not be triggered by teleports. | TRUE |

# Context
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| enchantments | Whether potion effect contexts should be applied during permission checks. | false |
|ignored-debug-contexts | A list of ignored context values during debug. |
| player-equipment | Whether player equipment contexts should be applied during permission checks. | true |
| potion-effects | Whether potion effect contexts should be applied during permission checks. | true |

# Economy
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| bank-system | Whether to enable the bank system for claims. Set to true to enable. | FALSE |
| bank-transaction-log-limit | The amount of transactions to keep for history. | 60 |
|currency-symbol | The currency symbol for economy messages. Default: $ | $ |
| economy-mode | Uses economy instead of player claim blocks for claim creation. If true, disables the claim block system in favor of economy. <br />Note: Using this mode disables the '/buyblocks' command as claim creation will pull funds directly from a player's economy balance. <br />Note: If players have existing claimblocks from past configurations, an admin must use the '/ecomigrateblocks' command to convert remainder to currency. | FALSE |
| rent-delinquent-task-apply-hour | The specific hour in day to attempt to get owed claim rent balances from delinquent renters. <br />Note: This uses military time and accepts values between 0-23. | 0 |
| rent-max-time-limit | Controls the maximum time limit(hours or days) that a claim owner can have their rental max set to. <br />Note: This only affects claim rentals that have a max specified. If no max is specified by the claim owner, a renter may rent as long as they want. | false |
| rent-restore-day-warning | Controls which day a player should start to receive warnings about their rented claim nearing expiration. <br />Ex. If set to '5', this will begin to send players messaging on login and at the rent apply hour when 5 days are remaining before expiration. <br />Note: This only applies if the owner has 'rent-restore' option enabled and the rent owner sets a max. | 5 |
| rent-schematic-restore-admin | Controls whether rented admin claims will use a schematic for restoration. <br />Note: If set, the claim will create a schematic on rental start and restore it back when finished. <br />Note: This ONLY applies to rentals with a max date set. | false |
| rent-sign | Whether rent signs are enabled. | FALSE |
| rent-system | Controls whether the rent system is enabled. | FALSE |
| rent-task-interval | The interval in minutes for checking claim rent payments that are due. Set to '0' to disable | 1 |
| rent-transaction-log-limit | The amount of transactions to keep for history. | 60 |
| sell-sign | Whether sell signs are enabled. | false |
| sign-update-interval | The interval in minutes for updating sign data. Set to '0' to disable | 1 |
| tax-apply-hour | The specific hour in day to apply tax to all claims. <br />Note: This uses military time and accepts values between 0-23. | 0 |
| tax-system | Whether to enable the tax system for claims. Set to true to enable. | FALSE |
| tax-transaction-log-limit | The amount of transactions to keep for history. | 60 |


# Message
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| deny-message-action-bar | Controls whether to send claim deny messages to action bar. <br />Note: Setting to false will send messages to chat. | TRUE |
| enable-exit-chat-messages | Controls whether exit chat messages are displayed when both enter and exit messages are being sent to a player at the same time.For example, if both an enter and exit title message is configured in a claim then the exit title would be sent to chat if this setting is true. | FALSE |
| enter-claim-player-messages | Controls whether to display playername and claim display name as enter message if not set. <br />Set to '1' to send messages to chat. <br />Set to '2' to send messages to actionbar. <br />Set to '3' to send messages to title. <br /> Set to 0 to disable. | 2 |
| enter-exit-chat-show-gd-prefix | Whether GD prefix should be shown in enter/exit chat messages. | TRUE |
| gd-prefix | Controls the prefix used when sending messages. | [&bGD&r]  |
| greeting-farewell-action-bar | Controls whether to send greeting/farewell messages to action bar by default. <br />Note: Setting to true will send messages to actionbar. <br />Note: This will only be set if there is no actionbar already set in claim. If so, it will use chat instead. | FALSE |
| locale | Set the locale to use for GP messages. Available languages: de_DE, en_US, es_ES, fr_FR, it_IT, pl_PL, pt_BR, ru_RU, tr_TR, zh_CN, zh_HK. The data is stored under assets in jar. <br />Note: The language code must be lowercase and the country code must be uppercase. | "en_US" |
| locale-unicode-fix | Attempts to adjust unicode fonts to represent minecraft default fonts better. <br />Note: If you are using 'pl_PL' or 'ru_RU', this setting should be set to false. <br />Note: Any other languages that experience misalignment in chat menus should disable this setting. | TRUE |
| wilderness-default-message | Controls whether wilderness default enter message is sent to players. | TRUE |

# Migrators
# Bukkit
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| classic | Set to true to enable the classic migrator. <br />Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.<br />Note: It is recommended to backup data before using. | FALSE | 
| classic-database | Migrates GP bukkit classic database. | FALSE |
| classic-playerdata-threshold | Controls the last active player day threshold in order to avoid migrating inactive GP playerdata. To disable, set value to 0. <br />Note: For example, with the default value of '180' the the migrator will only migrate playerdata for players that played within the past 180 days. <br />Note: This only handles a player's playerdata where accrued/bonus block information is stored. This setting has no effect on claim migration. <br />Note: This avoids storing inactive user data in LuckPerms which helps keep '/lp editor' view clean. | 180 |
| griefdefender-file-to-database | Set to true to migrate from file format to database. <br />Note: The storage method must be set to hocon in order for this to work properly. <br />Note: After migration is complete, switch storage to database. <br />Note: This will NOT remove existing files in case you want to go back. | FALSE |
| playerdata | Set to true to enable the legacy GriefDefender playerdata file migrator. <br /> Note: This setting is not for migrating GriefPrevention playerdata. Use 'classic' option instead. <br /> Note: Migrates legacy playerdata file format to permissions storage such as LuckPerms json or mysql storage. <br /> Note: Before turning this on, make sure you properly set 'context-storage-type' in the the playerdata section of this config. <br /> Note: It is HIGHLY recommended to backup your permissions database before running this migrator as all local playerdata files will be migrated to it. <br /> Note: Do NOT run this migrator on more than one server if multiple servers share the same permissions database. | false |
| red-protect | Set to true to enable RedProtect data migrator. | FALSE |
| residence | Set to true to enable Residence data migrator. | TRUE |
| worldguard | Set to true to enable WorldGuard data migrator. <br />Note: Only cuboid regions are supported. <br />Note: It is recommended to backup data before using. | FALSE |

# Sponge
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| griefprevention-bukkit | Set to true to enable the griefprevention bukkit migrator. <br />Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format. <br />Note: It is recommended to backup data before using. | FALSE |
| griefprevention-sponge | Set to true to enable the griefprevention sponge migrator. <br />Note: Migrates GP sponge claim data to current format. <br />Note: It is recommended to backup data before using. | FALSE |
| red-protect | Set to true to enable RedProtect data migrator. <br />Note: All RedProtect data will be converted into basic claim data. | FALSE |
| worldguard | Set to true to enable WorldGuard data migrator. <br />Note: Only cuboid regions are supported. <br />Note: It is recommended to backup data before using. | FALSE |

# Mod
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| entity-move-event | Allows GD's enter-claim and exit-claim to support non-player movement such as monsters and animals. | Default: false |
| block-id-convert-list | # Used to override generic block id's to their actual id during TE and item usage if available. Add the target block id to list if you want to force a conversion when detected. # Note: This is useful for mods such as IC2 which uses the generic id 'ic2:te' for its multi-block. | "gregtech:machine", "ic2:te" |
| fakeplayer-identifiers | Contains a list of strings used to identify a fakeplayer by UUID or name. To use, add the fakeplayer UUID or name. | ["41C82C87-7AfB-4024-BA57-13D2C99CAE77", BFC3377F-C3C9-3382-9DA6-79B50A9AFE57, "0D0C4CA0-4FF1-11E4-916C-0800200C9A66", "[Minecraft]", "OpenModsFakethis*"] |
| mod-id-map | Used to map an unknown mod item/block/entity to a mod id. To use, add the mod package with a mapping to a mod id. Ex. 'com.pixelmonmod.*', 'pixelmon' would map an entity containing class name 'com.pixelmonmod.*' to 'pixelmon' | "com.pixelmonmod.*"=pixelmon |
| tile-id-nbt-map | Used to override generic tileentity id's to their actual id during TE usage. Add the target TE id as key and NBT key where ID is stored as value. | "gregtech:machine"=MetaId |
 

# Optimization
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
|async-claim-tool-actions | Whether to process player claim tool actions async for performance. (Default: true) <br /> Note: If you encounter any async thread issues, disable this setting. | TRUE |
| async-player-claim-visuals | Whether to process player claim visuals async for performance. (Default: true) <br /> Note: If you encounter any async thread issues, disable this setting. | TRUE |
| block-item-drops | Controls whether to ignore item drops from block sources. <br /> Note: This is only triggered when a player breaks a block. | TRUE |
| cache-db-player-claim-block-lookup-expiration | Controls the amount of time, in seconds, for the permission cache of all entity damage actions in world. If the cache is accessed before expiration then the time is reset. <br />Note: Setting this too high may result in wrong entity damage permission results. | 5 |
cache-entity-damage-expiration | Controls the amount of time, in seconds, for the permission cache of all entity damage actions in world. If the cache is accessed before expiration then the time is reset. <br /> Note: Setting this too high may result in wrong entity damage permission results. | 5 |
| cache-entity-spawn-expiration | Controls the amount of time, in seconds, for the permission lookup cache of all actions in world. If the cache is accessed before expiration then the time is reset. <br />Note: This cache will occur after special caches such as entity damage, explosions, and physics. <br />Note: Setting this too high may result in players not seeing proper results with their actions. | 5 |
| cache-permission-lookup-expiration | Controls the amount of time, in seconds, for the permission lookup cache of all actions in world. If the cache is accessed before expiration then the time is reset. <br /> Note: This cache will occur after special caches such as entity damage, explosions, and physics. <br /> Note: Setting this too high may result in players not seeing proper results with their actions. | 3 |
| cache-physics-tracking-expiration |  Controls the amount of time, in seconds, for the permission cache of all block physic changes in world. <br /> Note: Blocks such as redstone will usually cache longer due to the repeated calls made. <br /> Note: Setting this too high may result in players not being tracked properly during block changes. | 5 |
| dispenser-item-spawns | Controls whether dispener item spawns are ignored. | TRUE |
| entity-damage-living-passive | Controls whether entity damage events that contain both a source/target living passive entity, such as two animals fighting, are ignored. | TRUE |
| entity-damage-monster | Controls whether entity damage events that contain both a source/target monster are ignored. | TRUE |
| entity-damage-monster-other | Controls whether entity damage events that contain a monster and other entity are ignored. |
| entity-damage-source-living-passive | Controls whether entity damage source or block that target a living passive are ignored. | TRUE |
| entity-damage-source-monster | Controls whether entity damage source or block that target a monster are ignored. | TRUE |
| entity-interact-block | Controls whether an entity interacting with a block is ignored. | TRUE |
| entity-item-pickup-non-player | Controls whether entity item pickups made by non-players are ignored. | TRUE |
| fall-non-player | Controls whether non-player falls are ignored. | TRUE |
| monster-player-damage | Controls whether monster attacks against a player are ignored. <br /> Note: This does not include explosion damage. <br /> Note: If you need to prevent damage from monsters in claims then this should remain false. | FALSE |
| player-monster-damage | Controls whether player attacks against a monster are ignored. <br /> Note: This does not include explosion damage. | TRUE |
| wilderness-ambient-spawns | Controls whether ambient spawns, such as bats, are ignored in wilderness. <br /> Note: If you want to control aquatic spawns in wilderness, set this to false. | TRUE |
| wilderness-animal-spawns | Controls whether animal spawns, such as pigs, are ignored in wilderness. <br /> Note: If you want to control animal spawns in wilderness, set this to false. | TRUE |
| wilderness-aquatic-spawns | Controls whether aquatic spawns, such as squids, are ignored in wilderness. <br /> Note: If you want to control aquatic spawns in wilderness, set this to false. | TRUE |
| wilderness-liquid-flow | Controls whether liquid flow is ignored in wilderness. <br /> Note: If you want to control liquid flow in wilderness, set this to false. | TRUE |
| wilderness-monster-spawns | Controls whether monster spawns, such as creepers, are ignored in wilderness. <br /> Note: If you want to control monster spawns in wilderness, set this to false. | TRUE |
| xp-orb-drop | Controls whether experience orbs are ignored when dropped. | TRUE |


# Permission
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| griefdefender-claim-group-priority | The claimgroup permission group priority. | -80 |
| griefdefender-claim-priority | The claim permission group priority. | -60 |
| griefdefender-default-priority | The deffault permission group priority. | -100 |
| griefdefender-default-priority | The default permission group priority. | -80 |
| griefdefender-option-priority | The option permission group priority. | 0 |
| griefdefender-override-priority | The override permission group priority. | -40 |
| griefdefender-trust-priority | The trust permission group priority. | -70 |

# Player Data
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| claim-block-system | Determines which claim block system to use for claims. (Default: AREA) <br />If set to VOLUME, claim blocks will use the chunk count system to balance 3d claiming. <br />If set to AREA, the standard 2d block count system will be used. | AREA |
| context-storage-type | The context type used when storing playerdata within a permissions database. <br />Available types are : global, server, world. (Default: global) <br />Global will store data globally shared by all servers. <br />Server will store data per server. Note: This requires servername to be properly set in permissions config. <br />World will store data per world.  | GLOBAL |
| migrate-area-rate | The rate to divide each accrued claim blocks total by. <br />Set to a value greater than -1 to enable. (Default: 256). <br />Note: This should only be used when migrating from volume (3D system) to area (2D system). <br /> In this system, a chunk costs 256 blocks. <br />This requires 'claim-block-system' to be set to AREA. | -1 |
| migrate-volume-rate | The rate to multiply each accrued claim blocks total by. <br />Set to a value greater than -1 to enable. (Default: 256). <br />Note: This should only be used when migrating from area (2D system) to volume (3D system). <br />Each chunk is worth 65,536 blocks in the new system compared to 256 in old. <br />This requires 'claim-block-system' to be set to VOLUME. |-1 |
| reset-accrued-claim-blocks | If enabled, resets all playerdata accrued claim blocks to match total cost of claims owned. <br />Example: If a player has 5 basic claims with a total cost of 1000, this will set their accrued claim blocks to 1000. <br />Note: This will also reset all bonus claim blocks to 0. It is highly recommended to backup before using. | FALSE |
| reset-migrations | If enabled, resets all playerdata migration flags to allow for another migration. <br /> Note: Use this with caution as it can easily mess up claim block data. It is highly recommended to backup before using. | FALSE |

# Provider
Manages plugin providers that GD hooks into for extended functionality.
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| BlueMap | Toggles whether GDhooks communicates with the BlueMap | true |
| BossShopPro | Toggles whether GDhooks communicates with the BossShopPro | true |
| ChestShop | Toggles whether GDhooks communicates with the ChestShop | true |
| DynamicShop | Toggles whether GDhooks communicates with the DynamicShop | true |
| Dynmap | Toggles whether GDhooks communicates with the Dynmap | true |
| InsaneShops | Toggles whether GDhooks communicates with the InsaneShops | true |
| MyPet | Toggles whether GDhooks communicates with the MyPet | true |
| MythicMobs | Toggles whether GDhooks communicates with the MythicMobs | true |
| QuickShop | Toggles whether GDhooks communicates with the QuickShop | true |
| RevoltCrates | Toggles whether GDhooks communicates with the RevoltCrates | true |
| Shop | Toggles whether GDhooks communicates with the Shop | true |
| ShopChest | Toggles whether GDhooks communicates with the ShopChest | true |
| Slabbo | Toggles whether GDhooks communicates with the Slabbo | true |
| Slimefun | Toggles whether GDhooks communicates with the Slimefun | true |
| UltimateShops | Toggles whether GDhooks communicates with the UltimateShops | true |


# PvP
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| allow-fly | Whether flying is allowed during PvP. | false |
| combat-logout | Whether players should be killed if they logout while in pvp combat. | false |
| deny-messages | Whether players receive pvp deny messages. | True |
| enabled | Whether pvp protection is enabled for players. <br />Note: Turnings this off disables all PvP functionality in GriefDefender. | true |

# Town
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| auto-nature-restore | Whether survival towns will be automatically restored to nature when auto-deleted. | FALSE |
| clan-require-town | Requires a town to be owned for MCClans. <br />Note: This is for Sponge only. | TRUE |
| cleanup-task-interval | The interval in minutes for restoring blocks in an expired town. | 5 |
| creation-cost | The required amount of funds to create a town. <br />Note: This requires an Economy plugin. | 0.0 |

# Visual
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| active-claim-visual-time | The active time, in seconds, to keep a claim's visuals shown to a player. <br />Note: If value is <= 0, GD will use the default value. | 60 |
| active-create-block-visual-time | The active time, in seconds, to keep a claim's create block visual shown to a player. <br />Note: This only applies during claim creation. <br />Note: If value is <= 0, GD will use the default value. | 180 |
| client-visuals-per-tick | The amount of block visuals a client can receive per tick when showing/hiding claims. | 12 |
| cuboid-level-visuals-2d | Whether to use cuboid visuals, in 2D claims, during inspection with owner min/max claim levels between 0 and 255 or 0 and 319 for MC 1.17+. <br />Note: WECUI visuals are not associated to this option. <br />Note: If enabled, this will send many block updates to players causing more client strain depending on size of claim. Use with caution. | FALSE |
| filler-spacing | The space between each filler visual block. | 10 |
| hide-borders-when-using-wecui | Whether to hide the glowstone/gold block borders when using WECUI. | FALSE |
| hide-fillers-when-using-wecui | Whether to hide the block fillers when using WECUI. | TRUE |
| hide-wecui-drag-visuals-2d | Whether drag visuals should be shown while creating a claim in 2D mode. | TRUE |
| claim-create-block | The visual block used during claim creation. | minecraft:diamond_block |
| admin-accent-block | The visual accent block used for admin claims. | minecraft:pumpkin |
| admin-corner-block | The visual corner block used for admin claims. | minecraft:glowstone |
| admin-filler-block | The visual filler block used for admin claims. | minecraft:pumpkin |
| basic-accent-block | The visual accent block used for basic claims. | minecraft:gold_block |
| basic-corner-block | The visual corner block used for basic claims. | minecraft:glowstone |
| basic-filler-block | The visual filler block used for basic claims. | minecraft:gold_block |
| error-accent-block | The visual accent block used to visualize an error in a claim. | minecraft:netherrack |
| error-corner-block | The visual corner block used to visualize an error in a claim. | minecraft:redstone_ore |
| error-filler-block | The visual filler block used to visualize an error in a claim. | minecraft:diamond_block |
| subdivision-accent-block | The visual accent block used for subdivision claims. | minecraft:white_wool or minecraft:wool for legacy versions |
| subdivision-corner-block | The visual corner block used for subdivision claims. (Default: minecraft:iron_block) | minecraft:iron_block |
| subdivision-filler-block | The visual filler block used for subdivision claims. (Default: minecraft:white_wool or minecraft:wool for legacy versions) | minecraft:white_wool |
| town-accent-block | The visual accent block used for town claims. (Default: minecraft:emerald_block) | minecraft:emerald_block |
| town-corner-block | The visual corner block used for town claims. (Default: minecraft:glowstone) | minecraft:glowstone |
| town-filler-block | The visual filler block used for town claims. (Default: minecraft:emerald_block) | minecraft:emerald_block |

# World
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| protected-worlds | A list of worlds by name or resource location that GriefDefender should protect. If empty, GriefDefender will protect all worlds. | [ ] |