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
        console.log('hello')
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
                            placeholder="#008000 or Green"
                        />
                    </form>
                    <button className="btn" type='submit'>Submit</button>
                </section>
                <section className="colors">
                    <h4>color list</h4>
                </section>
            </div>
        </>
    )
}

export default App
