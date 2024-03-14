
//addEventListner(type, listner, option)
//addEventListner(type, listner, useCapture)

//event is an operation performed after a particular condition is fulfilled
//there are many ways to include an event (inline, adding a functionality selecting the condition and putting an event, THE BEST WAY addEventListner)
// document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }


// type(type of event occuring 'click','hover',etc), 
// timestamp(returns the time at which it was created), 
// preventDefault(cancels the bubbling of events), 
// stopPropagation()

// target(the object at which the event performs), 
// toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

//there are two types of event bubbling (when both are false the event is called from lower to bottom just like a bubble, otherwise from top to bottom)
