import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: Props) => {
  return (
    <article className={`${className} border p-6 rounded-lg bg-white`}>
      {children}
    </article>
  );
};

export default Card;
