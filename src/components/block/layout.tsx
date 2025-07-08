// src/theme/Layout.jsx
import React from 'react';
import { usePageData, NoSSR } from 'rspress/runtime';
import PasswordProtector from '@site/src/components/PasswordProtector';

const Layout = ({ children }) => {
  const { page } = usePageData();
  const pagePassword = page.frontmatter?.password;
  
  // 仅在需要密码保护的页面上使用保护器
  const content = pagePassword ? (
    <PasswordProtector password={pagePassword}>
      {children}
    </PasswordProtector>
  ) : children;
  
  return (
    <NoSSR>
      <div className="rp-layout">
        {content}
      </div>
    </NoSSR>
  );
};

export default Layout;
