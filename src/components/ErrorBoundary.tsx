import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Erro capturado pelo ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 text-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">Algo deu errado.</h1>
            <p className="text-muted-foreground mb-4">
              Tente recarregar a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
