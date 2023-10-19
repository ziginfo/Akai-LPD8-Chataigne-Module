# Akai-LPD8-Chataigne-Module

this controls the Akai's LPD8 by MIDI

in the Values Section, you'll find the 8 knobs and the 8 Pads

use the "Set Offset" in the Parameter section to get the right Pad Note Numbers shown in the Values-Section

this depends of your User-Configuration of the LPD8's Pads

Offset=0 means the  Pad-1-Value responds to Note 0

By Default and for Preset-1, the first Pad on the LPD8 has Note N°36; in consequence, set the Offset to 36 to get it shown on Pad-1 in the Module.

Programm-Change response will be added in a later version....

# New Version 1.2

added Program-Change-Pads and First-Controler-Value

to get the feedback right, the 8 controlers (Knobs or Pads) are supposed to  follow each other regarding their Note, PC or CC Values
and reference-value is 0 !

just hit the first Pad or turn the first Knob and look at the First-Controler-Value...(its the CC, PC or/and Note Number)

then set the Offset-Value (in the top of the Parameters) with this "First-Controler-Value" and you'll get the feedback resynced to the Pads and the Knobs 1 to 8....

be aware that when you are loading the module all the Offsets are set to 0, but the real Values on the LPD8 Pads and Knobs are depending of the settings or the presets !

default values for Preset1 are :
1 (to8) for the Knobs; 36 (to 43) for the Note-Pads , and 0 (to 7) for the PC-Pads (and there are 4 different (and freely configurable) Presets available on the LPD8)

and the Pads can send also CC-Messages (by defalt on Channel1 as do the Knobs !); but I did not integrate them into the Pad-Section as this would create confusion with the Knobs !!
