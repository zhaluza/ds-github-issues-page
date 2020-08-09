import React from 'react';
import './issue.scss';
import moment from 'moment';

interface IssueProps {
    title: string;
    url: string;
    number: number;
    labels: [];
    assignees: [];
    created_at: string;
    created_by: string;
}

const Issue: React.FC<IssueProps> = ({ title, url, number, labels, assignees, created_at, created_by }: IssueProps) => {
    return (
        <div className="issue">
            <a href={url}>{title}</a>
            <p>
                {number} opened {moment(created_at).fromNow()} by {created_by}
            </p>
        </div>
    );
};

export default Issue;
