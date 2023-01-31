import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
    const [selected, setSelected] = useState(false);

    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button
                    className='btn'
                    onClick={() => setSelected((prev) => !prev)}
                >
                    {selected ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>

            {selected ? <p>{info}</p> : null}
        </article>
    );
};

export default Question;
