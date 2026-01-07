import React from 'react';

export type WorkStatusType = 'open' | 'consultant' | 'working';

interface WorkStatusProps {
    status: WorkStatusType;
    company?: string;
}

export const WorkStatus: React.FC<WorkStatusProps> = ({ status, company }) => {
    const getStatusConfig = () => {
        switch (status) {
            case 'open':
                return { text: 'Open to Work', color: '#10b981' };
            case 'consultant':
                return { text: 'Try and Hire', color: '#10b981' };
            case 'working':
                return { text: `Working at ${company || '___'}`, color: '#94a3b8' };
            default:
                return { text: 'Open to Work', color: '#10b981' };
        }
    };

    const { text, color } = getStatusConfig();

    return (
        <div className={`work-status-pill ${status}`}>
            <span className="work-status-indicator" style={{ backgroundColor: color }}></span>
            <span className="work-status-text">{text}</span>
        </div>
    );
};
