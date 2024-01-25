import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = props => {

    const {
        disabled,
        onSubmit
    } = props
    


    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = evt => {
        
        evt.preventDefault()
        
        return onSubmit(formState)
    }

    return <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
            <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                        name="email"
                        value={formState.email}
                        onChange={handleFormChange}
                        disabled={disabled}
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="password"
                    >
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Mot de passe"
                        style={{ transition: "all .15s ease" }}
                        name="password"
                        id="password"
                        value={formState.password}
                        onChange={handleFormChange}
                        disabled={disabled}
                    />
                </div>

                <div className="text-center mt-6">
                    <input type="submit"
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        style={{ transition: "all .15s ease" }}
                        disabled={disabled}
                        value="Connexion"
                    />
                </div>
            </form>
        </div>
    </div>
}

LoginForm.propTypes = {
    disabled: PropTypes.bool,
    onSubmit: PropTypes.func
}

export default LoginForm
