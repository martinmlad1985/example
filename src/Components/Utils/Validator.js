
export let required= (value)=>{
    if(value){
        return undefined;
    }
    return 'required field';
}

export let maxLengthCreator= (maxLength)=> (value)=>{
    if(value.length> maxLength){
        return `max length ${maxLength} symbols`;
    }
    return undefined;
}