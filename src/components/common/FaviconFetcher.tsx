import React, { useState } from 'react';
import { getFaviconUrl } from '../../services/faviconService';

const FaviconFetcher: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [favicon, setFavicon] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchFavicon = async () => {
    setLoading(true);
    setError(null);
    setFavicon(null);
    try {
      const faviconUrl = await getFaviconUrl(url);
      setFavicon(faviconUrl);
    } catch (err) {
      setError('Failed to fetch favicon.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
        style={{ padding: '10px', width: '300px' }}
      />
      <button
        onClick={handleFetchFavicon}
        style={{ padding: '10px', marginLeft: '10px' }}
      >
        Fetch Favicon
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {favicon && (
        <div>
          <p>Favicon:</p>
          <img
            src={favicon}
            alt="Favicon"
            style={{ width: '32px', height: '32px' }}
          />
        </div>
      )}
    </div>
  );
};

export default FaviconFetcher;
