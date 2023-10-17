/// Vars



function init() {
	
	paramPitchOffset = local.parameters.addIntParameter("Set Offset", "MIDI-Notes Offset", offset);
}


//Events
function moduleParameterChanged(param)
{
  script.log(value.name + " param changed, new value: " + param.get());
}

function noteOnEvent(channel, pitch, velocity, pichOffset)
{
	script.log("Note on received "+channel+", "+pitch+", "+velocity);
	offset = local.parameters.setOffset.get() ;
	i = pitch - offset+1 ;
    local.values.padsNote.getChild("pad" + i).set(1);
}

function noteOffEvent(channel, pitch, velocity)
{
	script.log("Note off received "+channel+", "+pitch+", "+velocity);
	i = pitch - offset+1 ;
    local.values.padsNote.getChild("pad" + i).set(0);
}

function channelPressureEvent (channel, value)
{
	 script.log("Channel Pressure received "+channel+", "+value);
	 local.values.padsProgram.program.set ("100") ;	
	local.values.padsProgram.getChild("padPC"  + number).set(value);
}

function ccEvent(channel, number, value)
{
	script.log("ControlChange received "+channel+", "+number+", "+value);
	i = number;
	local.values.knobs.getChild("knob" + number).set(value);
}



//commands