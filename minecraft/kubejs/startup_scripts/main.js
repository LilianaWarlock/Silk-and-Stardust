StartupEvents.registry("mob_effect", (event) => {
  event
    .create("soaring") // Create the effect under "kubejs:custom_effect"
    .color(0x000000) // Sets the color of the Effect's Particles.
    .beneficial() // Categorizes the Effect as Beneficial.

    // modifyAttribute is useful to scale an entity's attributes only lasting while under the effect
    .modifyAttribute(
      "air_drag_modifier", // The attribute to scale
      "ea9a4c23-07b1-45cf-aa0d-5fd7232fc875", //Some random UUID which serves as the effect's unique instance
      -0.1, // The amount to increase/decrease by
      "add_value", // The operation to perform
    );
});