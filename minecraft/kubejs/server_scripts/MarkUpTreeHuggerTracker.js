// when a player unlocks any entry
FieldGuideEvents.entryUnlocked(event => {
	const { player, server, categoryId, advancement } = event;
    const { scoreboard } = server


    if ((event.categoryId) == ('fieldguide:plants')) {

        server.runCommandSilent(`scoreboard objectives add number_check minecraft.broken:minecraft.air`);
        server.runCommandSilent(`scoreboard players set ${player.username} number_check 30`);
        
        //event.player.tell('success');
        server.runCommandSilent(`scoreboard objectives add tree_hugger minecraft.broken:minecraft.air`);
        server.runCommandSilent(`scoreboard players add ${player.username} tree_hugger 1`);
       
        
        //server.runCommandSilent(`give ${player.username} minecraft:emerald 1`)

	    server.runCommandSilent(`execute if score ${player.username} tree_hugger >= ${player.username} number_check run advancement grant ${player.username} only fieldguide:tree_hugger`);
    }
})