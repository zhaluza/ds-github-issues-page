import React from 'react';
import './issue.scss';
import moment from 'moment';

interface IssueProps {
    title: string;
    url: string;
    number: number;
    labels: [
        {
            node: {
                description: string;
                color: string;
            };
        },
    ];
    assignees: [{ node: { avatarUrl: string } }];
    createdAt: string;
    author: string;
}

const Issue: React.FC<IssueProps> = ({ title, url, number, labels, assignees, createdAt, author }: IssueProps) => {
    return (
        <div className="issue">
            <a href={url}>{title}</a>
            <p>
                {number} opened {moment(createdAt).fromNow()} by {author}
            </p>
        </div>
    );
};

export default Issue;
