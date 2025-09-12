import React from 'react';

interface ConceptLinkProps {
  concept: string;
  children?: React.ReactNode;
  showPreview?: boolean;
  className?: string;
}

export function ConceptLink({ 
  concept, 
  children, 
  showPreview = true, 
  className = '' 
}: ConceptLinkProps) {
  const displayText = children || concept.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <a
      href={`/concepts/${concept}`}
      className={`concept-link ${className}`}
      data-concept={concept}
      data-preview={showPreview}
      onClick={(e) => {
        if (showPreview && !e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          // Modal will handle this via event delegation
        }
      }}
      title={`Learn about ${displayText}`}
    >
      {displayText}
    </a>
  );
}

// Shorthand component for common terms
interface TermProps {
  id: string;
  children?: React.ReactNode;
  showPreview?: boolean;
}

export function Term({ id, children, showPreview = true }: TermProps) {
  return (
    <ConceptLink concept={id} showPreview={showPreview}>
      {children}
    </ConceptLink>
  );
}

// Component for concept bridges (engineering → product)
interface ConceptBridgeProps {
  from: string;
  to: string;
  className?: string;
}

export function ConceptBridge({ from, to, className = '' }: ConceptBridgeProps) {
  return (
    <span className={`concept-bridge ${className}`}>
      <ConceptLink concept={from} showPreview={true} />
      <span className="bridge-arrow"> → </span>
      <ConceptLink concept={to} showPreview={true} />
    </span>
  );
}

// Component for concept comparisons
interface ConceptComparisonProps {
  engineering: string;
  product: string;
  className?: string;
}

export function ConceptComparison({ engineering, product, className = '' }: ConceptComparisonProps) {
  return (
    <div className={`concept-comparison ${className}`}>
      <div className="comparison-item">
        <span className="comparison-label">Engineering:</span>
        <ConceptLink concept={engineering} showPreview={true} />
      </div>
      <div className="comparison-arrow">→</div>
      <div className="comparison-item">
        <span className="comparison-label">Product:</span>
        <ConceptLink concept={product} showPreview={true} />
      </div>
    </div>
  );
}
