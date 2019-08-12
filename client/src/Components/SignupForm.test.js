import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import SignupForm from './SignupForm';


describe('SignupForm', () => {
    it('renders without crashing', () => {
        render (<SignupForm />)
    })
});