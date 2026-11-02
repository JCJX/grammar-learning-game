(()=>{'use strict';
 document.addEventListener('click',e=>{if(e.target.closest('[data-mic-settings]'))window.QuestNative?.openMicrophoneSettings?.()});

 // Preserve recorder callbacks across native permission/file chooser interruptions.
 // Stop active capture without invalidating the current mounted UI session.
 window.QuestPause=()=>{window.QuestRecorderPause?.();if(oralCapture){oralCapture.cancel();oralCapture=null;}LocalSpeech.stopPlayback();save()};
 document.addEventListener('visibilitychange',()=>{if(document.hidden)window.QuestPause()});window.addEventListener('pagehide',()=>{cleanupOral();save()});
})();
