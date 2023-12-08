import React from 'react';
import { usePageData } from 'rspress/runtime';

const Example = () => {
  const res = usePageData();
  console.log("res", process.env.slug)

  return <div style={{ textAlign: 'center' }}>Example</div>;
}

export default Example;
