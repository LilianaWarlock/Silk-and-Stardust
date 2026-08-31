// when a player earns any advancement
PlayerEvents.advancement(event => {
    
    const { player, advancement, server } = event;
    player.tell (advancement.id.path);
    if (advancement.id.path == 'activities/obtain_glowshroom_cap') {
        player.tell('§a You can buy new things in the market!');
        server.runCommandSilent(`kjs stages add ${player.username} darker_depths_glowshroom`);
    }
})
