'use client';

import React, { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState('');
  const [githubUser, setGithubUser] = useState('');

  // Automatically fetch the avatar from GitHub's open API profile
  const avatarUrl = githubUser 
    ? `https://github.com/${githubUser}.png` 
    : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150';

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', fontFamily: 'system-ui, sans-serif', display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
      
      {/* LEFT: The Form Controller */}
      <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#f9fafb', padding: '25px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ margin: '0 0 5px 0', color: '#111827' }}>🪪 DevCard Generator</h2>
        <p style={{ margin: '0 0 25px 0', color: '#6b7280', fontSize: '14px' }}>Build your digital developer identification badge using Next.js.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Full Name</label>
            <input type="text" placeholder="e.g., Adhi" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Specialization Role</label>
            <input type="text" placeholder="e.g., Frontend Developer" value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Core Skills (Commas)</label>
            <input type="text" placeholder="e.g., React, Next.js, Git" value={skills} onChange={(e) => setSkills(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>GitHub Username</label>
            <input type="text" placeholder="e.g., Adhieeeh" value={githubUser} onChange={(e) => setGithubUser(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
          </div>
        </div>
      </div>

      {/* RIGHT: The Live Next.js Component Card */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '320px',
          height: '460px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)',
          borderRadius: '20px',
          padding: '25px',
          color: '#fff',
          boxShadow: '0 10px 25px rgba(49, 16, 66, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {/* Subtle Decorative Background Element */}
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }}></div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '10px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', color: '#a5b4fc' }}>DEV NETWORK ID</span>
            <span style={{ fontSize: '10px', backgroundColor: '#22c55e', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>ACTIVE</span>
          </div>

          {/* Avatar Area */}
          <img 
            src={avatarUrl} 
            alt="Profile Avatar" 
            style={{ width: '110px', height: '110px', borderRadius: '50%', border: '4px solid #6366f1', objectFit: 'cover', marginTop: '15px', backgroundColor: '#334155' }}
          />

          {/* User Information */}
          <div style={{ textAlign: 'center', marginTop: '10px', width: '100%' }}>
            <h2 style={{ margin: '0', fontSize: '22px', fontWeight: '700', letterSpacing: '0.5px' }}>{name || 'Your Name'}</h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#cbd5e1', fontWeight: '500' }}>{role || 'Software Engineer'}</p>
          </div>

          {/* Skills Badges */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', margin: '15px 0', width: '100%' }}>
            {skills ? skills.split(',').map((skill, index) => (
              <span key={index} style={{ fontSize: '11px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '6px', backdropFilter: 'blur(4px)' }}>
                {skill.trim()}
              </span>
            )) : (
              <>
                <span style={{ fontSize: '11px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '6px' }}>Code</span>
                <span style={{ fontSize: '11px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '6px' }}>Build</span>
              </>
            )}
          </div>

          {/* Footer Metadata */}
          <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
            <div>USER: <span style={{ color: '#fff', fontWeight: 'bold' }}>{githubUser || 'ghost'}</span></div>
            <div>ID: <span style={{ color: '#fff', fontWeight: 'bold' }}>#9982X</span></div>
          </div>
        </div>
      </div>

    </div>
  );
}