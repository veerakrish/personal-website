import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Publications.css';

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get(
          'https://pub.orcid.org/v3.0/0000-0001-5762-4955/works',
          {
            headers: {
              'Accept': 'application/json'
            }
          }
        );
        
        // Extract and format the publications data
        const works = response.data.group;
        const formattedPublications = works.map(work => {
          const workSummary = work['work-summary'][0];
          return {
            title: workSummary.title?.['title']?.value || 'Untitled',
            type: workSummary.type,
            year: workSummary['publication-date']?.year?.value,
            journal: workSummary['journal-title']?.value,
            url: workSummary?.url?.value,
            doi: workSummary?.['external-ids']?.['external-id']?.find(id => id['external-id-type'] === 'doi')?.['external-id-value']
          };
        });

        setPublications(formattedPublications);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching publications:', err);
        setError('Failed to load publications');
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  if (loading) {
    return <div className="publications-loading">Loading publications...</div>;
  }

  if (error) {
    return <div className="publications-error">{error}</div>;
  }

  return (
    <div className="publications-container">
      <h3>Publications</h3>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <h4 className="publication-title">
              {pub.url ? (
                <a href={pub.url} target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h4>
            <div className="publication-meta">
              {pub.journal && <span className="journal">{pub.journal}</span>}
              {pub.year && <span className="year">{pub.year}</span>}
              {pub.type && <span className="type">{pub.type}</span>}
              {pub.doi && (
                <span className="doi">
                  <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                    DOI: {pub.doi}
                  </a>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
