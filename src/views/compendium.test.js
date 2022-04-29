import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Compendium from "./Compendium";

describe('header', () => {
  test('Should render the header, character, and loading', async () => {
    render(
      <MemoryRouter>
        <Compendium />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(screen.getByText(/loading.../i));

    const header = await screen.findByText(/Rick and Morty Characters!!/i)
    expect(header).toBeInTheDocument();
    const characterList = await screen.findAllByRole('listitem');
    expect(characterList.length).toEqual(3);
    expect(characterList[0].outerHTML).toContain('<li class=\"rick\"><img src=\"https://rickandmortyapi.com/api/character/avatar/1.jpeg\"><h3>Rick Sanchez</h3><p>Alive</p></li>');

  })


})