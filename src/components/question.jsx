import React, {useState} from 'react'


const selectedStyle={
    backgroundColor:'#904586',
    color:'white',
    padding:'16px',
    
}
const optionStyle={
    border:'1px solid #904586',
    color:'#904586',
    padding:'16px',

}
function Question({data, selectedAnswers, callback}) {
    const [selectedOption, setselectedOption] = useState()
    return (
    <div>
        <h2 style={{color:'black'}}>
            {data.question}
        </h2>
        <div>
            {data.options.map((option, index)=>{
                return <div
                style={selectedAnswers.findIndex((ans)=>{
                        return ans.ans===option
                    })>=0?{...selectedStyle}:{...optionStyle}}
                onClick={()=>{
                    setselectedOption(index)
                    callback({question:data.question,ans:option})
                }}>
                    {/* <input style={{pointerEvents:'none'}} checked={selectedAnswers.findIndex((ans)=>{
                        return ans.ans===option
                    })>=0?true:false} type='checkbox'/> */}
                    <span>{option}</span>
                </div>
            })}
        </div>
    </div>
    )
}

export default Question