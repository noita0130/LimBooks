import { Loader2 } from "lucide-react";

const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
    </div>
);

export default LoadingSpinner;