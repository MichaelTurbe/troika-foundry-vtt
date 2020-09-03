// Import Modules
import { troikaActor } from "./actor/actor.js";
import { troikaActorSheet } from "./actor/actor-sheet.js";
import { troikaItem } from "./item/item.js";
import { troikaItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.troika = {
    troikaActor,
    troikaItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = troikaActor;
  CONFIG.Item.entityClass = troikaItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("troika", troikaActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("troika", troikaItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});