import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useStore } from './lib/store';
import { Layout } from './components/Layout';
import { Auth } from './components/Auth';
import { Dashboard } from './pages/Dashboard';

function App() {
  const { user } = useStore();

  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="reviews" element={<div>Reviews</div>} />
              <Route path="news" element={<div>News</div>} />
              <Route path="issues" element={<div>Issues</div>} />
              <Route path="social" element={<div>Social</div>} />
              <Route path="trends" element={<div>Trends</div>} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Route>
          ) : (
            <>
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<Navigate to="/auth" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;