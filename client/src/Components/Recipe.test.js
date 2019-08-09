import React from 'react'
import { multiply } from './Recipies'
import {render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

describe('<Recipes />', () => {

    describe('multiply()', () => {
        it('shoudl multiply the two numbers', () => {
            expect(multiply(2,2)).toBe(4);
        })
    })


})