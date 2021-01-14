import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { Player } from '../../components';
import { PlayButton } from '../../components/header/styles/header';

describe('<Player/>', () => {
  it('renders the <Player /> with a bynny video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <PlayButton />
        <Player.Video src="/videos/bunny.mp4" />
      </Player>
    );

    expect(queryByTestId('player')).toBeFalsy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeTruthy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeFalsy();
    expect(container.firstChild.toMatchSnapshot());
  });
});
