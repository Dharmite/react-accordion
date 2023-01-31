import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
    return (
        <main>
            <section className='section'>
                <div className='container'>
                    <h3>Questions And Answers About Login</h3>
                    <div>
                        {data.map((question) => {
                            const { id, ...otherParams } = question;
                            return (
                                <>
                                    <SingleQuestion key={id} {...otherParams} />
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
