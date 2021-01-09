import React, { useState } from 'react';

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle() {
  return <Title {...restProps}>{children}</Title>;
};
