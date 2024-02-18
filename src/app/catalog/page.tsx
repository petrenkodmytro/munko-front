import Card from '@/components/card/Card';
import Link from 'next/link';
import React from 'react';

const Catalog = () => {
  return <Link href={`/catalog/1`}>Link to ProductCard</Link>;
};

export default Catalog;

{/* <Link href={`/catalog/${card.id}`}> */}