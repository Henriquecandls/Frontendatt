import React from "react";

interface Props {
    children: React.ReactNode;
    type: "question" | "answer";
}

const Message = ({ children, type }: Props) => {
    if (type == "question") {
        return <div className="question">{children}</div>;
    }

    if (type == "answer") {
        return <div className="answer">{children}</div>;
    }

    return null;
};

export default Message;