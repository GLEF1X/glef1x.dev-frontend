/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";
import { useTheme } from "../core/theme.js";
import { ErrorBoundary } from "./ErrorBoundary.js";

export function App(): JSX.Element {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>Hello world</ErrorBoundary>
    </ThemeProvider>
  );
}
