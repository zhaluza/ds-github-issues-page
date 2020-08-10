import React from 'react';
import './label.scss';

interface LabelProps {
    name: string;
    color: string;
}

const Label: React.FC<LabelProps> = ({ name, color }: LabelProps) => {
    const textColor = color === 'b60205' ? 'white' : 'black';
    return (
        <p className="label" style={{ backgroundColor: `#${color}`, color: textColor }}>
            {name}
        </p>
    );
};

export default Label;
