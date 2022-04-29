import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Compendium from '../src/views/Compendium';
import userEvent from '@testing-library/user-event';


describe('behavioral test for the dropdown', () => {
  it('should be able to select a certain status', async () => {
    render(
      <Compendium />
    );

    await waitForElementToBeRemoved(screen.getByText(/loading.../i));

    userEvent.selectOptions(screen.getByRole('combobox'), 'Alive');
    expect(screen.getByRole('option', { name: 'Alive' }).selected).toBe(true);

    const result = await screen.findAllByText(/alive/i);
    expect(result[0].textContent).toEqual('Alive');






  })

})