// when a player earns any advancement
PlayerEvents.advancement(event => {
    
    const { player, advancement, server } = event;
    if (advancement.id.path == 'content/get_all_blossom_saplings') {
        player.tell('§a You can buy new things in the market!');
        server.runCommandSilent(`kjs stages add ${player.username} quark_get_all_trumpets`);
    }
})
