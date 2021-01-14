import React from 'react';
import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.RelaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
