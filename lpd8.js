/// Vars



function init() {
	
	paramCcOffset = local.parameters.addIntParameter("Set CC Offset", "MIDI CC Offset", ccoffset);
	paramPitchOffset = local.parameters.addIntParameter("Set Note Offset", "MIDI-Notes Offset", offset);
	paramPcOffset = local.parameters.addIntParameter("Set PC Offset", "MIDI PC Offset", pcoffset);
}


//Events
function moduleParameterChanged(param)
{
  script.log(value.name + " param changed, new value: " + param.get());
}


function ccEvent(channel, number, value)
{	local.values.firstControlerValue.knob.set(number);
	
	offset = local.parameters.setCCOffset.get() ;
	i = (number - offset) + 1;
	local.values.knobs.getChild("knob" + i).set(value);
}

function noteOnEvent(channel, pitch, velocity, pichOffset)
{	local.values.firstControlerValue.padNote.set(pitch);

	offset = local.parameters.setNoteOffset.get() ;
	i = (pitch - offset) +1 ;
    local.values.padsNote.getChild("pad" + i).set(velocity);
}

function noteOffEvent(channel, pitch, velocity)
{
	i = (pitch - offset) +1 ;
    local.values.padsNote.getChild("pad" + i).set(0);
}

function programChangeEvent(channel, value, pcoffset)
{	local.values.firstControlerValue.padPC.set(value);

	pcoffset = local.parameters.setPCOffset.get() ;
	i = value - pcoffset +1 ;
	local.values.padsProgram.getChild("padPC" + i).set(value);
	
}



//commands