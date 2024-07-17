import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface BreadcrumbsProps {
  currentPage: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage }) => {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} to="/">
        Home
      </Link>
      {currentPage !== "Home" && (
        <Typography color="textPrimary">{currentPage}</Typography>
      )}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
