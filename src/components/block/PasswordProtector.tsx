// src/components/PasswordProtector.jsx
import React, { useState } from 'react';

const PasswordProtector = ({ children, password }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  
  // 检查本地存储中是否已有认证
  React.useEffect(() => {
    const storedAuth = localStorage.getItem('contentAuthenticated');
    if (storedAuth === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputPassword === password) {
      setAuthenticated(true);
      localStorage.setItem('contentAuthenticated', 'true');
    } else {
      setError('密码不正确，请重试');
      setTimeout(() => setError(''), 2000);
    }
  };

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
      padding: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '30px',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#1a2980' }}>受保护内容</h2>
        <p style={{ marginBottom: '20px', color: '#555' }}>
          请输入访问密码查看此内容
        </p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="输入访问密码"
            style={{
              width: '100%',
              padding: '12px 15px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '15px'
            }}
            autoFocus
          />
          
          {error && (
            <p style={{ color: '#e74c3c', marginBottom: '15px' }}>{error}</p>
          )}
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#1a2980',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0d1a66'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1a2980'}
          >
            解锁内容
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtector;
