import { useState } from 'react'
import SingleColor from './components/SingleColor'
import Values from 'values.js'
import './App.scss';

import React from 'react'

const App = () => {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            console.log(colors);
        } catch (error) {
            setError(true)
        }
        
    }

    return (
        <>
            <div>
                <section className="container">
                    <h3>Color Generator</h3>
                    <form onSubmit={handleSubmit} >
                        <input 
                            type="text" 
                            value={color} 
                            onChange={e => setColor(e.target.value)}
                            placeholder="#080 or #008000 or Green"
                            className={ `${error ? 'error' : null}`}
                        />
                        
                        {/* {
                            error ? <label htmlFor="input">Try somthing like : #080 or #008000 or Green</label> : ''
                        } */}
                        <button className="btn" type='submit'>
                            Submit
                        </button>
                    </form>
                </section>
                <section className="colors">
                    <h4>color list</h4>
                </section>
            </div>
        </>
    )
}

export default App
