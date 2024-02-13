import '@testing-library/jest-dom'
import {render, screen } from "@testing-library/react"
import { describe, expect, it, beforeEach } from "vitest";
import App from "../components/App"
import userEvent from '@testing-library/user-event'

describe('App Component', () => {

    let container

    beforeEach(() => {
        container = render(<App />).container
    })

    it('renders the home component', () => {
        expect(container.querySelector('h3')).toHaveTextContent('Journal Entries')}
        )
    it ('renders CategorySelection when Create Entry Menu item is clicked', async () => {
        
        await userEvent.click(screen.getByText('New Entry'))

        expect(container.querySelector('h3')).not.toBeNull()
        expect(container.querySelector('h3')).not.toHaveTextContent('Please select a category:')
    }
        )
    }
    )