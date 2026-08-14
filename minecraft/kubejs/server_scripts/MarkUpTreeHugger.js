// when a player earns any advancement
PlayerEvents.advancement(event => {
   
    const { player, advancement, server, playerScore } = event;
    //player.tell(advancement.id.path);
    if (advancement.id.path == 'tree_hugger') {
        
        server.runCommandSilent(`scoreboard objectives add tree_hug_count minecraft.broken:minecraft.air`);
        server.runCommandSilent(`scoreboard objectives add number_check minecraft.broken:minecraft.air`);
        server.runCommandSilent(`scoreboard players add ${player.username} tree_hug_count 1`);
        server.runCommandSilent(`scoreboard players set ${player.username} number_check 9`);
        server.runCommandSilent(`execute if score ${player.username} tree_hug_count >= ${player.username} number_check run say §a You can buy new things in the market!`);
        server.runCommandSilent(`execute if score ${player.username} tree_hug_count >= ${player.username} number_check run kjs stages add ${player.username} fieldguide_tree_hugger`);
        server.runCommandSilent(`execute if score ${player.username} tree_hug_count < ${player.username} number_check run advancement revoke ${player.username} only fieldguide:tree_hugger`);
    }
})
