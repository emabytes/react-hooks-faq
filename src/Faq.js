import React, { useState } from 'react';

const Faq = () => {
    const [isOpened, setExpand] = useState(false)
    return (
        <article className="faq">
            <div className="wrap">
                <h3>Why is React great?</h3>
                <input value={isOpened ? "-" : "+"} onClick={() => setExpand(!isOpened)} type="button" />
            </div>
            <div>
                <p className={isOpened ? "show" : "hide"}>Fast learning curve</p>
            </div>
        </article>
    );
}

export default Faq;