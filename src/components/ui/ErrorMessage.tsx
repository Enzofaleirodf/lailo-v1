
import React from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "./button";

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorMessage = ({
  title = "Erro",
  message,
  onRetry,
  className = ""
}: ErrorMessageProps): JSX.Element => {
  return (
    <div className={`text-center py-8 ${className}`}>
      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          Tentar novamente
        </Button>
      )}
    </div>
  );
};
