import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람'},
        { id: 2, text: '얼음'},
        { id: 3, text: '눈'},
        { id: 4, text: '바람'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({id:nextId, text:inputText});
        setNames(nextNames);
        setInputText('');
        setNextId(nextId+1);
    }

    const onSelected = (id) => {
        const deletedNames = names.filter(name => name.id !== id);
        setNames(deletedNames);
    }

    const nameList = names.map((name) => <li key={name.id} onDoubleClick={() => onSelected(name.id)}>{name.text}</li>);
    return (
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            {nameList}
        </div>
    );
};

export default IterationSample;