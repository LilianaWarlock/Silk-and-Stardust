// when a player earns any advancement
PlayerEvents.advancement(event => {
    
    const { player, advancement, server } = event;
    if (advancement.id.path == 'dont_blink') {
        player.tell('§a You can buy new things in the market!');
        server.runCommandSilent(`kjs stages add ${player.username} fieldguide_dont_blink`);
    }
})
