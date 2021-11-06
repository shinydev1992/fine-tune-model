import { CssBaseline, Text } from "@nextui-org/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <CssBaseline />
      <ToastContainer hideProgressBar />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error?: Error }
> {
  state: { error?: Error };

  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    toast.error(String(error));
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <Text h1 color="red">
          ${String(error)}
        </Text>
      );
    }

    return this.props.children;
  }
}
