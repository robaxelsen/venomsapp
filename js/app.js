
//TODO: Find a solution for randNum having a too wide range.

var venoms = [
  {
    "name": "aconite",
    "description": "Afflict your victim with sheer stupidity.",
    "envenomable": true,
    "afflictions": "stupidity",
    "cures": [
      "eat goldenseal",
      "eat plumbum",
      "focus mind" ]
  },
  {
    "name": "camus",
    "description": "A more powerful version of Sumac poison.",
    "envenomable": false,
    "afflictions": "damage",
    "cures": [
      "drink health",
      "eat irid moss" ]
  },
  {
    "name": "colocasia",
    "description": "Cause both blindness and deafness in your victim.",
    "afflictions": [
      "deafness",
      "blindness" ],
    "cures": "apply epidermal to head"
  },
  {
    "name": "curare",
    "description": "Cause your victim's body to freeze with paralysis.",
    "afflictions": "paralysis",
    "cures": [
      "eat bloodroot",
      "eat magnesium" ]
  },
  {
    "name": "darkshade",
    "description": "Give your target an allergy to sunlight.",
    "afflictions": "an allergy to sunlight",
    "cures": [
      "eat ginseng",
      "eat ferrum" ]
  },
  {
    "name": "delphinium",
    "description": "Put your victim to sleep.",
    "afflictions": "sleeping",
    "cures": "wake"
  },
  {
    "name": "digitalis",
    "description": "Cause unbearable shyness in your victim.",
    "afflictions": "shyness",
    "cures": [
      "eat goldenseal",
      "eat plumbum",
      "focus mind" ]
  },
  {
    "name": "epseth",
    "description": "Cause the legs of your victim to become useless.",
    "afflictions": "A broken left/right leg",
    "cures": "apply mending to legs"
  },
  {
    "name": "epteth",
    "description": "Cause your victim's arms to shrivel",
    "afflictions": "A broken left/right arm",
    "cures": "apply mending to arms"
  },
  {
    "name": "euphorbia",
    "description": "Induces spasmodic vomiting.",
    "afflictions": "nausea",
    "cures": [
      "eat ginseng",
      "eat ferrum" ]
  },
  {
    "name": "eurypteria",
    "description": "Afflict your victim with recklessness.",
    "afflictions": "reckless",
    "cures": [
      "eat lobelia",
      "eat argentum",
      "focus mind" ]
  },
  {
    "name": "gecko",
    "description": "Cause your victim to secrete foul oils from his skin.",
    "afflictions": "slickness",
    "cures": [
      "smoke valerian",
      "smoke realgar",
      "eat bloodroot",
      "eat magnesium"
     ]
  },
  {
    "name": "kalmia",
    "description": "Afflict your victim with severe asthma.",
    "afflictions": "asthma",
    "cures": [
      "eat kelp",
      "eat aurum" ]
  },
  {
    "name": "larkspur",
    "description": "Cause great dizziness in your target.",
    "afflictions": "dizziness",
    "cures": [
      "eat goldenseal",
      "eat plumbum",
      "focus mind" ]
  },
  {
    "name": "loki",
    "description": "This unpredictable toxin will afflict your victim with a random venom.",
    "afflictions": "random venom",
    "cures": "all"
  },
  {
    "name": "monkshood",
    "description": "Causes your victim to become disfigured making their loyal servants turn on them.",
    "afflictions": "disloyalty",
    "cures": [
      "smoke valerian",
      "smoke realgar" ]
  },
  {
    "name": "nechamandra",
    "description": "A venom that chills the veins.",
    "afflictions": "the shivers",
    "cures": "apply caloric"
  },
  {
    "name": "notechis",
    "description": "Induce haemophilia in your target.",
    "envenomable": false,
    "afflictions": "haemophilia",
    "cures": [
      "eat ginseng",
      "eat ferrum" ]
  },
  {
    "name": "oculus",
    "description": "Forces your victim's eyelids open clearing his eyes of blindness.",
    "afflictions": "cure blindness",
    "cures": "N/A"
  },
  {
    "name": "oleander",
    "description": "Cause blindness in your target.",
    "afflictions": "blindness",
    "cures": "apply epidermal to head"
  },
  {
    "name": "prefarar",
    "description": "Increase your victim's sensitivity to pain.",
    "afflictions": "sensitivity",
    "cures": [
      "eat kelp",
      "eat aurum" ]
  },
  {
    "name": "scytherus",
    "description": "A nasty venom that will thin the victim's blood allowing your toxins to be more effective.",
    "afflictions": "thin blood",
    "cures": [
      "eat ginseng",
      "eat ferrum" ]
  },
  {
    "name": "selarnia",
    "description": "This venom will force the spirit animals out of those pesky forestals.",
    "afflictions": "a severed bond with the spirits",
    "cures": "apply mending to body"
  },
  {
    "name": "slike",
    "description": "Causes your victim to fall prey to anorexia.",
    "afflictions": "anorexia",
    "cures": [
      "apply epidermal to body",
      "focus mind" ]
  },
  {
    "name": "sumac",
    "description": "This venom will cause minor damage to adventurers and denizens.",
    "envenomable": false,
    "afflictions": "damage",
    "cures": [
      "drink health",
      "eat irid moss" ]
  },
  {
    "name": "vardrax",
    "description": "This potent venom will instill an addiction in your victim that will not be sated.",
    "afflictions": "addiction to curatives",
    "cures": [
      "eat ginseng",
      "eat ferrum" ]
  },
  {
    "name": "vernalius",
    "description": "A venom that weakens the muscles.",
    "afflictions": "weariness",
    "cures": [
      "eat kelp",
      "eat aurum" ]
  },
  {
    "name": "voyria",
    "description": "This deadly venom will induce a quick death for its victim.",
    "afflictions": "voyria",
    "cures": "sip immunity"
  },
  {
    "name": "xentio",
    "description": "Cause a loss of coordination in your target.",
    "afflictions": "clumsiness",
    "cures": [
      "eat kelp",
      "eat aurum" ]
  }
];

// jQuery function to make jQuery fire when document is ready
$(document).ready(function() {

  $("a").click(function() {
    var randNum = Math.floor((Math.random() * (venoms.length)));
    console.log(randNum);
    descAppear = function() {
      dispdesc.innerHTML = venoms[randNum].description;
    };

    affsAppear = function() {
      dispaffs.innerHTML = venoms[randNum].afflictions;
    };

    curesAppear = function() {
      dispcures.innerHTML = venoms[randNum].cures;
    };

    $(".toprow").html("");
    $(".toprow").append('<div class="col-md-4 col-md-offset-4 cmdresult"><div class="thumbnail"><div class="caption"><h2 style="font-size: 3rem;">' + venoms[randNum].name + '</h2><div class="showdesc" onclick="descAppear()"><span id="dispdesc">description</span></div><div class="showaffs" onclick="affsAppear()"><span id="dispaffs">afflictions</span></div><div class="showcures" onclick="curesAppear()"><span id="dispcures">cures</span></div></div></div>');
  });

  // http://brm.io/jquery-match-height/ jQuery plugin to make sure .cmdresult divs have equal heights
  $(function() {
    // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)
    // get test settings
    var byRow = $('body').hasClass('test-rows');
    // apply matchHeight to each item container's items
    $('.toprow').each(function() {
      $(this).children('.cmdresult').matchHeight({
        byRow: byRow
      });
    });
  });
});
