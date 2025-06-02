
import { toast } from "sonner";

export const showSuccess = (title: string, description?: string) => {
  toast.success(title, {
    description,
  });
};

export const showInfo = (title: string, description?: string) => {
  toast.info(title, {
    description,
  });
};

export const showError = (title: string, description?: string) => {
  toast.error(title, {
    description,
  });
};
