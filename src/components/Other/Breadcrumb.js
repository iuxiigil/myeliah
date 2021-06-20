import React from "react";

export const BreadcrumbItem = ({ name, current }) => {
  return <li className={current && "active"}>{name}</li>;
};

export const Breadcrumb = ({ title, children }) => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <h5>{title}</h5>
        <ul>{children}</ul>
      </div>
    </div>
  );
};
