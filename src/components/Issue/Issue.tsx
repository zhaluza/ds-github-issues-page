import React from 'react';
import Label from '../Label';
import './issue.scss';
import moment from 'moment';

interface IssueProps {
    title: string;
    url: string;
    number: number;
    labels: [
        {
            node: {
                name: string;
                color: string;
            };
        },
    ];
    assignees: [{ node: { avatarUrl: string } }];
    createdAt: string;
    author: string;
    comments: number;
}

const Issue: React.FC<IssueProps> = ({
    title,
    url,
    number,
    labels,
    assignees,
    createdAt,
    author,
    comments,
}: IssueProps) => {
    const labelList = labels.map((label) => {
        const { name, color } = label.node;
        return <Label key={name} name={name} color={color} />;
    });
    const assigneeList = assignees.map((assignee) => (
        <img key={assignee.node.avatarUrl} src={assignee.node.avatarUrl} />
    ));
    return (
        <div className="issue">
            <div className="issue-left">
                <i className="fas fa-exclamation-circle"></i>

                <a href={url}>{title}</a>
                {labelList}
            </div>
            <p className="issue-details">
                #{number} opened {moment(createdAt).fromNow()} by {author}
            </p>
            <div className="issue-right">
                <div className="images">{assigneeList}</div>
                {comments > 0 && (
                    <div className="comments">
                        <i className="far fa-comment-alt"></i> {comments}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Issue;
