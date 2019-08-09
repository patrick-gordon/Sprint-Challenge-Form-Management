import React from 'react'
import {render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import SignupForm from './SignupForm'


describe('<SignupForm />', () => {
    it('renders without crashing', () => {
        render (<SignupForm />)
    })
});